import React from "react";
import { FeedbackForm } from "../components/FeedbackForm";
import { SubmittedFeedbacks } from "../components/SubmittedFeedbacks";

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col  lg:flex-row gap-8 bg-blue-200 p-6 lg:p-10">
      <div className="w-full lg:w-1/2 p-8">
        <FeedbackForm />
      </div>
      <div className="w-full lg:w-1/2 p-2">
        <SubmittedFeedbacks />
      </div>
    </div>
  );
};
