// src/components/SavedGiftsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import GiftCard from './GiftCard';

const SavedGiftsPage = ({ savedGifts, onRemoveGift }) => {
  return (
    <div className="saved-gifts-page">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              Saved Gift Ideas
            </h2>
            <Link 
              to="/" 
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition duration-300"
            >
              Find More Gifts
            </Link>
          </div>
          
          {savedGifts.length > 0 ? (
            <div className="gift-grid grid grid-cols-1 md:grid-cols-2 gap-6">
              {savedGifts.map((gift, index) => (
                <GiftCard
                  key={index}
                  gift={gift}
                  onRemoveGift={onRemoveGift}
                  showRemoveButton={true}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <div className="text-5xl mb-4" role="img" aria-label="Empty">
                🎁
              </div>
              <h3 className="text-xl font-medium mb-2">
                No saved gifts yet
              </h3>
              <p className="text-gray-600 mb-6">
                Find perfect gifts and save them for later reference
              </p>
              <Link 
                to="/" 
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded transition duration-300"
              >
                Start Finding Gifts
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SavedGiftsPage;
