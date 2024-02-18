import React from 'react'
import "./Banner.css";

let bannerData  = {
    title:"React landing Page",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"
}

function Banner() {
  return (
    <div className='banner-bg'>
        <div className='container'>
            <div className='banner-con'>
                <div className='banner-text'>
                    <h1>{bannerData.title}</h1>
                    <p>{bannerData.desc}</p>
                    <a href='#' className='banner-btn'>Learn More</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner