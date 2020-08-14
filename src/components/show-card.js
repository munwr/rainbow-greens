/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

const styles = {
  container: {
    display: 'block',
    position: 'relative',
    color: '#fff',
    'text-decoration': 'none',
    'min-height': '300px'
  },
  img: {
    width: '100%',
    'max-width': '100%',
    display: 'block'
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    p: 4,
    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.59) 100%)',
    'h3': {
      m: 0,
      mb: '3px',
      fontSize: 2,
      lineHeight: 1.4
    }
  },
  count: {
    m: 0,
    opacity: 0.5
  }
}
export default function ShowCard(props) {
  const showInfo = {
    image: props.data.thumbnail || 'https://source.unsplash.com/user/lidivien/300x300',
    title: props.data.title_original || 'Not Available',
    episodesCount: props.data.total_episodes || 'NA'
  }
  return (
    <Link to="/show" sx={styles.container}>
      <div>
        <img sx={styles.img} src={showInfo.image} alt=""/>
        <div sx={styles.overlay}>
          <h3>{showInfo.title}</h3>
          <p sx={styles.count}>{showInfo.episodesCount} Episodes</p>
        </div>
      </div>
    </Link>
  )
}