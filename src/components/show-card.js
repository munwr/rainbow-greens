import React from 'react'
import { Link } from 'gatsby'

export default function ShowCard(props) {
  
  return (
    <Link to="/show">
      <div>
        <img src={props.data.thumbnail} alt=""/>
        <div>
          <h3>{props.data.title_original}</h3>
          <p>{props.data.total_episodes} Episodes</p>
        </div>
      </div>
    </Link>
  )
}