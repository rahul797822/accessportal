import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bus, ArrowLeft, Moon, Sun, Settings, Smartphone, Database } from 'lucide-react';

interface HowItWorksPageProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ darkMode, toggleDarkMode }) => {
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center animate-slide-in-right">
              <Bus className="h-8 w-8 text-blue-600 dark:text-blue-400 animate-bounce-in" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">AccessibleTransit</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-all duration-300 hover:scale-110"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="h-5 w-5 animate-spin-slow" /> : <Moon className="h-5 w-5 animate-spin-slow" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="mb-8 inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300 animate-fade-in"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </button>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 animate-scale">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 animate-slide-up">
              How It Works
            </h1>

            <div className="space-y-12">
              <Step
                icon={<Smartphone className="h-8 w-8" />}
                title="Mobile App Integration"
                description="Our mobile app connects you to real-time accessibility information. Download the app, set up your profile, and start receiving instant updates about accessibility features in your area."
                delay="0.2s"
              />
              <Step
                icon={<Settings className="h-8 w-8" />}
                title="Sensor Network"
                description="We've installed smart sensors across the transit network to monitor elevator status, ramp availability, and other accessibility features. These sensors provide accurate, real-time data 24/7."
                delay="0.4s"
              />
              <Step
                icon={<Database className="h-8 w-8" />}
                title="Data Processing"
                description="Our advanced algorithms process data from sensors and community reports to provide accurate, up-to-the-minute accessibility information. Machine learning helps predict potential issues before they occur."
                delay="0.6s"
              />
            </div>

            <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">
                Get Started Today
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Join thousands of users who rely on AccessibleTransit for their daily commute. Download our app or sign up for web notifications to start receiving real-time accessibility updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Step({ icon, title, description, delay }) {
  return (
    <div 
      className="flex items-start space-x-6 animate-fade-in"
      style={{ animationDelay: delay }}
    >
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white animate-bounce-in">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
}

export default HowItWorksPage;