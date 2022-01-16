import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { data: [] };

  onSearchSubmit = async (search) => {
    this.setState({ term: search });
    const response = await unsplash.get('/search/photos', {
      params: { query: search }
    });

    this.setState({ data: response.data.results });
  }

  render () {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.data} />
      </div>
    );
  }
};

export default App;
