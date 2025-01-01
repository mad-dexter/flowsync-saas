import Hero from "./Hero";

function Header() {
  return (
    <div className="header-hero m-1">
      <header className="grid grid-cols-2 items-center justify-center mx-8 py-5">
        <a
          href="#"
          className="font-extrabold text-black tracking-widest text-2xl md:text-3xl"
        >
          Flowsync
        </a>

        <a
          className="px-5 py-3 bg-blue-700 rounded-full text-white font-semibold hover:bg-blue-800 w-44 justify-self-end"
          href="#dataEntryForm"
        >
          Request a demo
        </a>
      </header>
      <Hero />
    </div>
  );
}

export default Header;
