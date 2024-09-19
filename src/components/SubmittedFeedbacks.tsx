import React from 'react';
import worst from '../assets/Worst.svg';

export const SubmittedFeedbacks: React.FC = () => {
  return (
    <div className="p-4 ">
      <h2 className="pb-4 px-2  font-bold text-lg text-custom-blue"  >Submitted Feedbacks</h2>
      
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-custom-blue"  >Comments from the user</h3>
            <p className=" text-custom-blue"  >User Name</p>
          </div>
          <img src={worst} alt="worst" className="h-10 w-10" />
        </div>

        {/* Repeat the above block for each feedback */}
      </div>
    </div>
  );
};
