import React, { Component } from "react";
import PropTypes from "prop-types";

class Grid extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    update: PropTypes.func.isRequired
  };

  render() {
    const { books, update } = this.props;
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book =>
            "imageLinks" in book ? (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url("${book.imageLinks.smallThumbnail}")`
                      }}
                    ></div>
                    <div className="book-shelf-changer">
                      <select defaultValue={"shelf" in book ? book.shelf : "none"} onChange={e => update(book, e.target.value)}>
                        <option value="move" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
            ) : null
          )}
        </ol>
      </div>
    );
  }
}

export default Grid;
