import React from 'react'
import Book from './Book'

/* Booklist receive an array of book object */
const Booklist = props => {

    const onChangeshelf = (newshelf, bookid) => {
        props.onChangeshelf(newshelf, bookid)
    }

        return (
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.booklist ? (
                        props.booklist.map(book =>
                            <li key={book.id}><Book bookinfo={book} onChangeshelf={onChangeshelf} /></li>
                        )
                    ) :
                        (<p>Loading...</p>)
                    }
                </ol>
            </div>

        )
    }




export default Booklist