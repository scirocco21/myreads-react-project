import React, {Component} from 'react'
import BookshelfContainer from './Components/BookshelfContainer'
import SearchPage from './Components/SearchPage'
import { getAll, update } from './BooksAPI'
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import './css/App.css'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    getAll().then(books => this.setState({books: books}))
  }

  changeShelf = (e, book) => {
    let shelf = e.target.value;
    let bookId = book.id
    // either update the book if it's already in the state or add it to the state if it isn't
    if (this.state.books.some( book => book.id === bookId)) {
      const books = this.state.books.map(book => {
      return book.id === bookId ? { ...book, shelf: shelf } : book
      })
      this.setState({ books });
    } else {
    // state is not manipulated directly because concat creates copy of array and setState is invoked
      this.setState({ books: this.state.books.concat({...book, shelf: shelf}) });
    }
    update(book, shelf)
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path='/' render={(props) => (<BookshelfContainer {...props} changeShelf={this.changeShelf} books={this.state.books}/>)} />
            <Route exact path='/search' render={(props) => (<SearchPage {...props} changeShelf={this.changeShelf} books={this.state.books} />)} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default BooksApp
