import React from 'react'
import './App.css'

function App() {

  const [activeTab, setActiveTab] = React.useState('1st Attempt');

  const handleTabClick = (cityName) => {
    setActiveTab(cityName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-100 p-6 relative">
      {/* Subtle wave pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-blue-200 to-transparent"></div>
        <div className="absolute top-1/3 left-0 w-full h-8 bg-gradient-to-r from-transparent via-cyan-200 to-transparent"></div>
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
            Laboratory Experiments
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full mx-auto mt-3"></div>
        </div>

        {/* Main content card with ocean styling */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border-2 border-cyan-200">
          {/* Wave-styled tab navigation */}
          <div className="flex border-b-2 border-cyan-300 bg-gradient-to-r from-cyan-100 to-blue-100">
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

          <div className="p-6 bg-gradient-to-br from-white/95 to-cyan-50/50">
            <div
              id="1st Attempt"
              className={`${activeTab === '1st Attempt' ? 'block' : 'hidden'}`}
            >
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-4 border-l-4 border-teal-400 shadow-sm">
                <h4 className="font-semibold text-teal-800 mb-3 flex items-center">
                  📋 Recipe
                </h4>
                <div className="ml-4">
                  <h5 className="font-medium text-blue-700 mb-2">Ingredients</h5>
                  <ul className="ml-6 space-y-2 text-slate-700">
                    <li className="flex items-center hover:bg-white/50 p-1 rounded">
                      <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full mr-3"></span>
                      5tbsp cornstarch
                    </li>
                    <li className="flex items-center hover:bg-white/50 p-1 rounded">
                      <span className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mr-3"></span>
                      5tbsp gelatin
                    </li>
                    <li className="flex items-center hover:bg-white/50 p-1 rounded">
                      <span className="w-3 h-3 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full mr-3"></span>
                      5 tsp glycerin
                    </li>
                    <li className="flex items-center hover:bg-white/50 p-1 rounded">
                      <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full mr-3"></span>
                      2 half tsp white vinegar
                    </li>
                    <li className="flex items-center hover:bg-white/50 p-1 rounded">
                      <span className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mr-3"></span>
                      6tbsp water
                    </li>
                    <li className="flex items-center hover:bg-white/50 p-1 rounded">
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
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-4 border-l-4 border-cyan-400 shadow-sm">
                <h4 className="font-semibold text-cyan-800 mb-3 flex items-center">
                  📋 Recipe
                </h4>
                <div className="ml-4">
                  <h5 className="font-medium text-blue-700 mb-2">Elements</h5>
                  <ul className="ml-6 space-y-2 text-slate-700">
                    <li className="flex items-center hover:bg-white/50 p-1 rounded">
                      <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3"></span>
                      100ml water
                    </li>
                    <li className="flex items-center hover:bg-white/50 p-1 rounded">
                      <span className="w-3 h-3 bg-gradient-to-r from-blue-400 to-teal-500 rounded-full mr-3"></span>
                      6g of gelatin
                    </li>
                    <li className="flex items-center hover:bg-white/50 p-1 rounded">
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
              <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-6 border-l-4 border-blue-400 shadow-sm text-center">
                <div className="text-4xl mb-3">🌊</div>
                <p className="text-blue-600 font-medium">Diving deeper into ocean mysteries...</p>
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