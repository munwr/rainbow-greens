/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import Nav from './nav'
import { 
  FaTwitter, 
  FaFacebookSquare, 
  FaRss 
} from 'react-icons/fa'

const styles = {
  container: {
    bg: 'footerBg',
    p: 3,
    mt: 5,
    'a': {
      color: 'heading',
      'text-decoration': 'none',
      '&:hover': {
        color: 'primary'
      }
    }
  },
  flex: {
    'display': ['grid', 'flex'],
    'grid-gap': ['30px', 0],
    'justify-content': 'space-between',
    'py': 4
  },
  socialContainer: {
    'a': {
      fontSize: 4,
      'text-decoration': 'none',
      color: 'socialIcons',
      mr: 3,
      '&:hover': {
        color: 'text'
      }
    }
  },
  copy: {
    fontSize: 1,
    'text-align': ['left', 'center'],
    'py':  4,
    'border-top': '1px solid #ddd',
    'line-height': '1.5'
  },
  hidden: {
    display: 'none'
  },
  nav: {
    m: 0,
    p: 0,
    'list-style': 'none',
    'li': {
      'display': 'inline-block',
      'mr': 3
    }
  }
}

export default function Footer(props) {
  return (
    <footer sx={styles.container}>
      <div 
        sx={styles.flex}
      >
        <Link to="/"><strong>{props.title}</strong></Link>
        <Nav sx={styles.nav}/>
        <div sx={styles.socialContainer}>
          <Link to="#">
            <span sx={styles.hidden}>RSS</span>
            <FaRss/>
          </Link>
          <Link to="/">
            <span sx={styles.hidden}>Twitter</span>
            <FaTwitter/>
          </Link>
          <Link to="#">
            <span sx={styles.hidden}>Facebook</span>
            <FaFacebookSquare/>
          </Link>
        </div>
      </div>
      <section sx={styles.copy}>
        Copyright 2020  Rainbow Greens &bull; <Link to="#">Privacy Policy</Link> &bull; <Link to="#">Terms of Service</Link>
      </section>
    </footer>
  )
}