import React from "react";

interface InputFieldsProps{
    type: string,
    placeholder?: string,
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputFields: React.FC <InputFieldsProps> = ({type, placeholder, handleChange}) => {
    return (
        <>
            <input type={type} placeholder={placeholder} onChange={handleChange} className="px-2 py-3 rounded-lg focus:outline-green-900 border-2 border-gray-400 placeholder:p-2 italic"  />
        </>
    )
}