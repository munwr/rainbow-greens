/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from '../components/layout'
import EpisodeContentCard from '../components/episode-content-card'
import PopulateEpisodes from '../components/populate-episodes'

export default function Home() {
  return (
    <Layout>
      <div sx={{
        'display': 'grid',
        'grid-template-columns': '1fr 1fr',
        'grid-gap': '30px',
        }}
      >
        <img src="https://source.unsplash.com/random/640x500" alt=""/>
        <EpisodeContentCard/>
      </div>
      <h2>Related Episodes</h2>
      <PopulateEpisodes/>
    </Layout>
  )
}
