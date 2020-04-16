import React from 'react';

import { Grid } from '@material-ui/core';
import {SearchBar, VideoList, VideoDetail} from './components/index';
import youtube from './api/youtube';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  }
  componentDidMount(){
    this.handleSubmit('so rang')
  }
  onVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }
  handleSubmit = async(searchTerm) => {
    console.log('>>',process.env.REACT_APP_YOUTUBE_API)
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 10,
        q: searchTerm,
        key: process.env.REACT_APP_YOUTUBE_API,
      }
    });
    this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
    console.log(response);
  }
  render() {
    const {videos, selectedVideo} = this.state;
    return (
      <Grid container spacing={10} justify="center">
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit}/>
              {/* search bar */}
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo}/>
              {/* main video */}
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
              {/* video list */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

// const App = () => {
//   return (
//     <h1>Hello There</h1>
//   )
// }

export default App;