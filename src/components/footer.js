/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import Nav from './nav'

const styles = {
  container: {
    'p': 3
  },
  flex: {
    'display': 'flex',
    'justify-content': 'space-between',
    'py': 3
  },
  copy: {
    'text-align': 'center',
    'py':  3,
    'border-top': '1px solid #ddd'
  }
}

export default function Footer() {
  return (
    <footer sx={styles.container}>
      <div 
        sx={styles.flex}
      >
        <Link to="/">Rainbow Greens</Link>
        <Nav/>
        Social Links
      </div>
      <section sx={styles.copy}>
        Terms and Conditions
      </section>
    </footer>
  )
}