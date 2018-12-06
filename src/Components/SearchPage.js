import React, {Component} from 'react'
import Book from './Book.js'
import { Link } from 'react-router-dom'
import {search} from '../BooksAPI.js'

class SearchPage extends Component {
  state = {
    query: "",
    results: [],
    errrorMessage: ""
  }

  handleResponse = response => {
    if (this.state.query && response.error) {
      this.setState({
        errorMessage: "No results found",
        results: ""
      })
    } else {
      this.setState({
        errorMessage: "",
        results: response,

      })
    }
  }

  updateQuery = query => {
    this.setState( {query: query});
    search(query).then(response => this.handleResponse(response))
  }


  render() {
    let books;
    if (this.state.results) {
      books = this.state.results.map(book => <li key={book.id}><Book book={book} changeShelf={this.props.changeShelf}/></li>)
    }

    return  (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.errorMessage}
            {this.state.results && books}
          </ol>
        </div>
      </div>
    )
  }
}
export default SearchPage
