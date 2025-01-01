function Hero() {
  return (
    <section className="p-10 md:p-16 grid grid-cols-1 gap-6 text-black">
      <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-normal">
        Effortless
        <br />
        Team Collaboration
      </h1>
      <p className="text-lg md:text-xl leading-loose font-light ml-1">
        Next-generation collaboration platform <br />
        powered by{" "}
        <strong className=" bg-[#FFE6B7] py-1 px-5 font-bold text-2xl after:content-['🤖'] after:absolute after:-top-3 after:-right-2 after:rotate-12 after:border-none relative">
          AI{" "}
        </strong>
      </p>

      <div className="mt-8">
        <a
          href="#dataEntryForm"
          className="px-5 py-3 bg-blue-700 rounded-full text-white font-semibold hover:bg-blue-800 w-44 justify-self-end tracking-wider"
        >
          Request a demo
        </a>
      </div>
    </section>
  );
}

export default Hero;
