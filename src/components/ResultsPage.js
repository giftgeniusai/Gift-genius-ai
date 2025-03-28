// src/components/ResultsPage.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GiftCard from './GiftCard';
import giftDatabase from '../data/giftDatabase';
import { getRecommendations } from '../utils/recommendationLogic';

const ResultsPage = ({ formData, onSaveGift, savedGifts }) => {
  const [recommendations, setRecommendations] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to form page if no form data exists
    if (!formData) {
      navigate('/');
      return;
    }
    
    // Get recommendations based on form data
    const recommendedGifts = getRecommendations(giftDatabase, formData);
    setRecommendations(recommendedGifts);
  }, [formData, navigate]);
  
  // Check if a gift is already saved
  const isGiftSaved = (giftName) => {
    return savedGifts.some(gift => gift.name === giftName);
  };
  
  // If no form data, show loading or empty state
  if (!formData) {
    return null; // Will redirect to home
  }
  
  return (
    <div className="results-page">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              Gift Recommendations
            </h2>
            <Link 
              to="/" 
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition duration-300"
            >
              Start Over
            </Link>
          </div>
          
          <div className="bg-gray-100 rounded-lg p-4 mb-6">
            <h3 className="font-medium mb-2">Based on your selections:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
              <div><strong>Age:</strong> {formData.age}</div>
              <div><strong>Gender:</strong> {formData.gender}</div>
              <div><strong>Interest:</strong> {formData.interests}</div>
              <div><strong>Relationship:</strong> {formData.relationship}</div>
              <div><strong>Occasion:</strong> {formData.occasion}</div>
              <div><strong>Budget:</strong> {formData.budget}</div>
            </div>
          </div>
          
          {recommendations.length > 0 ? (
            <div className="gift-grid grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommendations.map((gift, index) => (
                <GiftCard
                  key={index}
                  gift={gift}
                  onSaveGift={onSaveGift}
                  isSaved={isGiftSaved(gift.name)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600">
                No gift recommendations found for your criteria. 
                Please try adjusting your preferences.
              </p>
              <Link 
                to="/" 
                className="inline-block mt-4 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded transition duration-300"
              >
                Adjust Preferences
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
