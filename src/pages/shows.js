/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from "../components/layout"
import PopulateShows from '../components/populate-shows'

export default function Home() {
  return (
    <Layout>
      <div sx={{
        py: 4,
        'variant': 'variants.container'
      }}>
        <h1 sx={{
          color: 'heading'
        }}>All Shows</h1>
        <div
          sx={{
            'line-height': '1.5',
            mb: 4
          }}
        >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum architecto quae tempora et quibusdam accusantium beatae! Itaque exercitationem, aut dolores esse non doloribus, repellat voluptas saepe beatae voluptatibus officiis ullam!</p>
        </div>
        <PopulateShows/>
      </div>
    </Layout>
  )
}
