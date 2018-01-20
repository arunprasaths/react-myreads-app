import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBook extends Component {

    state = {
        query : '',
        books: []
    }

    clearQuery = () => {
        this.setState({ query: '', books: []})
    }

    updateQuery = (query) => {
        this.setState({  query : query.trim() })
    }     

    handleSearch = (query) => {
        if(!query) {
            this.clearQuery(query)
        } else{         
            this.updateQuery(query)

            BooksAPI.search(query).then(books => {
                books.map(book => (this.props.books.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)))
                this.setState({ books })            
            })   
        }
    }

    render(){
        const { updateBook } = this.props
        const { query, books } = this.state;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">                      
                        <input type="text"
                        autoFocus
                        value={query}  
                        onChange={(event) => this.handleSearch(event.target.value)} 
                        placeholder="Search by title or author" />
                    </div>                   
                </div>
                <div className="search-books-results">                     
                    { books.length && (                                     
                    <ol className="books-grid">  
                        {books.map(book => 
                            <Book key={book.id} book={book} updateBook={updateBook} />
                        )}                        
                    </ol>                    
                    )}
                </div>               
            </div>
        )
    }
}

export default SearchBook