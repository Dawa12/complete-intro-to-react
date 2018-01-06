// @flow

<<<<<<< HEAD
import React from 'react';
import { connect } from 'react-redux';
import ShowCard from './ShowCard';
import Header from './Header';

const Search = (props: {
  searchTerm: string, // eslint-disable-line react/no-unused-prop-types
  shows: Array<Show>
}) => (
  <div className="search">
    <Header showSearch />
    <div>
      {props.shows
        .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(props.searchTerm.toUpperCase()) >= 0)
        .map((show, index) => <ShowCard {...show} key={show.imdbID} id={index} />)}
    </div>
  </div>
);

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

export const Unwrapped = Search;
export default connect(mapStateToProps)(Search);
=======
import React, { Component } from 'react';
import ShowCard from './ShowCard';
import preload from '../data.json';

class Search extends Component {
  state = {
    searchTerm: ''
  };
  handleSearchTermChange = (event: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type="text"
            placeholder="Search"
          />
        </header>
        <div>
          {preload.shows
            .filter(
              show =>
                `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
>>>>>>> v3-14
