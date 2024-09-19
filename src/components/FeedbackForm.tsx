import React from 'react';
import { InputFields } from './InputFields';
import worst from '../assets/Worst.svg';
import fine from '../assets/Fine.svg';
import neutral from '../assets/Neutral.svg';
import good from '../assets/Good.svg';
import verygood from '../assets/Verygood.svg';
import { ImageInput } from './ImageInput';
import {Formik, Field, ErrorMessage} from 'formik'

export const FeedbackForm: React.FC = () => {
  return (
    <div className="bg-white p-8 md:p-12 shadow-md rounded-lg max-w-4xl mx-auto">
      <h2 className="pb-4 text-xl font-normal text-custom-blue ">
        Please Provide Your Feedback
      </h2>
      
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputFields type="text" placeholder="John Doe" label="Name" />
          <InputFields type="tel" placeholder="+91 00000 00000" label="Contact Number" />
          <InputFields type="email" placeholder="xyz123@gmail.com" label="Email Address" />
        </div>

        <h2 className="pt-8 pb-4 text-lg font-bold text-custom-blue ">
          Share your experience in scaling
        </h2>

        <div className="flex justify-between items-center gap-4 p-4 flex-wrap">
          <ImageInput image={worst} alt="Worst" />
          <ImageInput image={fine} alt="Not Good" />
          <ImageInput image={neutral} alt="Fine" />
          <ImageInput image={good} alt="Looks Good" />
          <ImageInput image={verygood} alt="Very Good" />
        </div>

        <div className="flex flex-col gap-4 pt-4">
          <input type="range" id="experience-slider" className="w-full h-2 rounded-lg bg-gray-300" />

          <textarea
            name="comments"
            className="w-full h-24 rounded-lg placeholder:px-3 py-2 focus:outline-none border-2 border-gray-300 focus:border-green-900"
            placeholder="Add your comments..."
          />

          <button
            type="submit"
            className="p-4 bg-custom-teal w-full rounded-lg shadow-md text-white text-lg font-semibold hover:bg-teal-600 transition ease-in-out placeholder:p-2 "
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};
