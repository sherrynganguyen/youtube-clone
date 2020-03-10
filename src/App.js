import React from 'react';

import { Grid } from '@material-ui/core';
import {SearchBar, VideoList, VideoDetail} from './components/index';
import youtube from './api/youtube';

class App extends React.Component {
  render() {
    return (
      <Grid
        container
        spacing={16}
        justify="center"
      >
        <Grid item xs={12}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <SearchBar/>
              {/* search bar */}
            </Grid>
            <Grid item xs={8}>
              <VideoDetail/>
              {/* main video */}
            </Grid>
            <Grid item xs={4}>
              <VideoList/>
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