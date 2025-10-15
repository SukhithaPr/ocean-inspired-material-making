import React from 'react';
import './App.css';

function App() {
    const [activeTab, setActiveTab] = React.useState('1st Attempt');
    const [modalImage, setModalImage] = React.useState(null);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const openModal = (imageSrc) => {
        setModalImage(imageSrc);
    };

    const closeModal = () => {
        setModalImage(null);
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
                                    <p className="text-gray-600">
                                        First Added the water and put all the ingredients in necessary measurements and cooked till it thickened till a gel and then poured it to a tray by laying an oil paper kept it for 3 days in room temperature.
                                    </p>
                                    <br />
                                    <ol className="ml-6 space-y-4 text-gray-600 list-decimal">
                                        <li className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                                            <img
                                                src="/1st-attempt/1.jpg"
                                                alt="Step 1"
                                                className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm cursor-pointer"
                                                onClick={() => openModal('/public/1st-attempt/1.jpg')}
                                            />
                                            <span>After pouring the mixture into the tray.</span>
                                        </li>
                                        <li className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                                            <img
                                                src="/1st-attempt/2.jpg"
                                                alt="Step 2"
                                                className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm cursor-pointer"
                                                onClick={() => openModal('/public/1st-attempt/2.jpg')}
                                            />
                                            <span>Covering the mixture with another oil paper on top.</span>
                                        </li>
                                        <li className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                                            <img
                                                src="/1st-attempt/3.jpg"
                                                alt="Step 3"
                                                className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm cursor-pointer"
                                                onClick={() => openModal('/public/1st-attempt/3.jpg')}
                                            />
                                            <span>After the mixture is halfly set.</span>
                                        </li>
                                        <li className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                                            <img
                                                src="/1st-attempt/4.jpg"
                                                alt="Step 4"
                                                className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm cursor-pointer"
                                                onClick={() => openModal('/public/1st-attempt/4.jpg')}
                                            />
                                            <span>Keeping the mixture in the sun to see whether it melts or not. It melted fastly.</span>
                                        </li>
                                    </ol>
                                </div>
                                <div>
                                    <h5 className="font-medium text-gray-700">Results</h5>
                                    <p className="text-gray-600">The mixture was thickened and successful but it wasn’t either water resistant nor heat resistant. After letting it into the sun it melted fast. Therefore, went to the next attempt to implement a good product. So this was a halfly successful attempt.</p>
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
                                    <p className="text-gray-600">First added these ingredients according to the measurements and then started to cook like the previous attempt and then took the mixture after it started to thicken but this mixture wasn’t too thick. This had a glass-like texture. This was a new attempt with new measurements and ingredients. Then after poured it into the papered tray. Kept it for 3 days in room temperature.</p>
                                    <br />
                                    <ol className="ml-6 space-y-4 text-gray-600 list-decimal">
                                        <li className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                                            <img
                                                src="/2nd-attempt/1.jpg"
                                                alt="Step 1"
                                                className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm cursor-pointer"
                                                onClick={() => openModal('/public/2nd-attempt/1.jpg')}
                                            />
                                            <span>The mixture after pouring it to the tray.</span>
                                        </li>
                                        <li className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                                            <img
                                                src="/2nd-attempt/2.jpg"
                                                alt="Step 2"
                                                className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm cursor-pointer"
                                                onClick={() => openModal('/public/2nd-attempt/2.jpg')}
                                            />
                                            <span>The mixture after 3 days.</span>
                                        </li>
                                    </ol>
                                </div>
                                <div>
                                    <h5 className="font-medium text-gray-700">Results</h5>
                                    <p className="text-gray-600">This 2nd attempt was a different one from the 1st attempt. This experiment's results came out not okay. The texture was watery and it didn’t thicken in room temperature. This started to smell so badly also. Therefore, restarted the next attempt with new changed ingredients and measurements.</p>
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
                                    <p className="text-gray-600">First made the seaweed mixture by mixing 1L of water and then let it sit for 15-30 minutes. After heating it gently and stirring until dissolved. Then adding cornstarch and glycerin to the mixture. Then incorporating latex, removing it from the direct heat and letting it cool slightly and slowly stirring in 60 ml of liquid latex. Mixing it thoroughly until smooth. Then pouring it into the tray and keeping it in room temperature.</p>
                                    <br />
                                    <ol className="ml-6 space-y-4 text-gray-600 list-decimal">
                                        <li className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                                            <img
                                                src="/3rd-attempt/1.jpg"
                                                alt="Step 1"
                                                className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm cursor-pointer"
                                                onClick={() => openModal('/public/3rd-attempt/1.jpg')}
                                            />
                                            <span>The Rubber milk.</span>
                                        </li>
                                        <li className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                                            <img
                                                src="/3rd-attempt/2.jpg"
                                                alt="Step 2"
                                                className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm cursor-pointer"
                                                onClick={() => openModal('/public/3rd-attempt/2.jpg')}
                                            />
                                            <span>While the mixture is cooking.</span>
                                        </li>
                                        <li className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                                            <img
                                                src="/3rd-attempt/3.jpg"
                                                alt="Step 3"
                                                className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm cursor-pointer"
                                                onClick={() => openModal('/public/3rd-attempt/3.jpg')}
                                            />
                                            <span>After adding the Rubber milk.</span>
                                        </li>
                                        <li className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                                            <img
                                                src="/3rd-attempt/4.jpg"
                                                alt="Step 4"
                                                className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm cursor-pointer"
                                                onClick={() => openModal('/public/3rd-attempt/4.jpg')}
                                            />
                                            <span>Let it set at room temperature.</span>
                                        </li>
                                        <li className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                                            <img
                                                src="/3rd-attempt/5.jpg"
                                                alt="Step 5"
                                                className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm cursor-pointer"
                                                onClick={() => openModal('/public/3rd-attempt/5.jpg')}
                                            />
                                            <span>The final result.</span>
                                        </li>
                                        <li className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                                            <img
                                                src="/3rd-attempt/6.jpg"
                                                alt="Step 6"
                                                className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm cursor-pointer"
                                                onClick={() => openModal('/public/3rd-attempt/6.jpg')}
                                            />
                                            <span>Check an additional view of the result.</span>
                                        </li>
                                    </ol>
                                </div>
                                <div>
                                    <h5 className="font-medium text-gray-700">Results</h5>
                                    <p className="text-gray-600">This attempt was almost successful but it didn't set properly, only the edges were fixed and felt like rubber texture. Therefore had to go for a new attempt again.</p>
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
                                    <p className="text-gray-600">For this process first added the other ingredients instead of natural latex and then mixed them together. With adding peanut husks ash as calcium chloride (for the water absorbance). For this attempt the special thing was adding the seaweeds dried and crushed with the grinder. Then as the other attempt added the rubber milk after the mixture was cooked and cooled down a little and then poured it into a papered tray and let it dry in room temperature for 3 days.</p>
                                    <br />
                                    <ol className="ml-6 space-y-4 text-gray-600 list-decimal">
                                        <li className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                                            <img
                                                src="/4th-attempt/1.jpg"
                                                alt="Step 1"
                                                className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm cursor-pointer"
                                                onClick={() => openModal('/public/4th-attempt/1.jpg')}
                                            />
                                            <span>The mixture after pouring it to the tray (This didn’t set, this was same after 3 days also).</span>
                                        </li>
                                    </ol>
                                </div>
                                <div>
                                    <h5 className="font-medium text-gray-700">Results</h5>
                                    <p className="text-gray-600">This mixture had different results than the other ones, this didn’t fix at all, it was watery even after 3 days. Therefore, went ahead to another new attempt.</p>
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
                                    <p className="text-gray-600">Prepared the base using 5g of Agar powder, 3g of beeswax, 100ml water, 3ml glycerin and adding 2g cornstarch for strengthening. Putting these all together and cooking it while stirring constantly, making sure that beeswax is fully melted and the agar is fully dissolved, carrying out this process for 15 minutes. Then adding the peanut husks ash instead of calcium chloride then continue stirring the mixture. Taking it out after it’s smooth, thick and when it became gel-like texture. Then keeping it for 2 days for setting in the same pan it was cooked.</p>
                                    <br />
                                    <ol className="ml-6 space-y-4 text-gray-600 list-decimal">
                                        <li className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                                            <img
                                                src="/5th-attempt/1.jpg"
                                                alt="Step 1"
                                                className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm cursor-pointer"
                                                onClick={() => openModal('/public/5th-attempt/1.jpg')}
                                            />
                                            <span>The mixture after cooked.</span>
                                        </li>
                                        <li className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                                            <img
                                                src="/5th-attempt/2.jpg"
                                                alt="Step 2"
                                                className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm cursor-pointer"
                                                onClick={() => openModal('/public/5th-attempt/2.jpg')}
                                            />
                                            <span>The beeswax has come on top, the underneath mixture was like jelly.</span>
                                        </li>
                                        <li className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                                            <img
                                                src="/5th-attempt/3.jpg"
                                                alt="Step 3"
                                                className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm cursor-pointer"
                                                onClick={() => openModal('/public/5th-attempt/3.jpg')}
                                            />
                                            <span>The finished product after 2 days.</span>
                                        </li>
                                        <li className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                                            <img
                                                src="/5th-attempt/4.jpg"
                                                alt="Step 4"
                                                className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm cursor-pointer"
                                                onClick={() => openModal('/public/5th-attempt/4.jpg')}
                                            />
                                            <span>Check an additional view of the result.</span>
                                        </li>
                                    </ol>
                                </div>
                                <div>
                                    <h5 className="font-medium text-gray-700">Results</h5>
                                    <p className="text-gray-600">The issue here was the beeswax, it came on top and hardened separately and other qualities the texture and all was okay. But the underneath layer didn’t harden that much. Therefore went to another new attempt again.</p>
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
                                    <p className="text-gray-600">Prepared the base using 5g of Agar powder, 100ml water, 3ml glycerin and adding 2g cornstarch for strengthening. Putting these all together and cooking it while stirring constantly, making sure the agar is fully dissolved. Carrying out this process for 10 minutes and then adding the peanut husks ash instead of calcium chloride then continue stirring the mixture. Taking it out after it’s smooth, thick and when it became gel-like texture. Then pouring it into a non-papered tray keeping it for 2 days.</p>
                                    <br />
                                    <ol className="ml-6 space-y-4 text-gray-600 list-decimal">
                                        <li className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                                            <img
                                                src="/6th-attempt/1.jpg"
                                                alt="Step 1"
                                                className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm cursor-pointer"
                                                onClick={() => openModal('/public/6th-attempt/1.jpg')}
                                            />
                                            <span>After the mixture is poured to the tray.</span>
                                        </li>
                                        <li className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                                            <img
                                                src="/6th-attempt/2.jpg"
                                                alt="Step 2"
                                                className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm cursor-pointer"
                                                onClick={() => openModal('/public/6th-attempt/2.jpg')}
                                            />
                                            <span>After 2 days the mixture was fully hardened.</span>
                                        </li>
                                        <li className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                                            <img
                                                src="/6th-attempt/3.jpg"
                                                alt="Step 3"
                                                className="w-20 sm:w-24 md:w-32 h-auto rounded shadow-sm cursor-pointer"
                                                onClick={() => openModal('/public/6th-attempt/3.jpg')}
                                            />
                                            <span>The mixture after taking out of the tray.</span>
                                        </li>
                                    </ol>
                                </div>
                                <div>
                                    <h5 className="font-medium text-gray-700">Results</h5>
                                    <p className="text-gray-600">As I poured it to a huge tray the mixture became thinner, therefore it was too fragile, therefore, it broke. But this was the best attempt from all, this was successful, this was hardened into the appropriate texture and it had the qualities I wanted for the feel of the seaweeds through the material was also there slightly.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {modalImage && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                        onClick={closeModal}
                    >
                        <div className="relative bg-white p-4 rounded-lg max-w-3xl w-full">
                            <button
                                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl font-bold"
                                onClick={closeModal}
                            >
                                &times;
                            </button>
                            <img
                                src={modalImage}
                                alt="Enlarged view"
                                className="w-full h-auto max-h-[80vh] object-contain"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;