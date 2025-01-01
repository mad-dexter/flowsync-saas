const featuredInArray = [
  "forbes.png",
  "business-insider.png",
  "techcrunch.png",
  "the-new-york-times.png",
  "usa-today.png",
  "business-insider.png",
];

function FeaturedIn() {
  return (
    <section className="text-center mt-20">
      <p className="font-normal text-lg md:text-xl tracking-normal mb-8 text-[#343a40]">
        Industry leaders trust Pulsetech to grow their revenue
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 p-5 items-center justify-items-center">
        {featuredInArray.map((item, i) => (
          <img
            src={`/assets/logos/${item}`}
            alt={item}
            key={i}
            className="max-h-16 brightness-0 opacity-70 md:w-40 w-20"
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedIn;
