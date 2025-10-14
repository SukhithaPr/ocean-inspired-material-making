import React from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = React.useState('1st Attempt');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-100 to-teal-200 p-6 relative">
      {/* Enhanced ocean background with particles and waves */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Multi-layered wave animations */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-300/30 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-cyan-400/20 to-transparent animate-pulse" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/4 left-0 w-full h-16 bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent opacity-60 animate-ping" style={{ animationDuration: '5s' }}></div>
        <div className="absolute top-1/3 left-0 w-full h-8 bg-gradient-to-r from-transparent via-teal-300/30 to-transparent opacity-80 animate-ping" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>

        {/* Enhanced Ocean particles - small floating elements */}
        <div className="absolute top-1/6 left-1/5 w-1 h-1 bg-cyan-400/50 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
        <div className="absolute top-1/3 left-3/4 w-1 h-1 bg-blue-400/40 rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-1/6 w-1 h-1 bg-teal-400/60 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-4/5 w-1 h-1 bg-cyan-300/50 rounded-full animate-ping" style={{ animationDuration: '3.5s', animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-2/3 w-1 h-1 bg-blue-300/40 rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: '1.5s' }}></div>

        {/* Additional micro particles */}
        <div className="absolute top-1/8 left-1/8 w-0.5 h-0.5 bg-cyan-500/40 rounded-full animate-pulse" style={{ animationDuration: '1.5s' }}></div>
        <div className="absolute top-5/6 left-1/2 w-0.5 h-0.5 bg-blue-500/35 rounded-full animate-pulse" style={{ animationDuration: '2.2s', animationDelay: '0.8s' }}></div>
        <div className="absolute top-1/4 left-3/5 w-0.5 h-0.5 bg-teal-500/45 rounded-full animate-pulse" style={{ animationDuration: '1.8s', animationDelay: '1.2s' }}></div>
        <div className="absolute top-3/5 left-1/8 w-0.5 h-0.5 bg-cyan-400/50 rounded-full animate-pulse" style={{ animationDuration: '2.8s', animationDelay: '0.3s' }}></div>
        <div className="absolute top-1/7 left-4/5 w-0.5 h-0.5 bg-blue-400/35 rounded-full animate-pulse" style={{ animationDuration: '2.1s', animationDelay: '1.8s' }}></div>
        <div className="absolute top-4/5 left-3/4 w-0.5 h-0.5 bg-teal-400/40 rounded-full animate-pulse" style={{ animationDuration: '1.9s', animationDelay: '0.6s' }}></div>

        {/* Medium floating particles */}
        <div className="absolute top-1/7 left-2/5 w-1.5 h-1.5 bg-cyan-300/35 rounded-full animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '0.2s' }}></div>
        <div className="absolute top-3/7 left-1/7 w-1.5 h-1.5 bg-blue-300/40 rounded-full animate-bounce" style={{ animationDuration: '5.2s', animationDelay: '1.3s' }}></div>
        <div className="absolute top-5/7 left-4/6 w-1.5 h-1.5 bg-teal-300/30 rounded-full animate-bounce" style={{ animationDuration: '3.8s', animationDelay: '2.1s' }}></div>
        <div className="absolute top-6/7 left-1/3 w-1.5 h-1.5 bg-cyan-400/35 rounded-full animate-bounce" style={{ animationDuration: '4.8s', animationDelay: '0.9s' }}></div>

        {/* Larger floating bubbles with varied sizes */}
        <div className="absolute top-1/5 left-1/4 w-6 h-6 bg-cyan-300/30 rounded-full animate-bounce" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-1/2 right-1/5 w-4 h-4 bg-blue-300/35 rounded-full animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-teal-300/40 rounded-full animate-bounce" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-8 h-8 bg-cyan-200/25 rounded-full animate-bounce" style={{ animationDuration: '7s', animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/6 right-1/3 w-2 h-2 bg-blue-400/45 rounded-full animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1.5s' }}></div>

        {/* Floating organic shapes */}
        <div className="absolute top-1/3 left-1/12 w-2 h-3 bg-green-400/25 rounded-full animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
        <div className="absolute top-4/5 left-5/6 w-1 h-2 bg-teal-500/30 rounded-full animate-pulse" style={{ animationDuration: '4.2s', animationDelay: '2.5s' }}></div>
        <div className="absolute top-1/8 left-2/3 w-3 h-1 bg-cyan-400/20 rounded-full animate-pulse" style={{ animationDuration: '6.5s', animationDelay: '0.7s' }}></div>

        {/* Ocean current lines */}
        <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-2/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-300/15 to-transparent animate-pulse" style={{ animationDuration: '10s', animationDelay: '3s' }}></div>

        {/* Enhanced seaweed-like floating elements */}
        <div className="absolute bottom-12 left-8 w-0.5 h-20 bg-gradient-to-t from-green-500/40 to-transparent animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-8 left-16 w-0.5 h-16 bg-gradient-to-t from-teal-500/35 to-transparent animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 right-20 w-0.5 h-24 bg-gradient-to-t from-green-400/30 to-transparent animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-6 right-32 w-0.5 h-18 bg-gradient-to-t from-teal-400/40 to-transparent animate-pulse" style={{ animationDuration: '4.5s', animationDelay: '0.5s' }}></div>

        {/* Distant ocean depth gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-transparent via-blue-200/10 to-cyan-300/20 opacity-30"></div>
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
                activeTab === '1st Attempt' ? 'bg-teal-500 text-white' : 'text-teal-700 hover:text-teal-900 hover:bg-teal-100'
              }`}
              onClick={() => handleTabClick('1st Attempt')}
            >
              1st Attempt
            </button>
            <button
              className={`flex-1 py-4 px-6 text-sm font-medium transition-all duration-200 ${
                activeTab === '2nd Attempt' ? 'bg-teal-500 text-white' : 'text-teal-700 hover:text-teal-900 hover:bg-teal-100'
              }`}
              onClick={() => handleTabClick('2nd Attempt')}
            >
              2nd Attempt
            </button>
            <button
              className={`flex-1 py-4 px-6 text-sm font-medium transition-all duration-200 ${
                activeTab === '3rd Attempt' ? 'bg-teal-500 text-white' : 'text-teal-700 hover:text-teal-900 hover:bg-teal-100'
              }`}
              onClick={() => handleTabClick('3rd Attempt')}
            >
              3rd Attempt
            </button>
          </div>

          <div className="p-6 bg-gradient-to-br from-slate-100/60 to-cyan-100/40">
            <div id="1st Attempt" className={`${activeTab === '1st Attempt' ? 'block' : 'hidden'}`}>
              <div className="bg-gradient-to-r from-teal-100/70 to-cyan-100/70 rounded-lg p-4 border-l-4 border-teal-400 shadow-sm backdrop-blur-sm">
                <h4 className="font-semibold text-teal-800 mb-3 flex items-center">Recipe</h4>
                <div className="ml-4">
                  <h5 className="font-medium text-blue-700 mb-2">Ingredients</h5>
                  <ul className="ml-6 space-y-2 text-slate-700">
                    <li className="flex items-center hover:bg-white/30 p-1 rounded">
                      <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full mr-3"></span>
                      5 tbsp cornstarch
                    </li>
                    <li className="flex items-center hover:bg-white/30 p-1 rounded">
                      <span className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mr-3"></span>
                      5 tbsp gelatin
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
                      6 tbsp water
                    </li>
                    <li className="flex items-center hover:bg-white/30 p-1 rounded">
                      <span className="w-3 h-3 bg-gradient-to-r from-green-400 to-teal-500 rounded-full mr-3"></span>
                      1 cup of seaweed (half-dried seaweed)
                    </li>
                  </ul>
                  <h5 className="font-medium text-blue-700 mt-4 mb-2">Process</h5>
                  <p className="ml-6 text-slate-700">First add the water and put all the ingredients in necessary measurements and cooked it until it thickened and cooled and then poured it to a tray by laying an oil paper kept it for 3 days in room temperature.</p>
                  <h5 className="font-medium text-blue-700 mt-4 mb-2">Results</h5>
                  <p className="ml-6 text-slate-700">The mixer was thicker and successful but it wasn't either water resistant or heat resistant. After leaving it in the sun it melted. Therefore, went to the next attempt to implement a good product. Also, this was a half successful attempt.</p>
                </div>
              </div>
            </div>

            <div id="2nd Attempt" className={`${activeTab === '2nd Attempt' ? 'block' : 'hidden'}`}>
              <div className="bg-gradient-to-r from-blue-100/70 to-teal-100/70 rounded-lg p-4 border-l-4 border-cyan-400 shadow-sm backdrop-blur-sm">
                <h4 className="font-semibold text-cyan-800 mb-3 flex items-center">Recipe</h4>
                <div className="ml-4">
                  <h5 className="font-medium text-blue-700 mb-2">Ingredients</h5>
                  <ul className="ml-6 space-y-2 text-slate-700">
                    <li className="flex items-center hover:bg-white/30 p-1 rounded">
                      <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3"></span>
                      100 ml water
                    </li>
                    <li className="flex items-center hover:bg-white/30 p-1 rounded">
                      <span className="w-3 h-3 bg-gradient-to-r from-blue-400 to-teal-500 rounded-full mr-3"></span>
                      6 g of gelatin
                    </li>
                    <li className="flex items-center hover:bg-white/30 p-1 rounded">
                      <span className="w-3 h-3 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full mr-3"></span>
                      6 g of glycerin
                    </li>
                    <li className="flex items-center hover:bg-white/30 p-1 rounded">
                      <span className="w-3 h-3 bg-gradient-to-r from-green-400 to-teal-500 rounded-full mr-3"></span>
                      6 g of raw seaweed
                    </li>
                  </ul>
                  <h5 className="font-medium text-blue-700 mt-4 mb-2">Process</h5>
                  <p className="ml-6 text-slate-700">Firstly take these ingredients accordingly the measurement and when started after pouring the mixture after it started thickened then to children but this mixture was not thickened and was not smooth like texture this ingredients was not started thickened in the room temperature after 2 days in gradients then after kept it for 2 days in room temperature.</p>
                  <h5 className="font-medium text-blue-700 mt-4 mb-2">Results</h5>
                  <p className="ml-6 text-slate-700">This 2nd Attempt was a different one from the first attempt this experiments results came out watery and not okay, the texture was watery it didn't thickened in the room temperature therefore was started to smell so badly too. Therefore restarted the next attempt with new changed ingredients and measurements.</p>
                </div>
              </div>
            </div>

            <div id="3rd Attempt" className={`${activeTab === '3rd Attempt' ? 'block' : 'hidden'}`}>
              <div className="bg-gradient-to-r from-slate-100/70 to-blue-100/70 rounded-lg p-4 border-l-4 border-blue-400 shadow-sm backdrop-blur-sm">
                <h4 className="font-semibold text-blue-800 mb-3 flex items-center">Recipe</h4>
                <div className="ml-4">
                  <h5 className="font-medium text-blue-700 mb-2">Ingredients</h5>
                  <ul className="ml-6 space-y-2 text-slate-700">
                    <li className="flex items-center hover:bg-white/30 p-1 rounded">
                      <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3"></span>
                      20 g cornstarch
                    </li>
                    <li className="flex items-center hover:bg-white/30 p-1 rounded">
                      <span className="w-3 h-3 bg-gradient-to-r from-blue-400 to-teal-500 rounded-full mr-3"></span>
                      40 ml glycerin
                    </li>
                    <li className="flex items-center hover:bg-white/30 p-1 rounded">
                      <span className="w-3 h-3 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full mr-3"></span>
                      10 ml water
                    </li>
                    <li className="flex items-center hover:bg-white/30 p-1 rounded">
                      <span className="w-3 h-3 bg-gradient-to-r from-green-400 to-teal-500 rounded-full mr-3"></span>
                      60 ml natural latex (rubber milk)
                    </li>
                    <li className="flex items-center hover:bg-white/30 p-1 rounded">
                      <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full mr-3"></span>
                      5 ml vinegar
                    </li>
                  </ul>
                  <h5 className="font-medium text-blue-700 mt-4 mb-2">Process</h5>
                  <p className="ml-6 text-slate-700">First made the seaweed mixer by mixing 30 g seaweed powder in to the 1 L of water and then let it sit for 15-30 minutes. After heating it gently and stirring until dissolve. Then adding cornstarch and glycerin to the mixer. Then mixing cornstarch with half bit of water to make the mixer slurry. Then stir in 40 ml glycerin and simmering for about 15 minutes while stirring it constantly. Then incorporating latex removing it from the direct heat and let it cool slightly and slowly stirring in 60ml of liquid latex. Mixing it thoroughly until smooth. Then pouring it into the tray and keeping it in room temperature.</p>
                  <h5 className="font-medium text-blue-700 mt-4 mb-2">Results</h5>
                  <p className="ml-6 text-slate-700">This 3rd attempt was successful only the rubber part felt properly but it didn't set perfectly. Almost and the edges were new texture it was set perfectly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;