import { useState } from "react";

const navLinks = ["about", "services", "projects", "contact"];

export default function Navbar() {
  const [showNavBar, setShowNavBar] = useState(true);

  function handleShowNavBar() {
    setShowNavBar(!showNavBar);
  }
  return (
    <nav className="w-full flex justify-between m-2">
      <a
        href="#sunnyside"
        className="text-center font-barlow mx-5 font-extrabold text-2xl"
      >
        sunnyside
      </a>
      <ul
        className={`flex flex-col w-5/12 gap-2  list-none justify-evenly place-items-center
        sm:flex-row sm:gap-4 sm:mx-4 sm:place-items-auto sm:justify-end sm:w-3/12
        ${showNavBar ? "" : "hidden"}`}
      >
        {/*absolute left-1/2 top-0 py-8 -translate-x-1/2 translate-y-1/2 w-9/12 block bg-white text-black */}
        {navLinks.map((link) => (
          <li
            key={link}
            className="capitalize text-xl text-center cursor-pointer last:uppercase last:text-black last:rounded-3xl last:bg-white last:px-4 last:py-2 last:font-bold last:hover:bg-yellow-400"
          >
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>
      <img
        src="/src/assets/images/icon-hamburger.svg"
        alt="hamburger"
        className="absolute w-4 h-4 my-2 mx-4 right-1 sm:hidden"
        onClick={handleShowNavBar}
      />
    </nav>
  );
}
