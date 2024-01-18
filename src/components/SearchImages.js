import React, { useState } from "react";
import axios from "axios";
import { ACCESS_KEY } from "../config";
import { Close } from "@mui/icons-material";

export default function SearchImages() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos`,
        {
          params: { query, per_page: 30 },
          headers: { Authorization: `Client-ID ${ACCESS_KEY}` }, // Get your own access key, when registering into unsplash.com
        }
      );
      //console.log("Search successful");
      //console.log(response.data.results);
      setImages(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // This Modal opens images in fullsize
  const Modal = ({ isOpen, onClose, children }) => {
    return (
      <>
        {isOpen && (
          <div className="modal-overlay" onClick={onClose}>
            <div
              className="flex flex-col justify-center items-center bg-white relative p-6 max-w-full h-full lg:h-3/4"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="close-button cursor-pointer" onClick={onClose}>
                <Close />
              </span>
              {children}
            </div>
          </div>
        )}
      </>
    );
  };

  // Display the fetched images in a grid
  const imageList = (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {images.map((image) => (
        <div key={image.id} className="flex flex-col h-full">
          <div className="overflow-hidden h-80 lg:h-[450px]">
            <img
              src={image.urls.regular}
              alt={image.alt_description}
              className="w-full h-full object-cover hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => openModal(image)}
            />
          </div>
          <div>
            <Modal isOpen={selectedImage === image} onClose={closeModal}>
              <img
                src={image.urls.regular}
                alt={image.alt_description}
                className="w-full h-full object-contain pt-5"
                loading="lazy"
              />
              <p className="text-sm pt-2">
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
                  {image.user.name}
                </a>{" "}
                on{" "}
                <a
                  href="https://unsplash.com/?utm_source=Search_images&utm_medium=referral"
                  className="text-cyan-600 hover:text-cyan-800 transition-all duration-300"
                >
                  Unsplash
                </a>
                .{" "}
                <a
                  href={image.links.html}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:text-cyan-800 transition-all duration-300"
                >
                  Download here
                </a>{" "}
              </p>
            </Modal>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex justify-center items-center flex-col p-10 mt-32 mb-10 lg:p-20">
      <h1 className="text-3xl lg:text-6xl font-bold">Search images</h1>
      <p className="text-center text-sm lg:text-lg mb-10">
        This React app uses{" "}
        <a
          href="https://unsplash.com/developers"
          target="_blank"
          rel="noreferrer"
          className="text-cyan-600 hover:text-cyan-800 transition-all duration-300"
        >
          Unsplash Image API
        </a>{" "}
        to display images based on user search query. 
        <br/>Checkout the <a
          href="https://github.com/psivonen/search-images-II"
          target="_blank"
          rel="noreferrer"
          className="text-cyan-600 hover:text-cyan-800 transition-all duration-300"
        >Github</a> repository if you are interested.
      </p>
      {/* Search form/input */}
      <form onSubmit={handleSearchSubmit} className="mb-10">
        <div>
          <input
            type="text"
            placeholder="Search for images"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-l-md focus:outline-none focus:ring focus:border-blue-300 w-2/3 lg:w-[400px]"
          />
          <button
            variant="contained"
            type="submit"
            className="bg-cyan-500 text-white px-4 py-2 rounded-r-md hover:bg-cyan-600 focus:outline-none focus:ring focus:border-cyan-300 transition-all duration-300"
          >
            Search
          </button>
        </div>
      </form>
      <div className="mt-5">{imageList}</div>
    </div>
  );
}
