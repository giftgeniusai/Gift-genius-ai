// src/components/GiftCard.js
import React from 'react';

const GiftCard = ({ gift, onSaveGift, onRemoveGift, isSaved, showRemoveButton = false }) => {
  // Define category icons
  const categoryIcons = {
    Tech: '💻',
    Fashion: '👕',
    Home: '🏠',
    Hobbies: '🎨',
    Experiences: '🎭',
    Sports: '⚽'
  };

  // Get icon for gift category
  const categoryIcon = categoryIcons[gift.category] || '🎁';
  
  return (
    <div className="gift-card bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="p-4 border-b">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold flex items-center">
            <span className="category-icon mr-2" role="img" aria-label={gift.category}>
              {categoryIcon}
            </span>
            {gift.name}
          </h3>
          <span className="price font-semibold text-green-600">${gift.price}</span>
        </div>
        <p className="text-gray-600 mt-2">{gift.description}</p>
      </div>
      
      <div className="p-4 bg-gray-50">
        <div className="mb-3">
          <span className="text-sm text-gray-500">Perfect for:</span>
          <div className="flex flex-wrap mt-1 text-xs">
            {gift.occasions.slice(0, 3).map((occasion, index) => (
              <span key={index} className="bg-red-100 text-red-800 px-2 py-1 rounded mr-1 mb-1">
                {occasion}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-2">
          <a 
            href={gift.link} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-center transition duration-300"
          >
            View Item
          </a>
          
          {!showRemoveButton ? (
            <button 
              onClick={() => onSaveGift(gift)}
              disabled={isSaved}
              className={`save-button flex items-center justify-center w-10 rounded transition duration-300 ${
                isSaved 
                  ? 'bg-gray-300 cursor-not-allowed' 
                  : 'bg-red-600 hover:bg-red-700 text-white'
              }`}
              title={isSaved ? 'Already saved' : 'Save for later'}
            >
              {isSaved ? '✓' : '❤'}
            </button>
          ) : (
            <button 
              onClick={() => onRemoveGift(gift.name)}
              className="remove-button flex items-center justify-center w-10 bg-gray-500 hover:bg-gray-600 text-white rounded transition duration-300"
              title="Remove from saved"
            >
              &times;
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
