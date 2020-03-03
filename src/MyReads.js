import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Grid from "./Grid";

class MyReads extends Component {
  static propTypes = {
    myReads: PropTypes.object.isRequired
  };

  render() {
    const { myReads, update } = this.props;
    const currentlyReading = Object.values(myReads).filter(book => book.shelf === "currentlyReading");
    const wantToRead = Object.values(myReads).filter(book => book.shelf === "wantToRead");
    const read = Object.values(myReads).filter(book => book.shelf === "read");

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <Grid books={currentlyReading} update={update} />
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want To Read</h2>
              <Grid books={wantToRead} update={update} />
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <Grid books={read} update={update} />
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link className="open-search-button" to="/search">
            Add a book
          </Link>
        </div>
      </div>
    );
  }
}

export default MyReads;
