import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Link as ScrollLink, Element } from 'react-scroll';
import './App.css';

const mapContainerStyle = {
  height: '400px',
  width: '100%'
};

const saleLocation = {
  lat: 40.6770,
  lng: -73.9969
};

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Stoop Sale</h1>
        <nav>
          <ScrollLink to="sale-info" smooth={true} duration={500}>
            Sale Information
          </ScrollLink>
          <ScrollLink to="item-list" smooth={true} duration={500}>
            Items for Sale
          </ScrollLink>
          <ScrollLink to="map" smooth={true} duration={500}>
            Sale Location
          </ScrollLink>
        </nav>
      </header>
      <main>
        <Element name="sale-info" className="element">
          <section className="sale-info">
            <h2>Sale Information</h2>
            <p>Join us for a community stoop sale! Find great deals and meet your neighbors.</p>
            <p>Date: July 12, 2024</p>
            <p>Time: 9 AM - 3 PM</p>
          </section>
        </Element>
        <Element name="item-list" className="element">
          <section className="item-list">
            <h2>Items for Sale</h2>
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="Add a new item"
            />
            <button onClick={addItem}>Add Item</button>
            <ul>
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        </Element>
        <Element name="map" className="element">
          <section className="map">
            <h2>Sale Location</h2>
            <LoadScript googleMapsApiKey="AIzaSyD_nW9NQcE0h9LOS8uABeksL3fGSoV0PIE">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={saleLocation}
                zoom={15}
              >
                <Marker position={saleLocation} />
              </GoogleMap>
            </LoadScript>
          </section>
        </Element>
      </main>
      <footer>
        <p>&copy; 2024 Stoop Sale</p>
      </footer>
    </div>
  );
}

export default App;
