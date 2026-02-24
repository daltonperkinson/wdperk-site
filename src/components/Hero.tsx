import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-stone-800 to-stone-900"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center px-6">
        <div className="inline-block mb-6">
          <div className="w-1 h-16 bg-amber-500 mx-auto mb-6"></div>
        </div>

        <h1 className="text-6xl md:text-8xl font-light text-white mb-6 tracking-tight">
          Dalton Perkinson
        </h1>

        <p className="text-xl md:text-2xl text-stone-300 font-light tracking-wide mb-8">
          A practical and public journal
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-stone-400 font-light tracking-wider">
          <span className="px-4 py-2 border border-stone-600 rounded-full hover:border-amber-500 transition-colors">
            Interests
          </span>
          <span className="px-4 py-2 border border-stone-600 rounded-full hover:border-amber-500 transition-colors">
            Projects
          </span>
          <span className="px-4 py-2 border border-stone-600 rounded-full hover:border-amber-500 transition-colors">
            Ideas
          </span>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
