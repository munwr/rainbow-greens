/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from '../components/layout'
import ShowContentCard from '../components/show-content-card'
import PopulateEpisodes from '../components/populate-episodes'

export default function Home() {
  return (
    <Layout>
      <div  sx={{'variant': 'variants.container'}}>
        <div sx={{
          'display': 'grid',
          'grid-template-columns': ['1fr', '1fr', '1fr 1fr'],
          'grid-gap': '30px',
          'align-items': 'center',
          mb: 5
          }}
        >
          <img sx={{ maxWidth: '100%' }} src="https://source.unsplash.com/random/640x500" alt=""/>
          <ShowContentCard sx={{ mx: 0, px: 0 }}/>
        </div>
        <h2 sx={{
          color: 'heading'
        }}>All Episodes</h2>
        <PopulateEpisodes/>
      </div>
    </Layout>
  )
}
