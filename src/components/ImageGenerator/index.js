import React from 'react';
import './index.css';
import default_image from "../../assets/images/gen-ai.webp";

const ImageGenerator = () => {
  return (
    <div className='ai-image-generator'>
        <div className='header'>Ai image <span>generator</span></div>
        <div className='img-loading'>
            <div className='image'>
                <img src={default_image} alt='' />
            </div>
        </div>
        <div className='search-box'>
            <input type='text' className='input-search' placeholder='Describe your image' />
            <div className='btn-generate'>Generate</div>
        </div>
    </div>
  )
}

export default ImageGenerator;
