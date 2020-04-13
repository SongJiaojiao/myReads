import React from 'react'
import Booklist from './Booklist'
import {Link,Route} from 'react-router-dom'

class Bookshelf extends React.Component{

    SubBooklist = shelfname =>this.props.booklist.filter(book=>book.shelf===shelfname)
    
    onChangeshelf = (newshelf,bookid)=>{
        this.props.onChangeshelf(newshelf,bookid)
    }
    render(){
        return (
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <Booklist booklist = {this.SubBooklist("currentlyReading")} onChangeshelf = {this.onChangeshelf}/>
                        </div>

                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <Booklist booklist = {this.SubBooklist("wantToRead")} onChangeshelf = {this.onChangeshelf}/>
                        </div>

                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <Booklist booklist = {this.SubBooklist("read")} onChangeshelf = {this.onChangeshelf}/>
                        </div>

                    </div>
                </div>
                <div className="open-search">
              <Link to = '/search'>Add a book</Link>
              </div>
 
          </div>

            
        )
        }

}

export default Bookshelf