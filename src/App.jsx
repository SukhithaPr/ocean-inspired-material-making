import React from 'react';
import './App.css';

function App() {
    const [activeTab, setActiveTab] = React.useState('1st Attempt');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="min-h-screen bg-white p-4 sm:p-6">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
                        Ocean Inspired Material Making
                    </h1>
                    <h2 className="text-lg sm:text-xl text-gray-600 mb-1">
                        Seaweed Based Bio Plastic Making
                    </h2>
                    <h3 className="text-base sm:text-lg text-gray-500">
                        Experiments
                    </h3>
                </div>

                <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex border-b border-gray-200 overflow-x-auto">
                        <button
                            className={`flex-1 min-w-0 py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 transition-colors duration-200 ${
                                activeTab === '1st Attempt' ? 'bg-white border-b-2 border-teal-500 text-teal-600' : 'hover:bg-gray-100'
                            }`}
                            onClick={() => handleTabClick('1st Attempt')}
                        >
                            1st Attempt
                        </button>
                        <button
                            className={`flex-1 min-w-0 py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 transition-colors duration-200 ${
                                activeTab === '2nd Attempt' ? 'bg-white border-b-2 border-teal-500 text-teal-600' : 'hover:bg-gray-100'
                            }`}
                            onClick={() => handleTabClick('2nd Attempt')}
                        >
                            2nd Attempt
                        </button>
                        <button
                            className={`flex-1 min-w-0 py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 transition-colors duration-200 ${
                                activeTab === '3rd Attempt' ? 'bg-white border-b-2 border-teal-500 text-teal-600' : 'hover:bg-gray-100'
                            }`}
                            onClick={() => handleTabClick('3rd Attempt')}
                        >
                            3rd Attempt
                        </button>
                        <button
                            className={`flex-1 min-w-0 py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 transition-colors duration-200 ${
                                activeTab === '4th Attempt' ? 'bg-white border-b-2 border-teal-500 text-teal-600' : 'hover:bg-gray-100'
                            }`}
                            onClick={() => handleTabClick('4th Attempt')}
                        >
                            4th Attempt
                        </button>
                        <button
                            className={`flex-1 min-w-0 py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 transition-colors duration-200 ${
                                activeTab === '5th Attempt' ? 'bg-white border-b-2 border-teal-500 text-teal-600' : 'hover:bg-gray-100'
                            }`}
                            onClick={() => handleTabClick('5th Attempt')}
                        >
                            5th Attempt
                        </button>
                        <button
                            className={`flex-1 min-w-0 py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 transition-colors duration-200 ${
                                activeTab === '6th Attempt' ? 'bg-white border-b-2 border-teal-500 text-teal-600' : 'hover:bg-gray-100'
                            }`}
                            onClick={() => handleTabClick('6th Attempt')}
                        >
                            6th Attempt
                        </button>
                    </div>

                    <div className="p-4 sm:p-6">
                        <div id="1st Attempt" className={`${activeTab === '1st Attempt' ? 'block' : 'hidden'}`}>
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-800">Recipe</h4>
                                <div>
                                    <h5 className="font-medium text-gray-700">Ingredients</h5>
                                    <ul className="ml-6 space-y-2 text-gray-600 list-disc">
                                        <li>5 tbsp cornstarch</li>
                                        <li>5 tbsp gelatin</li>
                                        <li>5 tsp glycerin</li>
                                        <li>2½ tsp white vinegar</li>
                                        <li>6 tbsp water</li>
                                        <li>1 cup of seaweed (half-dried seaweed)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-medium text-gray-700">Process</h5>
                                    <ol className="ml-6 space-y-2 text-gray-600 list-decimal">
                                        <li className="flex items-center">
                                            <span className="mr-2">Add the water and combine all ingredients in the necessary measurements.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Cook the mixture until it thickens into a gel.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Pour the mixture into a tray lined with oil paper.</span>
                                            <img src="/src/assets/1st-attempt/1.jpg" alt="Step 1" className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm" />
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Cover the mixture with another oil paper on top.</span>
                                            <img src="/src/assets/1st-attempt/2.jpg" alt="Step 2" className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm" />
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Let the mixture set for 3 days at room temperature.</span>
                                            <img src="/src/assets/1st-attempt/3.jpg" alt="Step 3" className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm" />
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Place the mixture in the sun to test if it melts (it melted quickly).</span>
                                            <img src="/src/assets/1st-attempt/4.jpg" alt="Step 4" className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm" />
                                        </li>
                                    </ol>
                                </div>
                                <div>
                                    <h5 className="font-medium text-gray-700">Results</h5>
                                    <p className="text-gray-600">
                                        The mixture thickened and was successful but was neither water-resistant nor heat-resistant. After exposure to the sun, it melted quickly. Therefore, I proceeded to the next attempt to develop a better product. This was a partially successful attempt.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div id="2nd Attempt" className={`${activeTab === '2nd Attempt' ? 'block' : 'hidden'}`}>
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-800">Recipe</h4>
                                <div>
                                    <h5 className="font-medium text-gray-700">Ingredients</h5>
                                    <ul className="ml-6 space-y-2 text-gray-600 list-disc">
                                        <li>100 ml water</li>
                                        <li>6 g gelatin</li>
                                        <li>6 g glycerin</li>
                                        <li>6 g raw seaweed</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-medium text-gray-700">Process</h5>
                                    <ol className="ml-6 space-y-2 text-gray-600 list-decimal">
                                        <li className="flex items-center">
                                            <span className="mr-2">Add the ingredients according to the measurements.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Cook the mixture as in the previous attempt until it begins to thicken.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Remove the mixture (it didn’t thicken fully and had a glass-like texture).</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Pour the mixture into a paper-lined tray.</span>
                                            <img src="/src/assets/2nd-attempt/1.jpg" alt="Step 1" className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm" />
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Let the mixture set for 3 days at room temperature.</span>
                                            <img src="/src/assets/2nd-attempt/2.jpg" alt="Step 2" className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm" />
                                        </li>
                                    </ol>
                                </div>
                                <div>
                                    <h5 className="font-medium text-gray-700">Results</h5>
                                    <p className="text-gray-600">
                                        This 2nd attempt differed from the 1st. The experiment’s results were unsatisfactory; the texture was watery and didn’t thicken at room temperature. It also developed a strong odor. Therefore, I restarted with new ingredients and measurements for the next attempt.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div id="3rd Attempt" className={`${activeTab === '3rd Attempt' ? 'block' : 'hidden'}`}>
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-800">Recipe</h4>
                                <div>
                                    <h5 className="font-medium text-gray-700">Ingredients</h5>
                                    <ul className="ml-6 space-y-2 text-gray-600 list-disc">
                                        <li>20 g cornstarch</li>
                                        <li>40 ml glycerin</li>
                                        <li>10 ml water</li>
                                        <li>60 ml natural latex (rubber milk)</li>
                                        <li>5 ml vinegar</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-medium text-gray-700">Process</h5>
                                    <ol className="ml-6 space-y-2 text-gray-600 list-decimal">
                                        <li className="flex items-center">
                                            <span className="mr-2">Combine 30 g of seaweed powder with 1 L of water and let it sit for 15-30 minutes.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Heat the mixture gently while stirring until the seaweed dissolves.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Add cornstarch and glycerin to the mixture.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Mix cornstarch with a small amount of water to create a slurry.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Stir in 40 ml of glycerin and simmer for 15 minutes, stirring constantly.</span>
                                            <img src="/src/assets/3rd-attempt/2.jpg" alt="Step 2" className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm" />
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Remove from heat, let it cool slightly, and stir in 60 ml of liquid latex until smooth.</span>
                                            <img src="/src/assets/3rd-attempt/3.jpg" alt="Step 3" className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm" />
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Pour the mixture into a tray.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Let it set at room temperature.</span>
                                            <img src="/src/assets/3rd-attempt/4.jpg" alt="Step 4" className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm" />
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Observe the final result.</span>
                                            <img src="/src/assets/3rd-attempt/5.jpg" alt="Step 5" className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm" />
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Check an additional view of the result.</span>
                                            <img src="/src/assets/3rd-attempt/6.jpg" alt="Step 6" className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm" />
                                        </li>
                                    </ol>
                                </div>
                                <div>
                                    <h5 className="font-medium text-gray-700">Results</h5>
                                    <p className="text-gray-600">
                                        This attempt was almost successful but didn’t set properly. Only the edges solidified and had a rubbery texture. Therefore, I proceeded to a new attempt.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div id="4th Attempt" className={`${activeTab === '4th Attempt' ? 'block' : 'hidden'}`}>
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-800">Recipe</h4>
                                <div>
                                    <h5 className="font-medium text-gray-700">Ingredients</h5>
                                    <ul className="ml-6 space-y-2 text-gray-600 list-disc">
                                        <li>100 ml natural latex (rubber milk)</li>
                                        <li>10 ml glycerin</li>
                                        <li>2 ml vinegar</li>
                                        <li>20 ml water</li>
                                        <li>1 tsp calcium chloride (peanut husk ash)</li>
                                        <li>2 tbsp dried crushed seaweed</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-medium text-gray-700">Process</h5>
                                    <ol className="ml-6 space-y-2 text-gray-600 list-decimal">
                                        <li className="flex items-center">
                                            <span className="mr-2">Add all ingredients except the natural latex and mix them together.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Use peanut husk ash as a substitute for calcium chloride to absorb water.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Add dried and crushed seaweed to the mixture.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Cook the mixture and let it cool slightly.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Stir in the natural latex (rubber milk).</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Pour the mixture into a paper-lined tray.</span>
                                            <img src="/src/assets/4th-attempt/1.jpg" alt="Step 1" className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm" />
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Let it dry at room temperature for 3 days.</span>
                                        </li>
                                    </ol>
                                </div>
                                <div>
                                    <h5 className="font-medium text-gray-700">Results</h5>
                                    <p className="text-gray-600">
                                        This mixture yielded different results from the others; it didn’t solidify at all and remained watery even after 3 days. Therefore, I moved on to a new attempt.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div id="5th Attempt" className={`${activeTab === '5th Attempt' ? 'block' : 'hidden'}`}>
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-800">Recipe</h4>
                                <div>
                                    <h5 className="font-medium text-gray-700">Ingredients</h5>
                                    <ul className="ml-6 space-y-2 text-gray-600 list-disc">
                                        <li>5 g Agar-Agar powder</li>
                                        <li>100 ml water</li>
                                        <li>3 ml glycerin</li>
                                        <li>3 g beeswax</li>
                                        <li>1 g calcium chloride (peanut husk ash)</li>
                                        <li>2 g cornstarch</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-medium text-gray-700">Process</h5>
                                    <ol className="ml-6 space-y-2 text-gray-600 list-decimal">
                                        <li className="flex items-center">
                                            <span className="mr-2">Combine 5 g of Agar powder, 3 g of beeswax, 100 ml water, 3 ml glycerin, and 2 g cornstarch.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Cook the mixture while stirring constantly until the beeswax melts and the agar dissolves.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Continue cooking for 15 minutes.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Add peanut husk ash as a substitute for calcium chloride and keep stirring.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Remove the mixture once it is smooth, thick, and has a gel-like texture.</span>
                                            <img src="/src/assets/5th-attempt/1.jpg" alt="Step 1" className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm" />
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Note the beeswax rising to the top while the underneath mixture remains gel-like.</span>
                                            <img src="/src/assets/5th-attempt/2.jpg" alt="Step 2" className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm" />
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Let the mixture set in the same pan for 2 days.</span>
                                            <img src="/src/assets/5th-attempt/3.jpg" alt="Step 3" className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm" />
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Check an additional view of the result.</span>
                                            <img src="/src/assets/5th-attempt/4.jpg" alt="Step 4" className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm" />
                                        </li>
                                    </ol>
                                </div>
                                <div>
                                    <h5 className="font-medium text-gray-700">Results</h5>
                                    <p className="text-gray-600">
                                        The issue was that the beeswax rose to the top and hardened separately. The texture and other qualities were acceptable, but the underneath layer didn’t harden sufficiently. Therefore, I proceeded to a new attempt.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div id="6th Attempt" className={`${activeTab === '6th Attempt' ? 'block' : 'hidden'}`}>
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-800">Recipe</h4>
                                <div>
                                    <h5 className="font-medium text-gray-700">Ingredients</h5>
                                    <ul className="ml-6 space-y-2 text-gray-600 list-disc">
                                        <li>5 g Agar-Agar powder</li>
                                        <li>100 ml water</li>
                                        <li>3 ml glycerin</li>
                                        <li>1 g calcium chloride (peanut husk ash)</li>
                                        <li>2 g cornstarch</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-medium text-gray-700">Process</h5>
                                    <ol className="ml-6 space-y-2 text-gray-600 list-decimal">
                                        <li className="flex items-center">
                                            <span className="mr-2">Combine 5 g of Agar powder, 100 ml water, 3 ml glycerin, and 2 g cornstarch.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Cook the mixture while stirring constantly until the agar dissolves completely.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Continue cooking for 10 minutes.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Add peanut husk ash as a substitute for calcium chloride and keep stirring.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Remove the mixture once it is smooth, thick, and has a gel-like texture.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Pour the mixture into a non-papered tray.</span>
                                            <img src="/src/assets/6th-attempt/1.jpg" alt="Step 1" className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm" />
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Let it set for 2 days.</span>
                                            <img src="/src/assets/6th-attempt/2.jpg" alt="Step 2" className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm" />
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">Remove the hardened mixture from the tray.</span>
                                            <img src="/src/assets/6th-attempt/3.jpg" alt="Step 3" className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm" />
                                        </li>
                                    </ol>
                                </div>
                                <div>
                                    <h5 className="font-medium text-gray-700">Results</h5>
                                    <p className="text-gray-600">
                                        When poured into a large tray, the mixture became thinner and too fragile, causing it to break. However, this was the best attempt overall. It successfully hardened to the desired texture and retained the seaweed-like feel, though the material was slightly present.
                                    </p>
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
