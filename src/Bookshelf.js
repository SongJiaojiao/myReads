import React from 'react'
import {Link} from 'react-router-dom'
import Booklist from './Booklist'


const Bookshelf =props=>{

    //separating books based on shelf name
    const subBooklist = shelfname =>props.booklist.filter(book=>book.shelf===shelfname)
    
    const onChangeshelf = (newshelf,bookid)=>{
        props.onChangeshelf(newshelf,bookid)
    }
    
    
    return (
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <Booklist booklist = {subBooklist("currentlyReading")} onChangeshelf = {onChangeshelf}/>
                        </div>

                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <Booklist booklist = {subBooklist("wantToRead")} onChangeshelf = {onChangeshelf}/>
                        </div>

                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <Booklist booklist = {subBooklist("read")} onChangeshelf = {onChangeshelf}/>
                        </div>

                    </div>
                </div>
                <div className="open-search">
              <Link to = '/search'>Add a book</Link>
              </div>
 
          </div>

            
        )
        

}

export default Bookshelf