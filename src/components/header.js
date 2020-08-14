/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Link } from 'gatsby'
import Nav from './nav'
import { TiThMenu } from 'react-icons/ti'
import { IoMdClose } from 'react-icons/io'
import './header.scss'

const styles = {
  header: {
    'display':'flex',
    'justify-content': 'space-between',
    'align-items': 'center',
    'p': 3,
    'bg': 'headerBg',
    '.menu-open + ul': {
      bg: 'headerBg',
    }
  },
  logo: {
    'font-weight': 'bold',
    'text-decoration': 'none',
    'color': 'headerLogo'
  },
  nav: {
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

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: false
    }

    this.handleMenu = this.handleMenu.bind(this)
  }

  handleMenu() {    
    this.setState(state => ({      
      isMenuOpen: !state.isMenuOpen
    }))
  }
  render() {
    console.log(this.state.isMenuOpen)
    return (
      <header sx={styles.header}>
        <Link to="/" sx={styles.logo}>{this.props.title}</Link>
        <button 
          sx={styles.menuButton}
          onClick={this.handleMenu}
          className={this.state.isMenuOpen ? "menu-open": "menu-close"}
        >
          {this.state.isMenuOpen ? <IoMdClose/> : <TiThMenu />}
        </button>
        <Nav sx={styles.nav} />
      </header>
    )
  }
}

export default Header