import React, { useState } from "react";
import { FeedbackForm } from "../components/FeedbackForm";
import { SubmittedFeedbacks } from "../components/SubmittedFeedbacks";


interface Feedback {
    name: string;
    phone: string;
    email: string;
    comment: string;
    reaction: number;
  }

export const LandingPage: React.FC = () => {

    const [feedbacks, setFeedbacks] = useState <Feedback []> ([])

    const handleAddFeedback = (newFeedback: Feedback) =>{
        
        let newUserEmail = newFeedback.email
        for(let data of feedbacks){
            if(data.email === newUserEmail){
                return false
            }
        }

        setFeedbacks([...feedbacks, newFeedback])
        return true
    }

  return (
    <div className="min-h-screen flex flex-col  lg:flex-row gap-8 bg-blue-100 p-6 lg:p-10">
      <div className="w-full lg:w-1/2 p-8">
        <FeedbackForm handleAddFeedback={handleAddFeedback} />
      </div>
      <div className="w-full lg:w-1/2 p-2">
        <SubmittedFeedbacks feedbacks={feedbacks} />
      </div>
    </div>
  );
};
