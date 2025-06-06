import React, { useState, useEffect } from 'react';
import { ChevronRight, Shield, Zap, Globe, ArrowRight } from 'lucide-react';

const StableCoinLanding = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentFeature, setCurrentFeature] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Shield, text: "1:1 USD Backed" },
    { icon: Zap, text: "Instant Transfers" },
    { icon: Globe, text: "Global Access" }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    setShowCongrats(true);
    // Reset form
    setFormData({ firstName: '', lastName: '', email: '' });
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({ firstName: '', lastName: '', email: '' });
  };

  const closeCongrats = () => {
    setShowCongrats(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden pt-10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${20 + mousePosition.x * 0.02}%`,
            top: `${10 + mousePosition.y * 0.02}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse"
          style={{
            right: `${15 + mousePosition.x * -0.015}%`,
            bottom: `${20 + mousePosition.y * -0.015}%`,
            transform: 'translate(50%, 50%)',
            animationDelay: '1s'
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>

      {/* Flying Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '4s'
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"></div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        
        {/* Logo/Brand */}
        <div className="mb-8 relative">
          <div className="w-20 h-20 mx-auto mb-4 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
            <div className="absolute inset-1 bg-slate-900 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">$1</span>
            </div>
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-xl animate-pulse"></div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 relative">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
            StableCoin
          </span>
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-2xl -z-10 animate-pulse"></div>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-2xl">
          Revolutionary Digital Currency
        </p>
        
        {/* Key Value Prop */}
        <div className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl">
          <div className="flex items-center justify-center space-x-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold text-green-400">$1</span>
              <ArrowRight className="w-6 h-6 text-slate-400" />
              <span className="text-3xl font-bold text-blue-400">1 COIN</span>
            </div>
          </div>
          <p className="mt-4 text-slate-400">Always pegged. Always stable. Always $1.</p>
        </div>

        {/* Rotating Features */}
        <div className="mb-12 h-16 flex items-center">
          <div className="flex items-center space-x-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-500">
            {React.createElement(features[currentFeature].icon, { 
              className: "w-6 h-6 text-blue-400" 
            })}
            <span className="text-white font-medium text-lg">
              {features[currentFeature].text}
            </span>
          </div>
        </div>

        {/* Coming Soon Badge */}
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 animate-pulse">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            <span className="text-white font-semibold">Coming Soon</span>
          </div>
        </div>

        {/* CTA Button */}
        <button 
          onClick={() => setShowModal(true)}
          className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer z-30"
        >
          <span className="flex items-center space-x-2">
            <span>Get Notified</span>
            <ChevronRight className="w-5 h-5" />
          </span>
        </button>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-2xl md:text-3xl font-bold text-white">100%</div>
            <div className="text-sm text-slate-400">USD Backed</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl md:text-3xl font-bold text-white">24/7</div>
            <div className="text-sm text-slate-400">Trading</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl md:text-3xl font-bold text-white">0%</div>
            <div className="text-sm text-slate-400">Volatility</div>
          </div>
        </div>
      </div>

      {/* Animated Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            fill="url(#gradient)"
            className="animate-pulse"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.1)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Notification Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900 rounded-2xl p-8 max-w-md w-full border border-slate-700 relative">
            {/* Close button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Get Early Access</h2>
              <p className="text-slate-400">Be the first to know when StableCoin launches</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
              >
                Notify Me
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Congratulations Modal */}
      {showCongrats && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900 rounded-2xl p-8 max-w-md w-full border border-slate-700 text-center relative">
            {/* Animated Success Icon */}
            <div className="w-20 h-20 mx-auto mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* Success Message */}
            <h2 className="text-3xl font-bold text-white mb-4">🎉 You're In!</h2>
            <p className="text-slate-300 mb-2">Welcome to the StableCoin community!</p>
            <p className="text-slate-400 mb-6">We'll notify you as soon as we launch. Get ready for the future of stable digital currency.</p>
            
            {/* Benefits */}
            <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
              <p className="text-sm text-slate-300 mb-2">🎁 Early Access Benefits:</p>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• Priority account setup</li>
                <li>• Exclusive launch bonuses</li>
                <li>• Zero fees for first month</li>
              </ul>
            </div>

            <button
              onClick={closeCongrats}
              className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg text-white font-semibold hover:from-green-500 hover:to-emerald-500 transition-all duration-300"
            >
              Awesome!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StableCoinLanding;