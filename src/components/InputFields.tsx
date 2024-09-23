import React from 'react';
import { Field, ErrorMessage } from "formik";

interface InputFieldsProps {
  type: string;
  placeholder?: string;
  label?: string;
  name: string;
}

export const InputFields: React.FC<InputFieldsProps> = ({ type, placeholder, label, name }) => {
  return (
    <div className="flex flex-col ">
      <label className="px-1 font-bold text-md text-custom-blue">{label}</label>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        className="px-4 py-2 w-full rounded-lg shadow-lg focus:outline-none border-2 border-gray-400 placeholder:italic text-sm focus:border-green-800"
      />
       <ErrorMessage name={name} component="div" className="text-red-500 text-xs font-semibold p-1" />
    </div>
  );
};
