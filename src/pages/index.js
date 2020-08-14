/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from "../components/layout"
import Slider from "../components/slider"
import ContentCard from "../components/content-card"
import EmailSubscription from "../components/email-subscription"
import ShowsHome from "../components/shows-home"

const styles = {
  container: {
    'display': 'grid',
    'grid-template-columns': ['1fr', '1fr', '1fr 1fr'],
    'grid-gap': '30px',
    'align-items': 'center'
  },
  slider: {}
}
export default function Home() {
  const data = useStaticQuery(graphql`
    query SiteQueryTwo {
      site {
        siteMetadata {
          description
          facebook
          rss
          title
          twitter
        }
      }
    }
  `)
  const { siteMetadata } = data.site
  return (
    <Layout>
      <div 
        sx={styles.container}
      >
        <Slider sx={styles.slider}/>
        <ContentCard {...siteMetadata} />
      </div>
      <EmailSubscription/>
      <ShowsHome />
    </Layout>
  )
}
