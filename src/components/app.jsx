import React, { Component } from 'react';

import giphy from 'giphy-api';

import Search from './search.jsx';
import Gif from './gif.jsx';
import GifList from './gifslist.jsx';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifID: "iWv4othrGoNwY"
    }
  }

  search = (query) => {
    giphy('UebdW33G9vaBRJEYKUzMofSne4VurvDq').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  render() {
    return (
      <div>
          <div className="left-scene">
            <Search search={this.search} />
            <div className="selected-gif">
              <Gif id={this.state.selectedGifID} />
            </div>

          </div>


          <div className="right-scene">
            <GifList gifs={this.state.gifs} />
          </div>
      </div>
    );
  }
}

export default App;
