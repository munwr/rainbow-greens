/** @jsx jsx */
import { jsx } from 'theme-ui'
import { MdSend } from 'react-icons/md'

const styles = {
  container: {
    display: 'grid',
    'grid-template-columns': ['1fr', '1fr', '1fr auto'],
    'justify-content': 'space-between',
    'align-items': 'center',
    'grid-gap': '30px',
    'background': 'linear-gradient(180deg, #DA7B67 0%, #DA6767 100%)', // figure out usage of variables
    p: 4,
    mt: '-1px',
  },
  desc: {
    color: '#fff',
    fontSize: 4,
    m: 0
  },
  input: {
    background: '#FFFFFF',
    fontSize: 2,
    mr: 3,
    p: 3,
    border: 'none',
    appearance: 'none',
    'border-radius': '6px',
    'width': ['100%', 'auto'],
    mb: [3, 0]
  },
  button: {
    display: 'inline-flex',
    'align-items': 'center',
    bg: 'buttonSubscription',
    fontSize: 2,
    p: 3,
    border: 'none',
    appearance: 'none',
    'border-radius': '6px',
    color: '#fff',
    'svg': {
      ml: 3
    }
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
      <p sx={styles.desc}>Get amazing <strong>PODCAST</strong> right in your
inbox for Free</p>
      <div>
        <label 
          htmlFor="name" 
          sx={styles.hidden}
        >Name</label>
        <input sx={styles.input} id="name" name="name" type="text" placeholder="Name"/>
        <label 
          htmlFor="email"
          sx={styles.hidden}
        >Email</label>
        <input sx={styles.input} id="email" name="email" type="text" placeholder="Email"/>
        <button sx={styles.button}>
          Subscribe
          <MdSend/>
        </button>
      </div>
    </div>
  )
}