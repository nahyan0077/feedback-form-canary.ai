import * as Yup from 'yup';

export const FormValidation = Yup.object({
  name: Yup.string()
    .trim() // 
    .matches(/^[a-zA-Z\s]+$/, 'Name can only contain letters')
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be at most 50 characters'),

  phone: Yup.string()
    .required('Contact number is required')
    .matches(/^[0-9]{10}$/, 'Must be a valid 10-digit number'),

  email: Yup.string()
    .trim() 
    .email('Please enter a valid email address')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email format')
    .required('Email is required'),

  comment: Yup.string()
    .trim() 
    .required('Please provide your feedback')
    .min(10, 'Comment must be at least 10 characters')
    .max(300, 'Comment cannot exceed 300 characters'),
});
