/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import Button from './shared/button'
import Moment from 'react-moment';

const styles = {
  container: {
    'display': 'grid',
    'grid-template-columns': ['1fr', '230px auto'],
    'align-items': 'center',
    bg: 'alternate',
    'grid-gap': '30px',
    p: 3,
    mb: 4,
    'img': {
      display: 'block',
      'max-width': '100%'
    }
  },
  title: {
    m: 0,
    mb: '6px',
    'a': {
      color: 'heading',
      'text-decoration': 'none'
    }
  },
  date: {
    fontSize: 1,
    m: 0,
    mb: 3
  },
  desc: {
    'line-height': '1.4'
  }
}
export default function EpisodeCard(props) {

  const episodeInfo = {
    title: props.data.title || 'Not Available',
    date: props.data.pub_date_ms || 'NA',
    description: props.data.description || 'NA',
    img: props.data.image || ''
  }

  const excerpt = episodeInfo.description.substring(0, 137) + '...'

  return (
    <div sx={styles.container}>
      <Link to="/episode">
        <img src={episodeInfo.img} alt=""/>
      </Link>
      <div>
        <h3 sx={styles.title}>
          <Link to="/episode">{episodeInfo.title}</Link>
        </h3>
        <p sx={styles.date}>Published on <Moment format="DD MMM YYYY">{episodeInfo.date}</Moment></p>
        <div
          sx={styles.desc}
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
        <Button to="/episode">Learn more</Button>
      </div>
    </div>
  )
}