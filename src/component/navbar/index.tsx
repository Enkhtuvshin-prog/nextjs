import React from "react";

const navData: String[] = [
  "movies",
  "TV shows",
  "Movie Trivia",
  "News",
  "ShowTimes",
];

const Navbar = () => {
  return (
    <>
      <nav className="bg-red-600 border-gray-200 font-semibold ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="http://localhost:3000/#" className="flex items-center">
            <img
              src="https://yt3.googleusercontent.com/ytc/AL5GRJWvxIxAuEpsbXBCv_COo5fa2yQQdytpGU0ZcS1R=s900-c-k-c0x00ffffff-no-rj"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
          </a>
          <div>
            <button>
              <form className="flex items-center">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="bg-gray-50 border w-72  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="search, movie, TV, actors"
                    required
                  />
                </div>
              </form>
            </button>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col text-sm p-2 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
              {navData.map((data: any) => (
                <li>
                  <a
                    href="#"
                    className="block py-2  text-white"
                    aria-current="page"
                  >
                    {data}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
