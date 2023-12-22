import React, { useRef, useState } from 'react';
import './index.css';
import default_image from "../../assets/images/gen-ai.webp";

const ImageGenerator = () => {

    const [image_url, setImage_url] = useState("/");
    let inputRef = useRef();

    const imgGenerator = async () => {
        if(inputRef.current.value === "") {
            return 0;
        }

        const response = await fetch("https://api.openai.com/v1/images/generations",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer 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",
                    "User-Agent": "Chrome"
                },
                body: JSON.stringify({
                    prompt: `${inputRef.current.value}`,
                    n: 1,
                    size: "512x512",
                }),
            }
        );
        let data = await response.json();
        let data_array = data.data;
        setImage_url(data_array[0].url);
    }

  return (
    <div className='ai-image-generator'>
        <div className='header'>Ai image <span>generator</span></div>
        <div className='img-loading'>
            <div className='image'>
                <img src={image_url === "/" ? default_image : image_url} alt='' />
            </div>
        </div>
        <div className='search-box'>
            <input type='text' ref={inputRef} className='input-search' placeholder='Describe your image' />
            <div className='btn-generate' onClick={() => imgGenerator()}>Generate</div>
        </div>
    </div>
  )
}

export default ImageGenerator;
