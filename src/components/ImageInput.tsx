interface ImageInputProps {
    image: string,
    alt: string,
}


export const ImageInput: React.FC <ImageInputProps> = ({image, alt}) => {
    return (
        <>
            <img src={image}  alt={alt} className="h-16 w-16 object-contain" />
        </>
    )
}