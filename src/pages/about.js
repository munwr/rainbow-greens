/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <div sx={{
        variant: 'variants.container'
      }}>
        <h1 sx={{
          color: 'heading'
        }}>About</h1>
        <div
          sx={{
            'display': 'grid',
            'grid-template-columns': ['1fr', '1fr', '1fr 1fr'],
            'grid-gap': '30px'
          }}
        >
          <img src="https://source.unsplash.com/random/640x480" alt="About" />
          <div>
            <p>By the year 2050 we will have 10 billion people on our planet - a sixth of whom will be in India. If we want to feed all 10 billion of us in a sustainable, healthy and just way, we need to reimagine how we source our food. </p>
            <p>Feeding ourselves cannot come at the cost of global health, worsening greenhouse gas emissions, excessive land, water and resource use, zoonotic diseases, antibiotic resistance, and needless suffering. Last season, we brought you a ringside view of the next food revolution that is rethinking the future of protein. </p><p>Companies like Memphis Meats, Impossible Foods, Beyond Meat and JUST Egg had a blockbuster year making meat, eggs, and other animal-sourced foods from plants, or cells, or other ingredients that are delicious and nutritious for us, and vastly better for the planet. The Covid-19 pandemic has only made the importance of protein diversification evident.</p><p> If you want to be part of the future of food and work on solutions to some of the biggest problems of our time, join the Good Food Institute’s Varun Deshpande and Ramya Ramamurthy on Season 2 of Feeding 10 Billion</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
