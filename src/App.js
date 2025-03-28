// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormPage from './components/FormPage';
import ResultsPage from './components/ResultsPage';
import SavedGiftsPage from './components/SavedGiftsPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  // State to store user form data
  const [formData, setFormData] = useState(null);
  
  // State to store saved gifts
  const [savedGifts, setSavedGifts] = useState([]);
  
  // Load saved gifts from localStorage on initial render
  useEffect(() => {
    const storedGifts = localStorage.getItem('savedGifts');
    if (storedGifts) {
      setSavedGifts(JSON.parse(storedGifts));
    }
  }, []);
  
  // Save gifts to localStorage whenever savedGifts changes
  useEffect(() => {
    localStorage.setItem('savedGifts', JSON.stringify(savedGifts));
  }, [savedGifts]);
  
  // Function to handle form submission
  const handleFormSubmit = (data) => {
    setFormData(data);
  };
  
  // Function to handle saving a gift
  const handleSaveGift = (gift) => {
    // Check if gift is already saved
    if (!savedGifts.some(savedGift => savedGift.name === gift.name)) {
      setSavedGifts([...savedGifts, gift]);
    }
  };
  
  // Function to handle removing a saved gift
  const handleRemoveGift = (giftName) => {
    setSavedGifts(savedGifts.filter(gift => gift.name !== giftName));
  };
  
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={<FormPage onSubmit={handleFormSubmit} />} 
            />
            <Route 
              path="/results" 
              element={
                <ResultsPage 
                  formData={formData} 
                  onSaveGift={handleSaveGift} 
                  savedGifts={savedGifts}
                />
              } 
            />
            <Route 
              path="/saved" 
              element={
                <SavedGiftsPage 
                  savedGifts={savedGifts} 
                  onRemoveGift={handleRemoveGift} 
                />
              } 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
