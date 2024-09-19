import React from 'react'
import { InputFields } from './InputFields'
import worst from '../assets/Worst.svg'
import fine from '../assets/Fine.svg'
import neutral from '../assets/Neutral.svg'
import good from '../assets/Good.svg'
import verygood from '../assets/Verygood.svg'




export const FeedbackForm: React.FC = () => {
  return (
    <div className='min-h-screen mx-auto max-w-7xl p-10 ' >
        <h2 className='pb-10 text-2xl text-blue-600 font-semibold' > Please Provide your Feedback </h2>
        <div className='grid grid-cols-2 gap-10' >
            <InputFields type='text' placeholder='John Doe'  />
            <InputFields type='text' placeholder='+91 00000 00000'  />
            <InputFields type='text' placeholder='xyz123@gmail.com'  />
        </div>
        <h2 className='pt-10 pb-10 text-2xl text-blue-600 font-semibold' > Share your experiance in scaling </h2>
        <div className='flex justify-between gap-5' >
            <img src={worst} alt="worst" />
            <img src={fine} alt="fine" />
            <img src={neutral} alt="neutral" />
            <img src={good} alt="good" />
            <img src={verygood} alt="verygood" />
        </div>
        <div className='flex flex-col gap-10 p-6' >
            <input type='range' className=' w-full' />
            <textarea name='hello' className='w-full rounded-xl placeholder:px-3 py-2 focus:outline-green-900 border-2 border-gray-400' placeholder='Add your comments...'  />
            <button className='p-4 bg-teal-500 w-full rounded-xl text-white text-md font-semibold ' > SUBMIT </button>
        </div>
    </div>
  )
}