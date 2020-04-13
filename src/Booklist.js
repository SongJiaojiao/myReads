import React from 'react'
import Book from './Book'

/* Booklist receive an array of book object */
class Booklist extends React.Component{

    onChangeshelf =(newshelf,bookid)=>{
        this.props.onChangeshelf(newshelf,bookid)

    }
    render(){
    return (
        <div className="bookshelf-books">
                    <ol className="books-grid">
                     {this.props.booklist?(
                         this.props.booklist.map(book=>
                                            <li><Book bookinfo = {book} onChangeshelf = {this.onChangeshelf}/></li>
                                            )
                     ):
                     ( <p>Loading...</p>)
                     }
                    </ol>
        </div>

    )
 }

 }


export default Booklist