// src/utils/recommendationLogic.js

/**
 * Generates gift recommendations based on user inputs
 * @param {Array} giftDatabase - Array of gift objects
 * @param {Object} userInputs - User's form inputs
 * @param {Number} count - Number of recommendations to return (default: 5)
 * @return {Array} - Array of recommended gifts
 */
export const getRecommendations = (giftDatabase, userInputs, count = 5) => {
  // Calculate match score for each gift
  const scoredGifts = giftDatabase.map(gift => ({
    ...gift,
    score: calculateMatchScore(gift, userInputs)
  }));
  
  // Sort by score (highest first)
  const sortedGifts = scoredGifts.sort((a, b) => b.score - a.score);
  
  // Return top N recommendations
  return sortedGifts.slice(0, count);
};

/**
 * Calculates a match score between user inputs and a gift
 * @param {Object} gift - Gift object from the database
 * @param {Object} userInputs - User's form inputs
 * @return {Number} - Match score (higher is better)
 */
const calculateMatchScore = (gift, userInputs) => {
  let score = 0;
  
  // Check age match
  if (gift.ages.includes(userInputs.age)) {
    score += 2;
  }
  
  // Check gender match
  if (gift.genders.includes(userInputs.gender) || userInputs.gender === "Prefer Not to Say") {
    score += 2;
  }
  
  // Check interest match
  if (gift.interests.includes(userInputs.interests)) {
    score += 3; // Interests are important, so weighted higher
  }
  
  // Check relationship match
  if (gift.relationships.includes(userInputs.relationship)) {
    score += 2;
  }
  
  // Check occasion match
  if (gift.occasions.includes(userInputs.occasion)) {
    score += 3; // Occasion is important, so weighted higher
  }
  
  // Check budget match
  const budgetRanges = {
    "$0-$20": { min: 0, max: 20 },
    "$20-$50": { min: 20, max: 50 },
    "$50-$100": { min: 50, max: 100 },
    "$100+": { min: 100, max: 1000 }
  };
  
  const selectedBudget = budgetRanges[userInputs.budget];
  if (gift.price >= selectedBudget.min && gift.price <= selectedBudget.max) {
    score += 4; // Budget is very important, so weighted highest
  }
  
  return score;
};
