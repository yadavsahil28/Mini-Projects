import { useState } from 'react'
import Header from '../Common/Header'
import { images } from '../../constants/ImageGallery'

export const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  function selectImageHandler(image: string) {
    setSelectedImage(image);
  }

  return (
    <>
      <Header title="Image Gallery" />

      <p className="text-center underline mt-4 text-sm sm:text-base">
        Click on an image!
      </p>

      <div className="flex flex-wrap justify-center gap-4 p-4">
        {images.map((image: string, i: number) => (
          <div
            key={i}
            onClick={() => selectImageHandler(image)}
            className="cursor-pointer transform transition duration-300 hover:scale-105"
          >
            <img
              src={image}
              alt={`img-${i}`}
              className="w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 object-cover rounded-lg 
                         shadow-sm hover:shadow-md transition"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="m-8 text-center">
          <h2 className="mb-2 text-lg sm:text-xl font-semibold">
            Selected Image
          </h2>

          <div className="flex justify-center">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] max-h-[70vh] rounded-xl border-2 border-gray-100 shadow-xl object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}
