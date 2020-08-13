import React from 'react'
import axios from 'axios'
import EpisodeCard from './episode-card'

class PopulateEpisodes extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          episodes: []
      };
  }
  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://adoriapi.netlify.app/episodes.json',
      responseType: 'json'
    })
      .then(response => {
        const episodes = response.data.episodes
        this.setState({ episodes });
      })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    return (
      <div>
        {this.state.episodes.map((data, index) => (
          <EpisodeCard key={`show_${index}`} data={data} />
          ))}
      </div>
    ) 
  }
}

export default PopulateEpisodes

// function PopulateEpisodes() {
  
// }