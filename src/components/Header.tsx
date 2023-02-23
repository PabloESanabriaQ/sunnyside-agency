import Navbar from "./Navbar";

export default function Header() {
  return (
    <header
      className="w-full min-w-fit h-full min-h-full py-5 bg-mobile-header bg-no-repeat bg-center bg-cover
    md:bg-desktop-header text-white flex flex-1 flex-col items-center gap-20"
    >
      <Navbar />
      <h1 className="font-fraunces text-center text-5xl tracking-widest font-black">
        WE ARE CREATIVES
      </h1>
      <img
        className="mb-40 animate-bounce"
        src="/src/assets/images/icon-arrow-down.svg"
        alt="arrow down"
      />
    </header>
  );
}
