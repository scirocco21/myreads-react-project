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
            <nav className="navbar navbar-dark navbar-expand-sm">
                <ul className="navbar-nav mr-auto nav-fill w-100">
                  <li className="nav-item">
                    <a className="navbar-brand" href="#splash-page"><span>MyReads</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#current"><span>Currently Reading</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#want-to-read"><span>Want to Read</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#read"><span>Read</span></a>
                  </li>
                </ul>

            </nav>
          </div>
          <div id="splash-page">
            <img src={require("../images/cover.jpg")} alt="open books"/>
            <div id="lead-text">
              <h1>MyReads.</h1>
              <h4><em>Your personal bookshelf</em></h4>
            </div>
          </div>
          <section id="explainer">
            <h5>How it works:</h5>
            <hr className='underscore'/>
            <ul>
              <li><img src={require('../icons/add-circular-outlined-button.png')} style={{width: "3vw", color: 'black'}} alt="plus button"/> <span>Hit the plus button in the bottom right corner to find new books</span></li>
              <li><img src={require('../icons/drop-down-arrow.png')} style={{width: "3vw"}} alt="dropbown button"/><span>Move books in your collection from one shelf to another</span></li>
              <li><img src={require('../icons/book-hand-drawn-opened-tool.png')} style={{width: "3vw"}} alt="open book"/><span>Have fun!</span></li>
            </ul>
          </section>
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
