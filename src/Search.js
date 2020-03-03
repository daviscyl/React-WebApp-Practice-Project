import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Grid from "./Grid";

class Search extends Component {
  state = {
    query: "",
    results: []
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={e => {
                const q = e.target.value.trim();
                this.setState({ query: q });
                if (q) {
                  BooksAPI.search(q).then(r => this.setState({ results: "error" in r ? [] : r }));
                } else {
                  this.setState({ results: [] });
                }
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <Grid books={this.state.results} update={this.props.update} />
        </div>
      </div>
    );
  }
}

export default Search;
