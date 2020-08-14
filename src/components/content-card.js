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

export default function ContentCard(props) {
  const info = {
    title: props.title || 'Not Available',
    description: props.description || "Not Available",
    twitter: props.twitter || "",
    rss: props.rss || "",
    facebook: props.facebook || ""
  }
  const excerpt = info.description.substring(0, 140) + '...'
  return (
    <div sx={styles.container}>
      <h1 sx={styles.heading}>{info.title}</h1>
      <p sx={styles.description}>{excerpt}</p>
      <Button to="/about">
        Know more
        <MdPlayArrow/>
      </Button>
      <div sx={styles.socialContainer}>
        {info.rss && (
          <Link to={info.rss}>
            <span sx={styles.hidden}>RSS</span>
            <FaRss/>
          </Link>
        )}
        {info.twitter && (
          <Link to={info.twitter}>
            <span sx={styles.hidden}>Twitter</span>
            <FaTwitter/>
          </Link>
        )}
        {info.facebook && (
          <Link to={info.facebook}>
            <span sx={styles.hidden}>Facebook</span>
            <FaFacebookSquare/>
          </Link>
        )}
        <p>Stay in connected with us</p>
      </div>
    </div>
  )
}