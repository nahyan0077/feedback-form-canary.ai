import React from 'react';
import { InputFields } from './InputFields';
import worst from '../assets/Worst.svg';
import fine from '../assets/Fine.svg';
import neutral from '../assets/Neutral.svg';
import good from '../assets/Good.svg';
import verygood from '../assets/Verygood.svg';

export const FeedbackForm: React.FC = () => {
  return (
    <div className="min-h-screen mx-auto max-w-7xl p-10">
      <h2 className="pb-10 text-2xl text-blue-600 font-semibold">Please Provide Your Feedback</h2>
      

      <form>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputFields type="text" placeholder="John Doe" label='Name' />
          <InputFields type="tel" placeholder="+91 00000 00000" label='Contact Number' />
          <InputFields type="email" placeholder="xyz123@gmail.com" label='Email Address' />
        </div>
        
        <h2 className="pt-10 pb-4 text-2xl text-blue-600 font-semibold">Share your experience in scaling</h2>
        

        <div className="flex justify-between gap-5">
          <img src={worst} alt="worst" className="h-12 w-12 object-contain" />
          <img src={fine} alt="fine" className="h-12 w-12 object-contain" />
          <img src={neutral} alt="neutral" className="h-12 w-12 object-contain" />
          <img src={good} alt="good" className="h-12 w-12 object-contain" />
          <img src={verygood} alt="verygood" className="h-12 w-12 object-contain" />
        </div>
        

        <div className="flex flex-col gap-6 pt-8">
          <input type="range" id="experience-slider" className="w-full" />
          
          <textarea
            name="comments"
            className="w-full h-28 rounded-xl placeholder:px-3 py-3 focus:outline-none border-2 border-gray-400 placeholder-italic focus:border-green-800"
            placeholder="Add your comments..."
          />
          

          <button type="submit" className="p-4 bg-teal-500 w-full rounded-xl text-white text-md font-semibold hover:bg-teal-600 transition duration-200 ease-in-out">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};
