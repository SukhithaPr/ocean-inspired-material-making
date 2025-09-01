import './App.css'
import React from 'react'

function App() {

  const [activeTab, setActiveTab] = React.useState('London');

  const handleTabClick = (cityName) => {
    setActiveTab(cityName);
  };

  return (
    <div>

      <div>
        <h1>Ocean Inspired Material Making</h1>
        <h2>Seaweed Based Bio Plastic Making</h2>
        <h3>Experimentation</h3>
      </div>

      <div className="tab">
        <button
          className={`tablinks${activeTab === '1st Attempt' ? ' active' : ''}`}
          onClick={() => handleTabClick('1st Attempt')}
        >
          1st Attempt
        </button>
        <button
          className={`tablinks${activeTab === '2nd Attempt' ? ' active' : ''}`}
          onClick={() => handleTabClick('2nd Attempt')}
        >
          2nd Attempt
        </button>
        <button
          className={`tablinks${activeTab === '3rd Attempt' ? ' active' : ''}`}
          onClick={() => handleTabClick('3rd Attempt')}
        >
          3rd Attempt
        </button>
      </div>

      <div
        id="1st Attempt"
        className="tabcontent"
        style={{ display: activeTab === '1st Attempt' ? 'block' : 'none' }}
      >
        <h3>1st Attempt</h3>
        <ul>
          <li>5tbsp cornstarch</li>
          <li>5tbsp gelatin</li>
          <li>5 tsp glycerin</li>
          <li>2 half tsp white vinegar</li>
          <li>5tbsp cornstarch6tbsp water</li>
          <li>1 cup of seaweed</li>
        </ul>
      </div>

      <div
        id="2nd Attempt"
        className="tabcontent"
        style={{ display: activeTab === '2nd Attempt' ? 'block' : 'none' }}
      >
        <h3>2nd Attempt</h3>
        <ul>
          <li>100ml water</li>
          <li>6g  of gelatin</li>
          <li>6g of glycerin</li>
        </ul>
      </div>

      <div
        id="3rd Attempt"
        className="tabcontent"
        style={{ display: activeTab === '3rd Attempt' ? 'block' : 'none' }}
      >
        <h3>3rd Attempt</h3>
        <ul>
          <li></li>
        </ul>
      </div>

    </div>
  );
}

export default App