import React from 'react';
import { InputFields } from './InputFields';
import worst from '../assets/Worst.svg';
import fine from '../assets/Fine.svg';
import neutral from '../assets/Neutral.svg';
import good from '../assets/Good.svg';
import verygood from '../assets/Verygood.svg';

export const FeedbackForm: React.FC = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg ">
      <h2 className="pb-4 text-lg text-blue-600 font-normal">Please Provide your Feedback</h2>
      
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputFields type="text" placeholder="John Doe" label='Name' />
          <InputFields type="tel" placeholder="+91 00000 00000" label='Contact Number' />
          <InputFields type="email" placeholder="xyz123@gmail.com" label='Email Address' />
        </div>

        <h2 className="pt-6 pb-2 py-6 text-blue-600 font-bold text-md">Share your experience in scaling</h2>

        <div className="flex justify-around items-center gap-4 pt-2">
          <img src={worst} alt="worst" className="h-16 w-16 object-contain" />
          <img src={fine} alt="fine" className="h-16 w-16 object-contain" />
          <img src={neutral} alt="neutral" className="h-16 w-16 object-contain" />
          <img src={good} alt="good" className="h-16 w-16 object-contain" />
          <img src={verygood} alt="verygood" className="h-16 w-16 object-contain" />
        </div>

        <div className="flex flex-col gap-4 pt-4">
          <input type="range" id="experience-slider" className="w-full h-2 rounded-lg" />
          
          <textarea
            name="comments"
            className="w-full h-20 rounded-lg placeholder:px-3 py-2 focus:outline-none border-2 border-gray-300 focus:border-green-900"
            placeholder="Add your comments..."
          />

          <button type="submit" className="p-3 bg-teal-500 w-full rounded-lg text-white text-md font-semibold hover:bg-teal-600 transition ease-in-out">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};
