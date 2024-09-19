import React from "react";
import { FeedbackForm } from "../components/FeedbackForm";
import { SubmittedFeedbacks } from "../components/SubmittedFeedbacks";

export const LandingPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-1/2">
          <FeedbackForm />
        </div>
        <div className="w-full lg:w-1/2">
          <SubmittedFeedbacks />
        </div>
      </div>
    </>
  );
};
