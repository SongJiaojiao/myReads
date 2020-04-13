import React from 'react'
import Booklist from './Booklist'
import {Link} from 'react-router-dom'
import SearchBox from './SearchBox'
import * as BooksAPI from './BooksAPI'

//receive booklist for compare
class SearchBooks extends React.Component{
    state = {
        searchResults:[]
    }

    //for some reason the compare if condition does not work, all the books will be shwon in shelf "none"
    onSearchBooks = (keyword) =>{
        if (keyword){
            BooksAPI.search(keyword)
              .then(res => {
                  if (res && res.error!=='empty query'){  
                      const Results = res;
                      Results.forEach(book=>{
                          if(this.props.booklist){
                              this.props.booklist.forEach(myBook=>{
                                  if (book.id == myBook.id){
                                      book.shelf = myBook.shelf
                                  }
                                  else {book.shelf = 'none'}
                              })}
                      })

                      this.setState({
                        searchResults:Results
                        })
                  }})
            .catch(error => console.log(error))
        }    
    }

    onChangeshelf = (newshelf,bookid) =>{
        this.props.onChangeshelf(newshelf,bookid)

        let booktitle
        Object.values(this.state.searchResults).forEach(book=>{
            if(book.id === bookid){
                booktitle = book.title
            }
        })
        alert( `${booktitle} has been added to ${newshelf}`)
    }

    render(){
     
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/' >Close</Link>
                    <SearchBox onSearchBooks = {this.onSearchBooks}/>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                       <Booklist booklist = {this.state.searchResults} onChangeshelf = {this.onChangeshelf}/> 
                    </ol>
                </div>
          </div>
        )
    }


}

export default SearchBooks