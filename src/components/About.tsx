export default function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="w-1 h-16 bg-amber-500 mb-6"></div>
          <h2 className="text-5xl font-light text-stone-900 mb-4">About</h2>
          <div className="w-24 h-1 bg-stone-200"></div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-stone-700 font-light leading-relaxed mb-6">
            Welcome to my corner of the internet. This space serves as a more practical and public form of journaling—a place
            where I collect, organize, and share my interests and projects.
          </p>

          <p className="text-xl text-stone-700 font-light leading-relaxed mb-6">
            My interests and hobbies shift throughout the year. I use this site to categorize what I'm working on or exploring at any given moment.
          </p>

          <p className="text-xl text-stone-700 font-light leading-relaxed">
            It's a living journal of curiosity, experimentation, and discovery.
          </p>
        </div>
      </div>
    </section>
  );
}
