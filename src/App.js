import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Link,Route} from 'react-router-dom'
import Bookshelf from './Bookshelf'
import SearchBooks from './SearchBooks'


class BooksApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    			myBooks:[]
    }
  }
  

  getBooks = () => {
    BooksAPI.getAll()
      .then(res => this.setState({
      		myBooks: res
    	}))
  }

  componentDidMount() {
    this.getBooks()
   }

  
  onChangeshelf = (newshelf,bookid)=>{
            const curBook = {id:bookid}
            BooksAPI.update(curBook, newshelf)
            .then(() => this.getBooks())
  }

  render() {
    
    console.log(this.state.myBooks)
    return (
      
      <div className="app">
      
          <Route  path = '/search' render ={()=>(
                  <SearchBooks booklist = {this.state.myBooks} onChangeshelf = {this.onChangeshelf}/>)} 
          />
          <Route exact path = '/' render={()=>(
                  <Bookshelf booklist = {this.state.myBooks} onChangeshelf = {this.onChangeshelf}/>)} 
          />

      </div>
     
    )
  }
}

export default BooksApp
