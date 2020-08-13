/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import Nav from './nav'

export default function Header() {
  return (
    <header sx={{
        'display':'flex',
        'justify-content': 'space-between',
        'm': 3,
        'mb': 5
      }}
    >
      <Link to="/">Rainbow Greens</Link>
      <Nav/>
    </header>
  )
}