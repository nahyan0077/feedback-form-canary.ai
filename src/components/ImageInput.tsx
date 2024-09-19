import React from 'react';

interface ImageInputProps {
  image: string;
  alt: string;
}

export const ImageInput: React.FC<ImageInputProps> = ({ image, alt }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={image} alt={alt} className="h-12 w-12 object-contain mb-2" />
      <h2 className="font-bold text-custom-green text-center">{alt}</h2>
    </div>
  );
};
