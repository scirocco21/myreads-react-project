import React, {Component} from 'react'
import CurrentlyReading from './CurrentlyReading'
import Read from './Read'
import WantToRead from './WantToRead'
import {Link} from 'react-router-dom'

class BookshelfContainer extends Component {

  render() {
    const read = this.props.books.filter(book => book.shelf === "read")
    const currentlyReading = this.props.books.filter(book => book.shelf === "currentlyReading")
    const wantToRead = this.props.books.filter(book => book.shelf === "wantToRead")

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <CurrentlyReading books={currentlyReading} changeShelf={this.props.changeShelf}/>
            <WantToRead books={wantToRead} changeShelf={this.props.changeShelf}/>
            <Read books={read} changeShelf={this.props.changeShelf} />
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BookshelfContainer
