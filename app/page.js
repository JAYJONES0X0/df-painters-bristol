'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <main className="bg-zinc-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-zinc-950 border-b border-zinc-800 z-50">
        <div className="container flex items-center justify-between h-16">
          <div className="text-xl font-bold gradient-text">D.F Painters Bristol</div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-indigo-400 transition">Services</a>
            <a href="#why-us" className="hover:text-indigo-400 transition">Why Us</a>
            <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center section-padding mt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 opacity-50"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        
        <div className="container relative z-10 text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your Space with <span className="gradient-text">Professional Painting</span>
          </h1>
          <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
            Award-winning painting and decorating services in Bristol. We bring colour and brilliance to residential and commercial properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn-primary text-lg">Get Free Quote</button>
            <button className="btn-secondary text-lg">View Our Work</button>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-16 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">15+</div>
              <p className="text-zinc-400">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">500+</div>
              <p className="text-zinc-400">Projects Completed</p>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">98%</div>
              <p className="text-zinc-400">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-zinc-900/50 border-y border-zinc-800">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-zinc-400 text-lg">Comprehensive painting and decorating solutions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎨',
                title: 'Interior Painting',
                desc: 'Professional interior painting with premium finishes and attention to detail.'
              },
              {
                icon: '🏠',
                title: 'Exterior Painting',
                desc: 'Weather-resistant exterior work that enhances curb appeal and protection.'
              },
              {
                icon: '✨',
                title: 'Decorative Finishes',
                desc: 'Specialty finishes including faux effects, textured coatings, and custom colours.'
              },
              {
                icon: '🔧',
                title: 'Surface Preparation',
                desc: 'Expert surface prep ensures long-lasting, flawless results every time.'
              },
              {
                icon: '🛡️',
                title: 'Protective Coatings',
                desc: 'Specialist coatings for durability and enhanced aesthetic appeal.'
              },
              {
                icon: '🏢',
                title: 'Commercial Services',
                desc: 'Large-scale projects with minimal disruption to your business operations.'
              }
            ].map((service, i) => (
              <div key={i} className="glass-effect p-8 rounded-lg hover:bg-zinc-800/30 transition group">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-zinc-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Why Choose <span className="gradient-text">D.F Painters Bristol</span>?
              </h2>
              
              {[
                { title: 'Expert Team', desc: 'Fully trained and certified professional painters with years of experience' },
                { title: 'Quality Materials', desc: 'We use only premium paints and materials for lasting results' },
                { title: 'On-Time Delivery', desc: 'Punctual, efficient service without compromising on quality' },
                { title: 'Competitive Pricing', desc: 'Best value for money with transparent, upfront quotes' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-zinc-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="glass-effect p-8 rounded-xl">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23312e81' width='400' height='300'/%3E%3Crect fill='%234c1d95' x='50' y='50' width='300' height='200' rx='20'/%3E%3Ctext x='200' y='150' font-size='48' fill='%23e9d5ff' text-anchor='middle' dy='.3em'%3EProfessional Quality%3C/text%3E%3C/svg%3E"
                alt="Professional Quality"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-zinc-900/50 border-t border-zinc-800">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
            <p className="text-zinc-400">Get your free quote today. No obligation.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-lg space-y-4">
            <input 
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:border-indigo-500 transition"
            />
            <button type="submit" className="w-full btn-primary py-3">
              Get Free Quote
            </button>
            {submitted && (
              <p className="text-green-400 text-center">Thanks! We'll be in touch soon.</p>
            )}
          </form>

          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl mb-2">📞</div>
              <p className="text-zinc-400">Call us for quick quotes</p>
            </div>
            <div>
              <div className="text-2xl mb-2">📍</div>
              <p className="text-zinc-400">Based in Bristol, UK</p>
            </div>
            <div>
              <div className="text-2xl mb-2">⏰</div>
              <p className="text-zinc-400">Mon-Sat 8am-6pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 bg-zinc-950">
        <div className="container text-center text-zinc-500">
          <p>&copy; 2024 D.F Painters Bristol. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
