import React from 'react'
import worst from '../assets/Worst.svg'

export const SubmittedFeedbacks: React.FC = () => {
  return (
    <div className="min-h-screen mx-auto max-w-7xl p-8">
      <div className="flex flex-col justify-items-center space-y-6">
        <h2 className="text-3xl font-semibold text-center">Submitted Feedback</h2>
        
        <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Comments from user</h3>
              <p className="text-gray-600">username</p>
            </div>
            <img src={worst} alt="worst" className="h-16 w-16 object-cover" />
          </div>
        </div>
        
      </div>
    </div>
  )
}
