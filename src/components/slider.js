import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default function Slider() {
  return (
    <div>
      <Carousel showStatus={false} showThumbs={false} showIndicators={true} showArrows={false}>
        <div>
          <img src="https://source.unsplash.com/random/640x500" alt/>
        </div>
        <div>
          <img src="https://source.unsplash.com/user/erondu/640x500" alt/>
        </div>
        <div>
          <img src="https://source.unsplash.com/user/hirmin/640x500" alt/>
        </div>
      </Carousel>
    </div>
  )
}