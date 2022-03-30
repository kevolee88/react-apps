import React from 'react';

class SearchBar extends React.Component {
  state = {search: ''};

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.search)
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui fluid huge icon input">
            <input
              id="video-search"
              type="text"
              placeholder="Search..."
              value={this.state.search}
              onChange={(e) => this.setState({search: e.target.value})}
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    )
  };
};

export default SearchBar;
