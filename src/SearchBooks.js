import React from 'react'
import {Link} from 'react-router-dom'
import Booklist from './Booklist'
import SearchBox from './SearchBox'
import * as BooksAPI from './BooksAPI'

//receive booklist for compare
class SearchBooks extends React.Component{
    state = {
        searchResults:[]
    }

    handleResults = (res) => {
        if (res && res.error!=='empty query'){  
            res.forEach(book=>{
                book.shelf = 'none'
                if(this.props.booklist){
                    this.props.booklist.forEach(myBook=>{
                        if (book.id === myBook.id){
                            book.shelf = myBook.shelf
                        }
                    })}
            })
            this.setState({
              searchResults:res
              },()=>console.log(this.state.searchResults))
        }
        
        else {
           this.setState({
              searchResults:[]
              })
            }        
    }

    onSearchBooks = (keyword) =>{       
        BooksAPI.search(keyword)
            .then(res => {this.handleResults(res)})
            .catch(error => console.log(error))
    
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