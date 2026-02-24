import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <div className="w-1 h-16 bg-amber-500 mb-6 mx-auto"></div>
          <h2 className="text-5xl font-light text-white mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-stone-600 mx-auto"></div>
        </div>

        <div className="text-center mb-12">
          <p className="text-xl text-stone-300 font-light leading-relaxed mb-8">
            Whether you want to discuss a project, share ideas, or just say hello—I'd love to hear from you.
          </p>

          <a
            href="mailto:hello@wdperk.com"
            className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg transition-colors duration-300 text-lg font-light"
          >
            <Mail size={24} />
            Get in Touch
          </a>
        </div>

        <div className="flex justify-center gap-6 mb-12">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              aria-label={link.label}
              className="w-12 h-12 border border-stone-600 rounded-full flex items-center justify-center text-stone-400 hover:text-amber-500 hover:border-amber-500 transition-colors duration-300"
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>

        <div className="text-center text-stone-500 font-light text-sm pt-12 border-t border-stone-700">
          <p className="mb-2">© {new Date().getFullYear()} Dalton Perkinson. All rights reserved.</p>
          <p>Crafted with care and attention to detail.</p>
        </div>
      </div>
    </section>
  );
}
