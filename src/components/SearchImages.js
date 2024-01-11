import React, { useState } from "react";
import axios from "axios";
import { ACCESS_KEY } from "../config";

export default function SearchImages() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos`,
        {
          params: { query, per_page: 21 },
          headers: { Authorization: `Client-ID ${ACCESS_KEY}` }, // Get your own access key, when registering into unsplash.com
        }
      );
      console.log("Search successful");
      console.log(response.data.results);
      setImages(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  // Display the fetched images in a grid
  const imageList = (
    <div className="grid gap-x-8 gap-y-3 grid-cols-1 sm:grid-cols-3">
      {images.map((image) => (
        <div key={image.id} className="flex flex-col h-full">
          <div className="overflow-hidden h-80 lg:h-[450px]">
            <img
              src={image.urls.regular}
              alt={image.alt_description}
              className="hover:scale-105 transition-all duration-300 object-cover h-full w-full"
            />
          </div>
          <p className="img-text">
            Photo by{" "}
            <a
              href={
                "https://unsplash.com/@" +
                image.user.username +
                "/?utm_source=Search_images&utm_medium=referral"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:text-cyan-800 transition-all duration-300"
            >
              {image.user.username}
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/?utm_source=Search_images&utm_medium=referral" className="text-cyan-600 hover:text-cyan-800 transition-all duration-300">
              Unsplash
            </a>
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container-lg flex justify-center items-center flex-col p-10 mt-32 mb-10 lg:p-20">
      <h1 className="text-3xl lg:text-6xl font-bold">Search images</h1>
      <p className="w-3/4 lg:w-1/3 text-center lg:text-lg mb-10">
        This React app uses{" "}
        <a href="https://unsplash.com/developers" target="_blank" rel="noreferrer" className="text-cyan-600 hover:text-cyan-800 transition-all duration-300">
          Unsplash Image API
        </a>{" "}
        to display images based on user search query.
      </p>
      <form onSubmit={handleSearchSubmit} className="search-form text-center mb-10">
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Search for images"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <button variant="contained" type="submit" className="bg-cyan-500 text-white px-4 py-2 rounded-r-md hover:bg-cyan-600 focus:outline-none focus:ring focus:border-cyan-300 transition-all duration-300">
            Search
          </button>
        </div>
      </form>
      <div className="mt-5 w-full">{imageList}</div>
    </div>
  );
};
