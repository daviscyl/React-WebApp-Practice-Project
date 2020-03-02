import React from "react";
import { Route } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import * as BooksAPI from "./BooksAPI";
import MyReads from "./MyReads";
import Search from "./Search";

class BooksApp extends React.Component {
  state = {
    myReads: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(myReads => this.setState({ myReads }));
  }

  update = (book, shelf) => {
    this.setState(state => {
      book.shelf = shelf;
      return { myReads: state.myReads.filter(b => b.id !== book.id).concat([book]) };
    });
    BooksAPI.update(book, shelf);
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <MyReads myReads={this.state.myReads} update={this.update} />} />
        <Route path="/search" render={() => <Search update={this.update} />} />
      </div>
    );
  }
}

export default BooksApp;
