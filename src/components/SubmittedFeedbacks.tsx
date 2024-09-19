import React from 'react';
import worst from '../assets/Worst.svg';
import fine from '../assets/Fine.svg';
import neutral from '../assets/Neutral.svg';
import good from '../assets/Good.svg';
import verygood from '../assets/Verygood.svg';

interface Feedback {
  name: string;
  phone: string;
  email: string;
  comment: string;
  reaction: number;
}

interface SubmittedFeedbacksProps {
  feedbacks: Feedback[];
}

const getReactionImage = (reaction: number) => {
  switch (reaction) {
    case 1:
      return [worst,'Worst'];
    case 2:
      return [fine, 'Fine'];
    case 3:
      return [neutral, 'Neutral'];
    case 4:
      return [good, "Good"];
    case 5:
      return [verygood, 'Very good'];
    default:
      return [neutral, 'Neutral'];
  }
};

export const SubmittedFeedbacks: React.FC<SubmittedFeedbacksProps> = ({ feedbacks }) => {
  return (
    <div className="p-4">
      <h2 className="pb-4 px-2 font-bold text-lg text-custom-blue">Submitted Feedbacks</h2>

      <div className="space-y-4">
        {feedbacks.length === 0 ? (
          <p>No feedback submitted yet.</p>
        ) : (
          feedbacks.map((feedback, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-custom-blue">
                  {feedback.comment}
                </h3>
                <p className="text-custom-blue">{feedback.name}</p>
              </div>
              <div className=' flex flex-col items-center' >
                <img src={getReactionImage(feedback.reaction)[0]} alt="reaction" className="h-10 w-10" />
                <h2 className='font-bold text-custom-green text-center' > {getReactionImage(feedback.reaction)[1]} </h2>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
