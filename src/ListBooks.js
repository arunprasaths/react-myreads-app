import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'
import BookShelf from './BookShelf'


class ListBooks extends Component{

    booksInShelf = (shelf) => {
        return this.props.books.filter(b => b.shelf === shelf)
    }

    render(){
        const { books, updateBook } = this.props

        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf title="Currently Reading" books={this.booksInShelf("currentlyReading")} updateBook={updateBook} />
                        <BookShelf title="Want To Read" books={this.booksInShelf("wantToRead")} updateBook={updateBook}/>
                        <BookShelf title="Read" books={this.booksInShelf("read")} updateBook={updateBook}/>          
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
               </div>
            </div>
        )       
    }
}

export default ListBooks