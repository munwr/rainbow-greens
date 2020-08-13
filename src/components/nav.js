/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

export default function Nav() {
  return (
    <ul 
      sx={{
        'margin': 0,
        'padding': 0,
        'list-style': 'none',
        'li': {
          'display': 'inline-block',
          'margin-right': '10px'
        }
      }}
    >
      <li><Link to="/">Home</Link></li>
      <li><Link to="/shows">Shows</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/signup" className="button">Signup</Link></li>
    </ul>
  )
}