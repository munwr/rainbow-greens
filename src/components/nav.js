/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

export default function Nav(props) {
  return (
    <ul 
      {...props}
    >
      <li><Link to="/">Home</Link></li>
      <li><Link to="/shows">Shows</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/signup" className="button">Signup</Link></li>
    </ul>
  )
}