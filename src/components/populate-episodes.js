/** @jsx jsx */
import { jsx, Spinner } from 'theme-ui'
import React from 'react'
import axios from 'axios'
import EpisodeCard from './episode-card'
import config from '../../config.json'

const styles = {
  spin: { 
    'text-align': 'center',
    p: 5,
    fontSize: 6
  }
}

class PopulateEpisodes extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          episodes: [],
          loading: true
      };
  }
  componentDidMount() {
    axios({
      method: 'get',
      url: config.apiURL,
      responseType: 'json'
    })
      .then(response => {
        const episodes = response.data.episodes
        this.setState({ episodes });
        this.setState({ loading: false });
      })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    return (
      <div>
        {this.state.loading && (
          <div sx={styles.spin}>
            <Spinner />
          </div>
        )}
        {this.state.episodes.map((data, index) => (
          <EpisodeCard key={`show_${index}`} data={data} />
        ))}
      </div>
    ) 
  }
}

export default PopulateEpisodes