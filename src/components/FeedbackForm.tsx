import React, { useEffect, useRef } from 'react';
import { InputFields } from './InputFields';
import worst from '../assets/Worst.svg';
import fine from '../assets/Fine.svg';
import neutral from '../assets/Neutral.svg';
import good from '../assets/Good.svg';
import verygood from '../assets/Verygood.svg';
import { ImageInput } from './ImageInput';
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';
import { FormValidation } from '../utils/FormValidation';
import { toast } from 'sonner';

interface initialValues {
  name: string;
  phone: string;
  email: string;
  comment: string;
  reaction: number;
}

interface FeedbackFormProps {
  handleAddFeedback: (feedback: initialValues) => boolean;
}

export const FeedbackForm: React.FC<FeedbackFormProps> = ({ handleAddFeedback }) => {
  const sliderRef = useRef<HTMLInputElement>(null);

  const initialValues: initialValues = {
    name: '',
    phone: '',
    email: '',
    comment: '',
    reaction: 3, 
  };

  const handleSubmit = (data: initialValues, { resetForm }: FormikHelpers<initialValues>) => {
    try {
      console.log(data);
      const result: boolean = handleAddFeedback(data);
      if (result) {
        toast.success('New feedback added successfully');
        updateSliderBackground(initialValues.reaction);
        resetForm();
      } else {
        toast.error("This user's feedback already exists");
      }
    } catch (error: any) {
      toast.error(error);
    }
  };

  const updateSliderBackground = (value: number) => {
    if (sliderRef.current) {
      const min = parseInt(sliderRef.current.min);
      const max = parseInt(sliderRef.current.max);
      const percentage = ((value - min) / (max - min)) * 100;
      sliderRef.current.style.background = `linear-gradient(to right, #2A5853 ${percentage}%, #C3E6E3 ${percentage}%)`;
    }
  };

  useEffect(() => {
    // Set initial background on component mount
    updateSliderBackground(initialValues.reaction);
  }, []);

  const handleImageClick = (num: number) => {

      if (sliderRef.current) {
        sliderRef.current.value = num.toString()
      }
      updateSliderBackground(num)
  }

  return (
    <div className="bg-white p-8 md:p-12 shadow-xl rounded-lg max-w-4xl mx-auto">
      <h2 className="pb-4 text-xl font-normal text-custom-blue">
        Please Provide Your Feedback
      </h2>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={FormValidation}
      >
        {({ values }) => (
          <Form>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${values}`}  >
              <InputFields type="text" placeholder="John Doe" label="Name" name="name"  />
              <InputFields type="tel" placeholder="+91 00000 00000" label="Contact Number" name="phone" />
              <InputFields type="email" placeholder="xyz123@gmail.com" label="Email Address" name="email" />
            </div>

            <h2 className="pt-8 pb-4 text-lg font-bold text-custom-blue">
              Share your experience in scaling
            </h2>

            <div className="flex justify-between items-center justify-items-center gap-4 p-4 flex-wrap">
              <ImageInput image={worst} alt="Worst" onClick={()=>handleImageClick(1)}/>
              <ImageInput image={fine} alt="Not Good" onClick={()=>handleImageClick(2)} />
              <ImageInput image={neutral} alt="Fine" onClick={()=>handleImageClick(3)} />
              <ImageInput image={good} alt="Looks Good" onClick={()=>handleImageClick(4)} />
              <ImageInput image={verygood} alt="Very Good" onClick={()=>handleImageClick(5)} />
            </div>

            <div className="flex flex-col gap-4 pt-4">
              <Field name="reaction">
                {({ field }: { field: any }) => (
                  <input
                    {...field}
                    type="range"
                    ref={sliderRef}
                    min={1}
                    max={5}
                    className="h-2 rounded-lg mb-6 hover:cursor-pointer"
                    onChange={(e) => {
                      field.onChange(e);
                      updateSliderBackground(parseInt(e.target.value));
                    }}
                  />
                )}
              </Field>

              <Field
                as="textarea"
                name="comment"
                className="w-full h-24 p-3 rounded-lg focus:outline-none border-2 border-gray-400 focus:border-green-900 shadow-md"
                placeholder="Add your comments..."
              />
              <ErrorMessage name="comment" component="div" className="text-red-500 text-xs font-semibold" />

              <button
                type="submit"
                className="p-4 bg-custom-teal w-full rounded-lg shadow-xl text-white text-lg font-semibold hover:bg-teal-600 transition ease-in-out placeholder:p-2"
              >
                SUBMIT
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};