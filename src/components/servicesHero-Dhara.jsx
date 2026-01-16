import { useEffect, useState } from "react";

const words = ["Innovation", "Growth", "Efficiency"];

export default function ServicesHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen bg-black overflow-hidden">

      {/* SPLINE BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <iframe
          src="https://my.spline.design/verticalglassstackcopycopy-LpXOyu2Mo16eKvluW7NNQPhT-Y9A/"
          className="w-full h-full"
          frameBorder="0"
        />

        {/* MASK TO HIDE HANA BADGE */}
        <div className="absolute bottom-4 right-4 w-44 h-14 bg-black rounded-lg" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

        <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.05] text-white">
          <span className="block mb-2 tracking-tight">
            Solutions for
          </span>

        <span
  key={index}
  className="
    block
    text-transparent
    bg-clip-text
    bg-gradient-to-r
    from-white
    via-pink-400
    to-indigo-400
    drop-shadow-[0_0_20px_rgba(255,255,255,0.35)]
  "
>
  {words[index]}
</span>

        </h1>

        <div className="mt-4 h-[3px] w-24 bg-gradient-to-r from-white via-fuchsia-500 to-purple-700 rounded-full" />

        <p className="mt-4 text-lg text-white/80 max-w-xl">
          Mastering complexity through precision-engineered strategies.
        </p>
      </div>

    </section>
  );
}
