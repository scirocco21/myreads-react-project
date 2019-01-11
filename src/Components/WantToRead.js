import React, {Component} from 'react'
import Book from './Book'

class WantToRead extends Component {
  render() {
    const bookList = this.props.books.map(book => <li key={book.id}><Book book={book} changeShelf={this.props.changeShelf} /></li>)

    return (
      <section className="bookshelf" id="want-to-read">
        <h2 className="bookshelf-title">Want To Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {bookList}
          </ol>
        </div>
      </section>
    )
  }
}

export default WantToRead;
