export default function Header() {
  return (
    <header
      className="w-full h-screen min-h-full py-5 bg-mobile-header bg-no-repeat bg-cover
    lg:bg-desktop-header text-white flex flex-1 flex-col items-center gap-20"
    >
      <nav className="w-full flex justify-between m-2">
        <a
          href="#sunnyside"
          className="text-center font-barlow mx-5 font-extrabold text-3xl"
        >
          sunnyside
        </a>
        <ul className="flex w-1/3 text-center list-none justify-evenly">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
      <h1 className="font-fraunces text-center text-5xl tracking-widest font-black">
        WE ARE CREATIVES
      </h1>
      <img
        className="mb-40"
        src="/src/assets/images/icon-arrow-down.svg"
        alt="arrow down"
      />
    </header>
  );
}
