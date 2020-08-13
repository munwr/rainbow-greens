import React from 'react'
import { Link } from 'gatsby'
export default function ContentCard() {
  return (
    <div>
      <h1>Rainbow Greens Podcast</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos aspernatur quas a quasi cumque maiores similique, distinctio eligendi ut illo harum. Porro, consequuntur ipsa inventore asperiores corrupti officiis quaerat? Corrupti!</p>
      <Link to="/shows">Explore Now</Link>
      <p>Socail Links</p>
    </div>
  )
}