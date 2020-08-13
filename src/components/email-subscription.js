/** @jsx jsx */
import { jsx } from 'theme-ui'

const styles = {
  container: {
    'py': 4
  },
  hidden: {
    'display': 'none'
  }
}

export default function EmailSubscription() {
  return (
    <div
      sx={styles.container}
    >
      <p>Get amazing PODCAST right in your
inbox for Free</p>
      <div>
        <label 
          htmlFor="name" 
          sx={styles.hidden}
        >Name</label>
        <input id="name" name="name" type="text" placeholder="Name"/>
        <label 
          htmlFor="email"
          sx={styles.hidden}
        >Email</label>
        <input id="email" name="email" type="text" placeholder="Email"/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}