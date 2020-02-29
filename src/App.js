import React from "react";
import { Route } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import MyReads from "./MyReads";
import Search from "./Search";

class BooksApp extends React.Component {
  state = {
    myReads: { currentlyReading: [], wantToRead: [], read: [] }
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <MyReads myReads={this.state.myReads} />} />
        <Route path="/search" render={() => <Search />} />
      </div>
    );
  }
}

export default BooksApp;
