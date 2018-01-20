import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBook from './SearchBook'
import ListBooks from './ListBooks'
import './App.css'

class BooksApp extends Component {

  state = {
    books: []    
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
        this.setState({books})
    })
  }

  updateBook = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(result => {       
        book.shelf = newShelf;
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([book])
        }));
      })
  }

  render() {
    
    return (
      <div className="app">
        <Route exact path="/" render={() => ( <ListBooks books={this.state.books} updateBook={this.updateBook} /> )}/>
        <Route path="/search" render={(history) => (<SearchBook books={this.state.books} updateBook={this.updateBook }/>)}/>
      </div>
    )
  }
}

export default BooksApp