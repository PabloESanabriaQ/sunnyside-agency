import { useState } from "react";

const navLinks = ["about", "services", "projects", "contact"];

export default function Navbar() {
  const [showNavBar, setShowNavBar] = useState(false);

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
      <ul className="flex w-5/12 gap-2 mx-4 list-none justify-evenly place-items-center">
        {navLinks.map((link) => (
          <li
            key={link}
            className="capitalize text-xl text-center last:uppercase last:text-black last:rounded-3xl last:bg-white last:px-4 last:py-2 last:font-bold"
          >
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
