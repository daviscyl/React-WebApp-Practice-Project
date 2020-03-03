import React from "react";
import { NotificationContainer, NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { Route } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import * as BooksAPI from "./BooksAPI";
import MyReads from "./MyReads";
import Search from "./Search";

class BooksApp extends React.Component {
  state = {
    myReads: {}
  };

  componentDidMount() {
    BooksAPI.getAll()
      .then(books =>
        books.reduce((res, book) => {
          res[book.id] = book;
          return res;
        }, {})
      )
      .then(res => this.setState({ myReads: res }));
  }

  update = (book, shelf) => {
    this.setState(state => {
      book.shelf = shelf;
      state.myReads[book.id] = book;
      return state.myReads;
    });
    BooksAPI.update(book, shelf);
    switch (shelf) {
      case "currentlyReading":
        NotificationManager.success(`${book.title}`, "Added -> Currently Reading:");
        break;
      case "wantToRead":
        NotificationManager.success(`${book.title}`, "Added -> Want To Read:");
        break;
      case "read":
        NotificationManager.success(`${book.title}`, "Added -> Read:");
        break;
      default:
        NotificationManager.warning(`${book.title}`, "Removed From MyReads:");
        break;
    }
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <MyReads myReads={this.state.myReads} update={this.update} />} />
        <Route path="/search" render={() => <Search myReads={this.state.myReads} update={this.update} />} />
        <NotificationContainer />
      </div>
    );
  }
}

export default BooksApp;
