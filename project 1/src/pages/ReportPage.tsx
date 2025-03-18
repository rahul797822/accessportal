import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bus, ArrowLeft, Moon, Sun, MapPin, Camera, AlertCircle } from 'lucide-react';

interface ReportPageProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ReportPage: React.FC<ReportPageProps> = ({ darkMode, toggleDarkMode }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    location: '',
    issueType: '',
    description: '',
    photo: null as File | null,
    urgency: 'medium'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Show success message and redirect
    alert('Report submitted successfully!');
    navigate('/');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navigation */}
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

      {/* Report Form */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="mb-8 inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300 animate-fade-in"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </button>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 animate-scale">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 animate-slide-up">
              Report Accessibility Issue
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Location
                </label>
                <div className="mt-1 relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="location"
                    required
                    className="pl-10 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Enter station or stop name"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <label htmlFor="issueType" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Issue Type
                </label>
                <select
                  id="issueType"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  value={formData.issueType}
                  onChange={(e) => setFormData({ ...formData, issueType: e.target.value })}
                >
                  <option value="">Select an issue type</option>
                  <option value="elevator">Elevator Issue</option>
                  <option value="ramp">Ramp Issue</option>
                  <option value="entrance">Entrance Accessibility</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Description
                </label>
                <textarea
                  id="description"
                  required
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Describe the accessibility issue..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Urgency Level
                </label>
                <div className="mt-2 flex space-x-4">
                  {['low', 'medium', 'high'].map((level) => (
                    <label key={level} className="inline-flex items-center">
                      <input
                        type="radio"
                        name="urgency"
                        value={level}
                        checked={formData.urgency === level}
                        onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                        className="form-radio h-4 w-4 text-blue-600 dark:text-blue-400"
                      />
                      <span className="ml-2 capitalize text-gray-700 dark:text-gray-300">
                        {level}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Add Photo (optional)
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300">
                  <div className="space-y-1 text-center">
                    <Camera className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600 dark:text-gray-400">
                      <label htmlFor="photo" className="relative cursor-pointer rounded-md font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                        <span>Upload a file</span>
                        <input
                          id="photo"
                          name="photo"
                          type="file"
                          accept="image/*"
                          className="sr-only"
                          onChange={(e) => setFormData({ ...formData, photo: e.target.files?.[0] || null })}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 animate-fade-in" style={{ animationDelay: '0.7s' }}>
                <AlertCircle className="h-5 w-5 text-gray-400" />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Your report will be reviewed and verified by our team
                </p>
              </div>

              <div className="pt-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 hover:scale-105"
                >
                  Submit Report
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;