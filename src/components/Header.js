import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="w-full h-16 top-0 z-10 fixed bg-slate-100">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full w-full">
          <a href="/" className="hover:text-white">
            <div className="font-bold text-lg">Search Images</div>
          </a>
          {/* Mobile menu */}
          <div className="sm:hidden ms-auto">
            <button type="button" className="ms-auto" onClick={openMenu}>
              {/* Menu icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#333"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
          </div>
          <div
            className={`fixed top-0 left-0 w-full h-screen bg-gray-100 text-white slide-transition ${
              isMenuOpen ? "menu-open" : ""
            }`}
          >
            <div className="h-full p-4 flex flex-col">
              <button className="ms-auto" onClick={closeMenu}>
                {/* Close button icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#333"
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12Z"
                  />
                </svg>
              </button>
              <div className="flex justify-center p-10 flex-col text-3xl gap-y-8 h-full">
                <a
                  href="https://unsplash.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 hover:text-slate-800 transition-all"
                >
                  Unsplash
                </a>
                <a
                  href="https://github.com/psivonen/search-images-II"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 hover:text-slate-800 transition-all"
                >
                  Github
                </a>
              </div>
            </div>
          </div>

          {/* Full-size navbar */}
          <div className="hidden sm:flex justify-end flex-row gap-8">
            <a
              href="https://unsplash.com/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-slate-800 transition-all"
            >
              Unsplash
            </a>
            <a
              href="https://github.com/psivonen/search-images-II"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-slate-800 transition-all"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
