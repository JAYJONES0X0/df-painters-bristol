import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            DF Painters
          </div>
          <div className="flex gap-8">
            <a href="#services" className="hover:text-emerald-400 transition">Services</a>
            <a href="#portfolio" className="hover:text-emerald-400 transition">Portfolio</a>
            <a href="#contact" className="hover:text-emerald-400 transition">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Expert Painters for <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Bristol & Beyond</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Professional painting and decorating for homes and businesses across Bristol. Trusted by hundreds of satisfied customers.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="tel:+441179876543" className="px-8 py-4 bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition">
              Get Free Quote
            </a>
            <a href="#contact" className="px-8 py-4 border border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 rounded-lg font-semibold transition">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">What We Do</h2>
          <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            Complete painting and decorating solutions for every need and budget.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Residential Painting', desc: 'Beautiful interiors and exteriors for family homes.' },
              { title: 'Commercial Services', desc: 'Professional work for offices, shops and industrial units.' },
              { title: 'New Build Work', desc: 'Complete specification painting for new properties.' },
              { title: 'Wallpapering', desc: 'Expert wallpaper hanging and pattern matching.' },
              { title: 'Spray Finishing', desc: 'High-quality spray applications for doors and trim.' },
              { title: 'Colour Consultation', desc: 'Help choosing the perfect colours for your space.' }
            ].map((service, i) => (
              <div key={i} className="p-8 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-emerald-400/50 transition">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Why Choose DF Painters?</h2>
          <div className="space-y-8">
            {[
              { stat: '18+', label: 'Years Experience' },
              { stat: '450+', label: 'Projects Completed' },
              { stat: '4.9★', label: 'Customer Rating' },
              { stat: '100%', label: 'Quality Assured' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-8 p-6 bg-slate-800/30 rounded-lg border border-slate-700">
                <div className="text-4xl font-bold text-emerald-400">{item.stat}</div>
                <div className="text-lg text-slate-300">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-16 p-8 bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-emerald-400/30 rounded-lg">
            <p className="text-lg text-slate-200">
              "Outstanding work from start to finish. The team was professional, clean, and completed everything on schedule. Highly recommend!" — Rachel T.
            </p>
            <p className="text-slate-400 mt-4">Bristol Homeowner</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-green-950 to-emerald-950">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Your Transformation?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Free consultation and competitive quote. No hidden charges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+441179876543" className="px-8 py-4 bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition">
              📞 Call: 0117 987 6543
            </a>
            <a href="mailto:hello@dfpainters.co.uk" className="px-8 py-4 border border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 rounded-lg font-semibold transition">
              ✉️ Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="font-bold text-lg mb-4">DF Painters</div>
            <p className="text-slate-400">Professional painters serving Bristol and the South West</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#services" className="hover:text-emerald-400 transition">Services</a></li>
              <li><a href="#portfolio" className="hover:text-emerald-400 transition">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-slate-400">
              <a href="tel:+441179876543" className="hover:text-emerald-400 transition">0117 987 6543</a><br/>
              <a href="mailto:hello@dfpainters.co.uk" className="hover:text-emerald-400 transition">hello@dfpainters.co.uk</a>
            </p>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
          <p>&copy; 2026 DF Painters. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
