import React, {Component} from 'react'


class Book extends Component {
  render() {
    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.previewLink}")` }}></div>
          <div className="book-shelf-changer">
            <select onChange={(e) => this.props.changeShelf(e, this.props.book.id)}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        {this.props.book.authors.map(author =>
          <div className="book-authors">{author}</div>
        )}
      </div>
    )
  }
}

export default Book;