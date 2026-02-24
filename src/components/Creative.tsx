import { Wine, BookOpen, Palette } from 'lucide-react';

export default function Creative() {
  const categories = [
    {
      icon: Wine,
      title: 'Food & Drinks',
      description: 'Tapas, cocktails, and techniques. Balancing flavors, textures, and presentation.',
      gradient: 'from-rose-500 to-orange-500',
    },
    {
      icon: BookOpen,
      title: 'Writing',
      description: 'Thoughts, observations, and writing projects. A space for expression and storytelling.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Palette,
      title: 'Design & Visual',
      description: 'Visual exploration, design work, and creative projects. Art and composition.',
      gradient: 'from-amber-500 to-yellow-500',
    },
  ];

  return (
    <section id="creative" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="w-1 h-16 bg-amber-500 mb-6"></div>
          <h2 className="text-5xl font-light text-stone-900 mb-4">Collections</h2>
          <div className="w-24 h-1 bg-stone-200"></div>
        </div>

        <div className="space-y-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-stone-50 hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row">
                <div className={`md:w-1/3 bg-gradient-to-br ${category.gradient} p-12 flex items-center justify-center`}>
                  <div className="transform group-hover:scale-110 transition-transform duration-500">
                    <category.icon className="text-white" size={80} strokeWidth={1} />
                  </div>
                </div>

                <div className="md:w-2/3 p-12">
                  <h3 className="text-3xl font-light text-stone-900 mb-4">
                    {category.title}
                  </h3>
                  <p className="text-lg text-stone-600 font-light leading-relaxed mb-6">
                    {category.description}
                  </p>
                  <div className="text-stone-400 font-light italic">
                    Coming soon
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-stone-600 font-light leading-relaxed max-w-3xl mx-auto">
            These collections capture what I'm interested in and working on right now.
            As my interests evolve, so does this space.
          </p>
        </div>
      </div>
    </section>
  );
}
