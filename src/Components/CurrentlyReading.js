import React, {Component} from 'react'
import Book from './Book'

class CurrentlyReading extends Component {

render() {
  const bookList = this.props.books.map(book => <li key={book.id}><Book  book={book} changeShelf={this.props.changeShelf} /></li>)

  return (

    <section className="bookshelf" id="current">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {bookList}
        </ol>
      </div>
    </section>
    )
  }
}

export default CurrentlyReading;
