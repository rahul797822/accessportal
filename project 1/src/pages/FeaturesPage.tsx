import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bus, ArrowLeft, Moon, Sun, MapPin, Bell, Users } from 'lucide-react';

interface FeaturesPageProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const FeaturesPage: React.FC<FeaturesPageProps> = ({ darkMode, toggleDarkMode }) => {
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
              Our Features
            </h1>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<MapPin className="h-8 w-8" />}
                title="Real-time Updates"
                description="Get instant notifications about accessibility status changes at stations and stops. Our system continuously monitors elevator status, ramp availability, and other critical accessibility features."
                delay="0.2s"
              />
              <FeatureCard
                icon={<Bell className="h-8 w-8" />}
                title="Custom Alerts"
                description="Set up personalized notifications for your frequent routes and stations. Never be caught off guard by unexpected accessibility issues during your journey."
                delay="0.4s"
              />
              <FeatureCard
                icon={<Users className="h-8 w-8" />}
                title="Community Reports"
                description="Join our community of users who contribute real-time accessibility information. Help others by reporting issues and staying informed about accessibility status."
                delay="0.6s"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function FeatureCard({ icon, title, description, delay }) {
  return (
    <div 
      className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-scale"
      style={{ animationDelay: delay }}
    >
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white mb-4 animate-bounce-in mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-center">{description}</p>
    </div>
  );
}

export default FeaturesPage;