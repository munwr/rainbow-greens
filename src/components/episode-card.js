/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import Moment from 'react-moment';

const styles = {
  container: {
    'display': 'grid',
    'grid-template-columns': '300px auto',
    'grid-gap': '30px',
    'm': 3,
    'img': {
      'max-width': '100%'
    }
  }
}
export default function EpisodeCard(props) {
  return (
    <div sx={styles.container}>
      <Link to="/episode">
        <img src={props.data.image} alt=""/>
      </Link>
      <div>
        <h3>
          <Link to="/episode">{props.data.title}</Link>
        </h3>
        <p>Published on <Moment format="DD MMM YYYY">{props.data.pub_date_ms}</Moment></p>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.description }}
        />
        <Link to="/episode" className="button">Learn More</Link>
      </div>
    </div>
  )
}