/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import Nav from './nav'
import { TiThMenu } from 'react-icons/ti'

const styles = {
  header: {
    'display':'flex',
    'justify-content': 'space-between',
    'align-items': 'center',
    'p': 3,
    'bg': 'headerBg'
  },
  logo: {
    'font-weight': 'bold',
    'text-decoration': 'none',
    'color': 'headerLogo'
  },
  nav: {
    display: ['none', 'none', 'block'],
    m: 0,
    p: 0,
    'list-style': 'none',
    'li': {
      'display': 'inline-block',
      'mr': 3
    },
    'a': {
      color: 'headerLink',
      'text-decoration': 'none',
      '&:active, &:hover, &[aria-current="page"]': {
        color: 'headerLinkHover'
      }
    }
  },
  menuButton: {
    display: ['inline-block', 'inline-block', 'none'],
    background: 'none',
    border: 'none',
    appearance: 'none',
    color: 'primary',
    fontSize: 4,
    width: '24px',
    height: '24px',
    'text-align': 'center',
    padding: 0
  },
}

export default function Header(props) {
  return (
    <header sx={styles.header}>
      <Link to="/" sx={styles.logo}>{props.title}</Link>
      <button sx={styles.menuButton}>
        <TiThMenu />
      </button>
      <Nav sx={styles.nav} />
    </header>
  )
}