import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBook from './SearchBook'
import ListBooks from './ListBooks'
import NoMatch from './NoMatch'
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
        <Switch>
          <Route exact path="/" render={() => ( <ListBooks books={this.state.books} updateBook={this.updateBook} /> )}/>
          <Route path="/search" render={(history) => (<SearchBook books={this.state.books} updateBook={this.updateBook }/>)}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp