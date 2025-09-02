import React from 'react'
import './App.css'

function App() {

  const [activeTab, setActiveTab] = React.useState('1st Attempt');

  const handleTabClick = (cityName) => {
    setActiveTab(cityName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-100 to-teal-200 p-6 relative">
      {/* Animated ocean background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-300/20 to-transparent animate-pulse"></div>
        <div className="absolute top-1/4 left-0 w-full h-12 bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent opacity-60 animate-ping" style={{animationDuration: '4s'}}></div>
        
        {/* Floating bubbles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-300/40 rounded-full animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-blue-300/40 rounded-full animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-teal-300/40 rounded-full animate-bounce" style={{animationDuration: '5s', animationDelay: '2s'}}></div>
        <div className="absolute top-2/3 right-1/3 w-5 h-5 bg-cyan-200/30 rounded-full animate-bounce" style={{animationDuration: '6s', animationDelay: '0.5s'}}></div>
        
        {/* Floating seaweed-like elements */}
        <div className="absolute bottom-10 left-10 w-1 h-16 bg-gradient-to-t from-green-400/30 to-transparent animate-pulse" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-8 right-20 w-1 h-20 bg-gradient-to-t from-teal-400/30 to-transparent animate-pulse" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Ocean-themed header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">
            Ocean Inspired Material Making
          </h1>
          <h2 className="text-2xl font-semibold text-teal-700 mb-1">
            Seaweed Based Bio Plastic Making
          </h2>
          <h3 className="text-lg text-blue-600 font-medium">
            Experiments
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full mx-auto mt-3"></div>
        </div>

        {/* Main content card with ocean styling */}
        <div className="bg-slate-50/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border-2 border-cyan-200">
          {/* Wave-styled tab navigation */}
          <div className="flex border-b-2 border-cyan-300 bg-gradient-to-r from-cyan-200/60 to-blue-200/60">
            <button
              className={`flex-1 py-4 px-6 text-sm font-medium transition-all duration-200 ${
                activeTab === '1st Attempt' 
                  ? 'bg-teal-500 text-white' 
                  : 'text-teal-700 hover:text-teal-900 hover:bg-teal-100'
              }`}
              onClick={() => handleTabClick('1st Attempt')}
            >
              1st Attempt
            </button>
            <button
              className={`flex-1 py-4 px-6 text-sm font-medium transition-all duration-200 ${
                activeTab === '2nd Attempt' 
                  ? 'bg-teal-500 text-white' 
                  : 'text-teal-700 hover:text-teal-900 hover:bg-teal-100'
              }`}
              onClick={() => handleTabClick('2nd Attempt')}
            >
              2nd Attempt
            </button>
            <button
              className={`flex-1 py-4 px-6 text-sm font-medium transition-all duration-200 ${
                activeTab === '3rd Attempt' 
                  ? 'bg-teal-500 text-white' 
                  : 'text-teal-700 hover:text-teal-900 hover:bg-teal-100'
              }`}
              onClick={() => handleTabClick('3rd Attempt')}
            >
              3rd Attempt
            </button>
          </div>

          <div className="p-6 bg-gradient-to-br from-slate-100/60 to-cyan-100/40">
            <div
              id="1st Attempt"
              className={`${activeTab === '1st Attempt' ? 'block' : 'hidden'}`}
            >
              <div className="bg-gradient-to-r from-teal-100/70 to-cyan-100/70 rounded-lg p-4 border-l-4 border-teal-400 shadow-sm backdrop-blur-sm">
                <h4 className="font-semibold text-teal-800 mb-3 flex items-center">
                  Recipe
                </h4>
                <div className="ml-4">
                  <h5 className="font-medium text-blue-700 mb-2">Ingredients</h5>
                  <ul className="ml-6 space-y-2 text-slate-700">
                    <li className="flex items-center hover:bg-white/30 p-1 rounded">
                      <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full mr-3"></span>
                      5tbsp cornstarch
                    </li>
                    <li className="flex items-center hover:bg-white/30 p-1 rounded">
                      <span className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mr-3"></span>
                      5tbsp gelatin
                    </li>
                    <li className="flex items-center hover:bg-white/30 p-1 rounded">
                      <span className="w-3 h-3 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full mr-3"></span>
                      5 tsp glycerin
                    </li>
                    <li className="flex items-center hover:bg-white/30 p-1 rounded">
                      <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full mr-3"></span>
                      2 half tsp white vinegar
                    </li>
                    <li className="flex items-center hover:bg-white/30 p-1 rounded">
                      <span className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mr-3"></span>
                      6tbsp water
                    </li>
                    <li className="flex items-center hover:bg-white/30 p-1 rounded">
                      <span className="w-3 h-3 bg-gradient-to-r from-green-400 to-teal-500 rounded-full mr-3"></span>
                      1 cup of seaweed
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              id="2nd Attempt"
              className={`${activeTab === '2nd Attempt' ? 'block' : 'hidden'}`}
            >
              <div className="bg-gradient-to-r from-blue-100/70 to-teal-100/70 rounded-lg p-4 border-l-4 border-cyan-400 shadow-sm backdrop-blur-sm">
                <h4 className="font-semibold text-cyan-800 mb-3 flex items-center">
                  Recipe
                </h4>
                <div className="ml-4">
                  <h5 className="font-medium text-blue-700 mb-2">Ingredients</h5>
                  <ul className="ml-6 space-y-2 text-slate-700">
                    <li className="flex items-center hover:bg-white/30 p-1 rounded">
                      <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3"></span>
                      100ml water
                    </li>
                    <li className="flex items-center hover:bg-white/30 p-1 rounded">
                      <span className="w-3 h-3 bg-gradient-to-r from-blue-400 to-teal-500 rounded-full mr-3"></span>
                      6g of gelatin
                    </li>
                    <li className="flex items-center hover:bg-white/30 p-1 rounded">
                      <span className="w-3 h-3 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full mr-3"></span>
                      6g of glycerin
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              id="3rd Attempt"
              className={`${activeTab === '3rd Attempt' ? 'block' : 'hidden'}`}
            >
              <div className="bg-gradient-to-r from-slate-100/70 to-blue-100/70 rounded-lg p-6 border-l-4 border-blue-400 shadow-sm text-center backdrop-blur-sm">
                <p className="text-blue-600 font-medium text-lg">Exploring deeper oceanic possibilities...</p>
                <p className="text-slate-500 italic mt-2">Recipe in development</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App