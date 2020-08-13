/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from '../components/layout'
import ShowContentCard from '../components/show-content-card'
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
        <ShowContentCard/>
      </div>
      <h2>Episodes in the show</h2>
      <PopulateEpisodes/>
    </Layout>
  )
}
