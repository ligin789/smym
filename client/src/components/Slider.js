import React from 'react'
import Blog1 from '../assets/img/blog/blog-1.jpg'
import Blog2 from '../assets/img/blog/blog-2.jpg'
import Blog3 from '../assets/img/blog/blog-3.jpg'

function Slider() {
  return (
    <div className="container" data-aos="fade-up">

      <div className="col-lg-12" data-aos="fade-up" data-aos-delay={200}>
        <div className="portfolio-details-slider swiper-container">
          <div className="swiper-wrapper align-items-center">
            <div className="swiper-slide">
              <img src={Blog1} alt="" />
            </div>
            <div className="swiper-slide">
              <img src={Blog2} alt="" />
            </div>
            <div className="swiper-slide">
              <img src={Blog3} alt="" />
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </div>
  )
}

export default Slider
