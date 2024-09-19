import React from 'react';
import { InputFields } from './InputFields';
import worst from '../assets/Worst.svg';
import fine from '../assets/Fine.svg';
import neutral from '../assets/Neutral.svg';
import good from '../assets/Good.svg';
import verygood from '../assets/Verygood.svg';
import { ImageInput } from './ImageInput';
import {Formik, Field, Form, ErrorMessage} from 'formik'
import { FormValidation } from '../utils/FormValidation';
import {toast} from 'sonner'

interface initialValues {
    name: string,
    phone: string,
    email: string,
    comment: string,
    reaction: number,
}

export const FeedbackForm: React.FC = () => {

    const initialValues: initialValues = {
        name: '',
        phone: '',
        email: '',
        comment: '',
        reaction: 3,
    }

    const handleSubmit = (data: initialValues) => {
        console.log(data);
        toast.success('New feedback added successfully')
    }

  return (
    <div className="bg-white p-8 md:p-12 shadow-md rounded-lg max-w-4xl mx-auto">
      <h2 className="pb-4 text-xl font-normal text-custom-blue ">
        Please Provide Your Feedback
      </h2>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={FormValidation}
      >
        <Form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputFields type="text" placeholder="John Doe" label="Name" name='name' />
            <InputFields type="tel" placeholder="+91 00000 00000" label="Contact Number" name='phone' />
            <InputFields type="email" placeholder="xyz123@gmail.com" label="Email Address" name='email' />
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
            <Field as='input' type="range" id="experience-slider" name='reaction' min={1} max={5} className="w-full h-2 rounded-lg bg-gray-300" />

            <Field
                as="textarea"
                name="comment"
                className="w-full h-24 rounded-lg placeholder:px-3 py-2 focus:outline-none border-2 border-gray-300 focus:border-green-900"
                placeholder="Add your comments..."
            />
            <ErrorMessage name="comment" component="div" className="text-red-500 text-xs p-1"  />

            <button
                type="submit"
                className="p-4 bg-custom-teal w-full rounded-lg shadow-md text-white text-lg font-semibold hover:bg-teal-600 transition ease-in-out placeholder:p-2 "
            >
                SUBMIT
            </button>
            </div>
        </Form>
        </Formik>
    </div>
  );
};
