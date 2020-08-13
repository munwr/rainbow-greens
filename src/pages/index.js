/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from "../components/layout"
import Slider from "../components/slider"
import ContentCard from "../components/content-card"
import EmailSubscription from "../components/email-subscription"
import ShowsHome from "../components/shows-home"

export default function Home() {
  return (
    <Layout>
      <div sx={{
        'display': 'grid',
        'grid-template-columns': '1fr 1fr',
        'grid-gap': '30px',
        }}
      >
        <Slider/>
        <ContentCard/>
      </div>
      <EmailSubscription/>
      <ShowsHome/>
    </Layout>
  )
}
