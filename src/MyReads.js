import React, { Component } from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";

class MyReads extends Component {
  render() {
    const {currentlyReading, wantToRead, read} = this.props.myReads;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf shelfName="Currently Reading" books={currentlyReading} />
            <Shelf shelfName="Want To Read" books={wantToRead} />
            <Shelf shelfName="Read" books={read} />
          </div>
        </div>
        <div className="open-search">
          <Link className='open-search-button' to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default MyReads