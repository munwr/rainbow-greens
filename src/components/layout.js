/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import Header from '../components/header'
import Footer from '../components/footer'
import theme from '../gatsby-plugin-theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import SiteMetaData from './site-meta-data'

export default function Layout( props ) {
  const data = useStaticQuery(graphql`
    query SiteQuery {
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
    <ThemeProvider theme={theme}>
      <Header {...siteMetadata}/>
      <main>
        {props.children}
      </main>
      <Footer {...siteMetadata}/>
    </ThemeProvider>
  )
}

