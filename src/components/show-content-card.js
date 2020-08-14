/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { 
  FaTwitter, 
  FaFacebookSquare, 
  FaRss 
} from 'react-icons/fa'
import styles from './content-card.styles'

export default function EpisodeContentCard(props) {
  return (
    <div sx={styles.container} {...props}>
      <h1 sx={styles.heading}>Show Title</h1>
      <p sx={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos aspernatur quas a quasi cumque maiores similique, distinctio eligendi ut illo harum. Porro, consequuntur ipsa inventore asperiores corrupti officiis quaerat? Corrupti!</p>
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
  )
}