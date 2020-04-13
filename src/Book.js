import React from 'react'
import Bookshelfchanger from './Bookshelfchanger';

/* Book receives a book object containing at least title, imageLinks, authors and shelf*/
class Book extends React.Component {
  state = {
    shelf: this.props.bookinfo.shelf
  }

  getImage = () => {
    const bookinfo = this.props.bookinfo;
    if (bookinfo.imageLinks === undefined) {
      return ''
    }
    if (bookinfo.imageLinks.thumbnail === undefined) {
      return ''
    } else {
      return bookinfo.imageLinks.thumbnail
    }
  }

  //pass book id and new shelf 
  onChangeshelf = (newshelf) => {
    if (newshelf !== this.state.shelf) {
      this.setState({
        shelf: newshelf
      }, () => this.props.onChangeshelf(this.state.shelf, this.props.bookinfo.id))
    }
  }

  render() {
    let imgLink = this.getImage()
    return (
      <div>
        {this.props.bookinfo ? (<div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imgLink})` }}></div>
            <Bookshelfchanger shelf={this.state.shelf} onChangeshelf={this.onChangeshelf} />
          </div>
          <div className="book-title">{this.props.bookinfo.title}</div>
          <div className="book-authors">{
            this.props.bookinfo.authors &&
            this.props.bookinfo.authors.map((author, index) =>
              <div key={index}>{author}</div>
            )
          }
          </div></div>)
          : (<div></div>)
        }


      </div>)
  }

}

export default Book