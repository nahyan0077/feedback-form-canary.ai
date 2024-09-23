import React, { useState } from 'react';
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
      return [worst, 'Worst'];
    case 2:
      return [fine, 'Not Good'];
    case 3:
      return [neutral, 'Fine'];
    case 4:
      return [good, "Looks Good"];
    case 5:
      return [verygood, 'Very good'];
    default:
      return [neutral, 'Neutral'];
  }
};

export const SubmittedFeedbacks: React.FC<SubmittedFeedbacksProps> = ({ feedbacks }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const pageLimit = 5; 
  const totalPages = Math.ceil(feedbacks.length / pageLimit);

  const startIndex = (currentPage - 1) * pageLimit;
  const selectedFeedbacks = feedbacks.slice(startIndex, startIndex + pageLimit);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-4">
      <h2 className="pb-4 px-2 font-bold text-lg text-custom-blue ">Submitted Feedbacks</h2>

      <div className="space-y-4">
        {selectedFeedbacks.length === 0 ? (
          <div className='px-5 italic' >
            <p>No feedbacks submitted yet...</p>

          </div>
        ) : (
          selectedFeedbacks.map((feedback, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center hover:scale-105 transition ease-in-out">
              <div>
                <h3 className="text-lg font-semibold text-custom-blue">
                  {feedback.comment}
                </h3>
                <p className="text-custom-blue">{feedback.name}</p>
              </div>
              <div className='flex flex-col items-center'>
                <img src={getReactionImage(feedback.reaction)[0]} alt="reaction" className="h-10 w-10" />
                <h2 className='font-bold text-green-600 text-center'>{getReactionImage(feedback.reaction)[1]}</h2>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination  */}
      {feedbacks.length > pageLimit && (
        <div className="flex justify-center items-center gap-2 mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index + 1)}
              className={`px-3 py-1 ${currentPage === index + 1 ? 'bg-custom-teal' : 'bg-gray-300'} text-white rounded-lg`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
