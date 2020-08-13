/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from "../components/layout"
import PopulateShows from '../components/populate-shows'

export default function Home() {
  return (
    <Layout>
      <h1>All Shows</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum architecto quae tempora et quibusdam accusantium beatae! Itaque exercitationem, aut dolores esse non doloribus, repellat voluptas saepe beatae voluptatibus officiis ullam!</p>
      <PopulateShows/>
    </Layout>
  )
}
