/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

const styles = {
  display: 'inline-flex',
  'align-items': 'center',
  bg: 'buttonBg',
  p: 3,
  color: 'buttonText',
  'border-radius': '6px',
  'text-decoration': 'none',
  '&:hover': {
    bg: 'buttonBgHover'
  },
  'svg': {
    ml: 2
  }

}

export default function Button(props) {
  return (
    <Link 
      to={props.to}
      sx={styles}
      {...props.sx}
    >
      {props.children}
    </Link>
  )
}