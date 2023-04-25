import React, { useState } from "react";
import Search from "./Search";
import { ACCESS_KEY } from './config';
import axios from 'axios';

function ImageGallery() {
    const [images, setImages] = useState([]);
    
    const handleSearchSubmit = async (query) => {
        try {
          const response = await axios.get(`https://api.unsplash.com/search/photos`, {
            params: { query },
            headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
          });
          setImages(response.data.results);
          console.log('Search successful');
        } catch (error) {
          console.error(error);
        }
      };

    const imageList = images.map((image) => (
        <div key={image.id}>
          <img src={image.urls.regular} alt={image.alt_description} />
        </div>
    ));
  
    return (
      <div>
        <h1>Image Gallery</h1>
        <Search handleSubmit={handleSearchSubmit} />
        {imageList}
      </div>
    );
}

export default ImageGallery;
  