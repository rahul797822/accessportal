import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bus, ArrowLeft, Moon, Sun, TrendingUp, TrendingDown, Minus, RefreshCw } from 'lucide-react';

interface LiveDataPageProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const LiveDataPage: React.FC<LiveDataPageProps> = ({ darkMode, toggleDarkMode }) => {
  const navigate = useNavigate();
  const [lastUpdate, setLastUpdate] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdate(new Date());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

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
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white animate-slide-up">
                Live Accessibility Data
              </h1>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 animate-fade-in">
                <RefreshCw className="h-4 w-4 mr-2 animate-spin-slow" />
                Last updated: {lastUpdate.toLocaleTimeString()}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
              <StatusCard
                title="Central Station"
                status="All Systems Operational"
                details={[
                  { name: "Elevators", status: "operational", count: "4/4" },
                  { name: "Ramps", status: "operational", count: "6/6" },
                  { name: "Accessible Gates", status: "operational", count: "2/2" }
                ]}
                trend="up"
                delay="0.2s"
              />
              <StatusCard
                title="North Terminal"
                status="Partial Service Disruption"
                details={[
                  { name: "Elevators", status: "partial", count: "3/4" },
                  { name: "Ramps", status: "operational", count: "4/4" },
                  { name: "Accessible Gates", status: "operational", count: "2/2" }
                ]}
                trend="down"
                delay="0.4s"
              />
              <StatusCard
                title="South Station"
                status="Normal Operations"
                details={[
                  { name: "Elevators", status: "operational", count: "2/2" },
                  { name: "Ramps", status: "operational", count: "3/3" },
                  { name: "Accessible Gates", status: "operational", count: "1/1" }
                ]}
                trend="stable"
                delay="0.6s"
              />
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Recent Updates
              </h2>
              <div className="space-y-4">
                <Update
                  time="10 minutes ago"
                  message="Elevator maintenance completed at Central Station - all elevators now operational"
                  type="success"
                />
                <Update
                  time="25 minutes ago"
                  message="North Terminal elevator #2 temporarily out of service - maintenance team en route"
                  type="warning"
                />
                <Update
                  time="1 hour ago"
                  message="South Station accessibility features check completed - all systems normal"
                  type="info"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function StatusCard({ title, status, details, trend, delay }) {
  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-5 w-5 text-green-500" />;
      case 'down':
        return <TrendingDown className="h-5 w-5 text-red-500" />;
      default:
        return <Minus className="h-5 w-5 text-yellow-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'operational':
        return 'text-green-500';
      case 'partial':
        return 'text-yellow-500';
      default:
        return 'text-red-500';
    }
  };

  return (
    <div 
      className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-scale"
      style={{ animationDelay: delay }}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        {getTrendIcon()}
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{status}</p>
      <div className="space-y-2">
        {details.map((detail, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">{detail.name}</span>
            <span className={`text-sm font-medium ${getStatusColor(detail.status)}`}>
              {detail.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Update({ time, message, type }) {
  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return 'text-green-800 dark:text-green-200 bg-green-100 dark:bg-green-900/20';
      case 'warning':
        return 'text-yellow-800 dark:text-yellow-200 bg-yellow-100 dark:bg-yellow-900/20';
      default:
        return 'text-blue-800 dark:text-blue-200 bg-blue-100 dark:bg-blue-900/20';
    }
  };

  return (
    <div className={`p-4 rounded-lg ${getTypeStyles()}`}>
      <div className="flex justify-between items-center">
        <p className="text-sm font-medium">{message}</p>
        <span className="text-xs opacity-75">{time}</span>
      </div>
    </div>
  );
}

export default LiveDataPage;