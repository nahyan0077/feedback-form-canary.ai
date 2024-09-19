import React from 'react';

interface InputFieldsProps {
  type: string;
  placeholder?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label ?: string
}

export const InputFields: React.FC<InputFieldsProps> = ({ type, placeholder, handleChange, label }) => {
  return (
    <div>
    <label className='py-6 text-blue-600 font-bold text-md' > {label} </label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        className="px-2 py-2 w-full rounded-lg focus:outline-none border-2 border-gray-400 placeholder:italic text-sm focus:border-green-800 "
      />
    </div>
  );
};
