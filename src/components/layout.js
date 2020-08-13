/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import Header from '../components/header'
import Footer from '../components/footer'
import theme from '../gatsby-plugin-theme-ui'

export default function Layout( props ) {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <main sx={{
        'm': 3
      }}>
        {props.children}
      </main>
      <Footer/>
    </ThemeProvider>
  )
}

