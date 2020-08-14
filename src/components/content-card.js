/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import Button from './shared/button'
import styles from './content-card.styles'
import { MdPlayArrow } from 'react-icons/md'
import { 
  FaTwitter, 
  FaFacebookSquare, 
  FaRss 
} from 'react-icons/fa'

export default function ContentCard() {
  return (
    <div sx={styles.container}>
      <h1 sx={styles.heading}>Rainbow Greens Podcast</h1>
      <p sx={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos aspernatur quas a quasi cumque maiores similique, distinctio eligendi ut illo harum. Porro, consequuntur ipsa inventore asperiores corrupti officiis quaerat? Corrupti!</p>
      <Button to="/shows">
        Explore Now
        <MdPlayArrow/>
      </Button>
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
        <p>Stay in connected with us</p>
      </div>
    </div>
  )
}