import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Bus, MapPin, Bell, Users, ArrowRight, Moon, Sun } from 'lucide-react';
import ReportPage from './pages/ReportPage';
import FeaturesPage from './pages/FeaturesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import LiveDataPage from './pages/LiveDataPage';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Routes>
      <Route path="/report" element={<ReportPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
      <Route path="/features" element={<FeaturesPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
      <Route path="/how-it-works" element={<HowItWorksPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
      <Route path="/live-data" element={<LiveDataPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
      <Route path="/" element={
        <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
          {/* Navigation */}
          <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center animate-slide-in-right">
                  <Bus className="h-8 w-8 text-blue-600 dark:text-blue-400 animate-bounce-in" />
                  <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">AccessibleTransit</span>
                </div>
                <div className="flex items-center space-x-4 animate-fade-in">
                  <nav className="hidden md:flex space-x-8">
                    <button 
                      onClick={() => navigate('/features')}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      Features
                    </button>
                    <button 
                      onClick={() => navigate('/how-it-works')}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      How it Works
                    </button>
                    <button 
                      onClick={() => navigate('/live-data')}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      Live Data
                    </button>
                  </nav>
                  <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-all duration-300 hover:scale-110"
                    aria-label="Toggle dark mode"
                  >
                    {darkMode ? <Sun className="h-5 w-5 animate-spin-slow" /> : <Moon className="h-5 w-5 animate-spin-slow" />}
                  </button>
                  <button className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left animate-slide-up">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                    <span className="block animate-slide-up" style={{ animationDelay: '0.2s' }}>Real-time</span>
                    <span className="block text-blue-600 dark:text-blue-400 animate-slide-up" style={{ animationDelay: '0.4s' }}>Accessibility Info</span>
                    <span className="block animate-slide-up" style={{ animationDelay: '0.6s' }}>for Everyone</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl animate-fade-in" style={{ animationDelay: '0.8s' }}>
                    Get instant updates on elevator status, ramp availability, and accessibility features across public transportation. Make informed travel decisions with real-time data.
                  </p>
                  <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left animate-fade-in" style={{ animationDelay: '1s' }}>
                    <button 
                      onClick={() => navigate('/report')}
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      Report Accessibility
                      <ArrowRight className="ml-2 h-5 w-5 animate-float" />
                    </button>
                  </div>
                </div>
                <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
                  <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md transition-transform duration-300 hover:scale-105">
                    <img
                      className="w-full rounded-lg"
                      src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80"
                      alt="Person in wheelchair accessing public transport"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div id="features" className="py-16 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center animate-slide-up">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                  Features that make a difference
                </h2>
              </div>
              <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <Feature
                  icon={<MapPin className="h-6 w-6" />}
                  title="Real-time Updates"
                  description="Get instant notifications about accessibility status changes at stations and stops."
                  delay="0.2s"
                />
                <Feature
                  icon={<Bell className="h-6 w-6" />}
                  title="Custom Alerts"
                  description="Set up personalized notifications for your frequent routes and stations."
                  delay="0.4s"
                />
                <Feature
                  icon={<Users className="h-6 w-6" />}
                  title="Community Reports"
                  description="Contribute and access crowd-sourced accessibility information."
                  delay="0.6s"
                />
              </div>
            </div>
          </div>

          {/* Live Data Section */}
          <div id="data" className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center animate-slide-up">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                  Live Accessibility Status
                </h2>
                <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                  Real-time updates from our network of sensors and community reports
                </p>
              </div>
              <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <StatusCard title="Elevators Online" value="92%" trend="up" delay="0.2s" />
                  <StatusCard title="Ramps Available" value="88%" trend="stable" delay="0.4s" />
                  <StatusCard title="Active Reports" value="24" trend="up" delay="0.6s" />
                </div>
              </div>
            </div>
          </div>
        </div>
      } />
    </Routes>
  );
}

function Feature({ icon, title, description, delay }) {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-scale" style={{ animationDelay: delay }}>
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white animate-bounce-in" style={{ animationDelay: delay }}>
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-base text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
}

function StatusCard({ title, value, trend, delay }) {
  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'text-green-500';
      case 'down':
        return 'text-red-500';
      default:
        return 'text-yellow-500';
    }
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-scale" style={{ animationDelay: delay }}>
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
      <p className={`mt-2 text