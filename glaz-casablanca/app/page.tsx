"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
              GLAZ
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">Home</a>
              <a href="#experience" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">Experience</a>
              <a href="#offerings" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">Offerings</a>
              <a href="#visit" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">Visit Us</a>
            </div>
            <button className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300">
              Reserve
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="mb-6 inline-block">
            <span className="text-teal-400 text-sm font-semibold tracking-widest uppercase border border-teal-400/30 px-4 py-2 rounded-full bg-teal-400/10">
              Casablanca's Premier Destination
            </span>
          </div>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-teal-100 to-cyan-200 bg-clip-text text-transparent leading-tight">
            Welcome to<br />GLAZ Casablanca
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Step into a world of vibrant colors, sleek designs, and an unforgettable atmosphere where modern aesthetics meet culinary excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105">
              Explore Menu
            </button>
            <button className="border-2 border-teal-400 text-teal-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-400/10 transition-all duration-300">
              View Gallery
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-teal-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-teal-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
              The Glaz Experience
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Come for the ambiance, stay for the experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/20 transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🍸</div>
              <h3 className="text-2xl font-bold text-white mb-3">Signature Cocktails</h3>
              <p className="text-gray-400 leading-relaxed">
                Expertly crafted cocktails with a twist, featuring premium spirits and innovative flavor combinations
              </p>
              <div className="mt-6 h-1 w-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/20 transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🍴</div>
              <h3 className="text-2xl font-bold text-white mb-3">Gourmet Cuisine</h3>
              <p className="text-gray-400 leading-relaxed">
                Trendy bites and mouthwatering dishes crafted by our talented culinary team using the finest ingredients
              </p>
              <div className="mt-6 h-1 w-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/20 transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-white mb-3">Vibrant Atmosphere</h3>
              <p className="text-gray-400 leading-relaxed">
                An atmosphere designed for moments of relaxation and celebration in contemporary style
              </p>
              <div className="mt-6 h-1 w-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section id="offerings" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
              What We Offer
            </h2>
            <p className="text-gray-400 text-lg">
              Every detail crafted for your perfect evening
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-teal-900/30 to-slate-900/30 rounded-2xl p-8 border border-teal-500/30 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🍸</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Exclusive Cocktails with a Twist</h3>
                  <p className="text-gray-400">
                    Our mixologists create unique signature drinks that blend traditional techniques with modern innovation
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/30 to-slate-900/30 rounded-2xl p-8 border border-cyan-500/30 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🍴</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Trendy Bites & Gourmet Meals</h3>
                  <p className="text-gray-400">
                    From small plates to full courses, every dish is a masterpiece of flavor and presentation
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900/30 to-teal-900/30 rounded-2xl p-8 border border-teal-500/30 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🎉</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Designed for Celebration</h3>
                  <p className="text-gray-400">
                    An atmosphere that transforms ordinary moments into extraordinary memories
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900/30 to-cyan-900/30 rounded-2xl p-8 border border-cyan-500/30 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🌆</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Perfect for Every Occasion</h3>
                  <p className="text-gray-400">
                    Dinner dates, after-work drinks, or weekend get-togethers - we've got you covered
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-2xl p-8 border border-teal-500/30">
              <p className="text-2xl text-teal-300 mb-2">🎶</p>
              <p className="text-xl text-gray-300 italic">
                "Let the rhythm of Casablanca inspire your evening at Glaz"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery/Ambiance Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
              Discover the Allure
            </h2>
            <p className="text-gray-400 text-lg">
              A visual journey through Glaz Casablanca
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="group relative aspect-square bg-gradient-to-br from-teal-900/40 to-slate-900/40 rounded-xl overflow-hidden border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                    {item % 4 === 0 ? '🍸' : item % 4 === 1 ? '🍴' : item % 4 === 2 ? '🎉' : '✨'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section id="visit" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-6xl">📍</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
            Visit Us Today
          </h2>
          <p className="text-2xl text-gray-300 mb-8">
            Discover the allure of Glaz Casablanca
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Make every moment unforgettable at Casablanca's most stylish destination. Whether you're planning a romantic dinner, celebrating with friends, or unwinding after work, Glaz is where memories are made.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-teal-500/20 min-w-[200px]">
              <p className="text-teal-400 font-semibold mb-2">Opening Hours</p>
              <p className="text-white">Mon - Sun</p>
              <p className="text-gray-400">6:00 PM - 2:00 AM</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-teal-500/20 min-w-[200px]">
              <p className="text-teal-400 font-semibold mb-2">Location</p>
              <p className="text-white">Casablanca</p>
              <p className="text-gray-400">Morocco</p>
            </div>
          </div>

          <button className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-12 py-4 rounded-full text-xl font-semibold hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105">
            Make a Reservation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-teal-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent mb-2">
                GLAZ
              </div>
              <p className="text-gray-400">Casablanca's Premier Destination</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>© 2025 Glaz Casablanca. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
