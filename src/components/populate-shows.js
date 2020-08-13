/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import ShowCard from './show-card'
import ShowsData from '../data/shows.json'

const styles = {
  shows: {
    'display': 'grid',
    'grid-template-columns': '1fr 1fr 1fr',
    'grid-gap': '30px'
  }
}

const ShowsContent = () => (
  <>
    {ShowsData.results.map((data, index) => {
      return <ShowCard key={`show_${index}`} data={data} />
    })}
  </>
)

export default function PopulateShows() {
  return (
    <>
      <div sx={styles.shows}>
        <ShowsContent/>
      </div>
    </>
  ) 
}