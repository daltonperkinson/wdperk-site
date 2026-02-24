import { Code, Lightbulb, Zap, Library, Croissant } from 'lucide-react';

export default function Professional() {
  const interests = [
    {
      icon: Library,
      title: 'Writing & Research',
      description: 'Telling stories through prose and other mediums.',
    },
    {
      icon: Lightbulb,
      title: 'Solutions Consulting',
      description: 'Simplifying complex challenges with practical, common-sense solutions.',
    },
    {
      icon: Croissant,
      title: 'Meraki Chicago',
      description: 'A passion project for community-centric, global fusion gastronomy.',
    },
  ];

  return (
    <section id="professional" className="py-24 px-6 lg:px-8 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="w-1 h-16 bg-amber-500 mb-6"></div>
          <h2 className="text-5xl font-light text-stone-900 mb-4">Interests</h2>
          <div className="w-24 h-1 bg-stone-200"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-lg hover:shadow-xl transition-all duration-300 border border-stone-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <interest.icon className="text-white" size={32} />
              </div>

              <h3 className="text-2xl font-light text-stone-900 mb-4">
                {interest.title}
              </h3>

              <p className="text-stone-600 font-light leading-relaxed">
                {interest.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-900 to-stone-800 rounded-lg p-12 text-white">
          <h3 className="text-3xl font-light mb-4">Current Projects</h3>
          <p className="text-lg font-light text-stone-200 leading-relaxed">
            I'm always working on something. Projects, hobbies, and interests live in the categories below.
            Check back to see what's new and what I've been exploring lately.
          </p>
        </div>
      </div>
    </section>
  );
}
