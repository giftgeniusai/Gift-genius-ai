// src/components/FormPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormPage = ({ onSubmit }) => {
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    age: '19-30',
    gender: 'Female',
    interests: 'Tech',
    relationship: 'Friend',
    occasion: 'Birthdays',
    budget: '$20-$50'
  });
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    navigate('/results');
  };
  
  return (
    <div className="form-page">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Find the Perfect Gift</h2>
          <p className="text-center mb-6">
            Tell us about the recipient and we'll recommend personalized gift ideas!
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-4">
              <label htmlFor="age" className="block mb-2 font-medium">
                Age Range
              </label>
              <select
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="form-select w-full p-2 border rounded"
                required
              >
                <option value="0-12">0-12 years</option>
                <option value="13-18">13-18 years</option>
                <option value="19-30">19-30 years</option>
                <option value="31-50">31-50 years</option>
                <option value="50+">50+ years</option>
              </select>
            </div>
            
            <div className="form-group mb-4">
              <label htmlFor="gender" className="block mb-2 font-medium">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="form-select w-full p-2 border rounded"
                required
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-Binary">Non-Binary</option>
                <option value="Prefer Not to Say">Prefer Not to Say</option>
              </select>
            </div>
            
            <div className="form-group mb-4">
              <label htmlFor="interests" className="block mb-2 font-medium">
                Main Interest
              </label>
              <select
                id="interests"
                name="interests"
                value={formData.interests}
                onChange={handleChange}
                className="form-select w-full p-2 border rounded"
                required
              >
                <option value="Tech">Tech</option>
                <option value="Fashion">Fashion</option>
                <option value="Home">Home</option>
                <option value="Hobbies">Hobbies</option>
                <option value="Sports">Sports</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div className="form-group mb-4">
              <label htmlFor="relationship" className="block mb-2 font-medium">
                Your Relationship
              </label>
              <select
                id="relationship"
                name="relationship"
                value={formData.relationship}
                onChange={handleChange}
                className="form-select w-full p-2 border rounded"
                required
              >
                <option value="Friend">Friend</option>
                <option value="Parent">Parent</option>
                <option value="Partner">Partner</option>
                <option value="Sibling">Sibling</option>
                <option value="Colleague">Colleague</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div className="form-group mb-4">
              <label htmlFor="occasion" className="block mb-2 font-medium">
                Occasion
              </label>
              <select
                id="occasion"
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                className="form-select w-full p-2 border rounded"
                required
              >
                <option value="Birthdays">Birthday</option>
                <option value="Christmas">Christmas</option>
                <option value="Engagement">Engagement</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Valentine's Day">Valentine's Day</option>
                <option value="Mother's Day">Mother's Day</option>
                <option value="Father's Day">Father's Day</option>
                <option value="Baby Shower">Baby Shower</option>
                <option value="Housewarming">Housewarming</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div className="form-group mb-6">
              <label htmlFor="budget" className="block mb-2 font-medium">
                Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="form-select w-full p-2 border rounded"
                required
              >
                <option value="$0-$20">$0-$20</option>
                <option value="$20-$50">$20-$50</option>
                <option value="$50-$100">$50-$100</option>
                <option value="$100+">$100+</option>
              </select>
            </div>
            
            <div className="form-actions">
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded transition duration-300"
              >
                Find Gift Ideas
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
