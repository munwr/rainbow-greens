/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <h1>About</h1>
      <div
        sx={{
          'display': 'grid',
          'grid-template-columns': '1fr 1fr',
          'grid-gap': '30px'
        }}
      >
        <img src="https://source.unsplash.com/random/640x480" alt="About" />
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum architecto quae tempora et quibusdam accusantium beatae! Itaque exercitationem, aut dolores esse non doloribus, repellat voluptas saepe beatae voluptatibus officiis ullam!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum architecto quae tempora et quibusdam accusantium beatae! Itaque exercitationem, aut dolores esse non doloribus, repellat voluptas saepe beatae voluptatibus officiis ullam!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum architecto quae tempora et quibusdam accusantium beatae! Itaque exercitationem, aut dolores esse non doloribus, repellat voluptas saepe beatae voluptatibus officiis ullam!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum architecto quae tempora et quibusdam accusantium beatae! Itaque exercitationem, aut dolores esse non doloribus, repellat voluptas saepe beatae voluptatibus officiis ullam!</p>
        </div>
      </div>
    </Layout>
  )
}
