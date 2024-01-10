/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { imageAPi } from "../../Api/imageAPI";

const ProductGallery = ({ product }) => {
  const [images, setImages] = useState([]);
  const [imageCover, setImageCover] = useState("");
  useEffect(() => {
    if (product.images) {
      setImages(product.images);
    }
  }, [product._id]);
  useEffect(() => {
    if (product.imageCover) {
      setImageCover(product.imageCover);
    }
  }, [product._id]);
  
  return (
    <div className="flex flex-col gap-4 ">
      <>
        <div className="h-72 bg-white flex justify-center items-center p-4 text-center border-2  dark:bg-gray-800 dark:border-gray-700  rounded-lg  overflow-hidden ">
              
          <LazyLoadImage
          className=" h-52 object-contain "
          src={imageAPi + imageCover.slice(9)}
          alt={imageCover}
          title={imageCover}
          loading="lazy"
          
          style={{ cursor: "pointer" }}
        />
         
       
        </div>
        <div>
          <div className="grid grid-cols-4 gap-4 ">
            {
             
                images.length>0?images.map((image, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => setImageCover(image)}
                      style={{ cursor: "pointer" }}
                      className={
                        `${
                          image === imageCover?
                          "border-2 bg-white border-blue-300 h-auto max-h-[100px] overflow-hidden p-2  rounded-lg  dark:bg-gray-800 dark:border-gray-700":
                          "border-2 bg-white h-auto max-h-[100px] overflow-hidden p-2  dark:bg-gray-800 dark:border-gray-700 rounded-lg border-gray-300"
                        }`
                      }
                    >
                      <LazyLoadImage
                        className="h-full mx-auto max-w-full object-contain"
                        src={imageAPi + image.slice(9)}
                        alt={image}
                        title={image}
                        loading="lazy"
                      />
                    </div>
                  );
                }):(null)
              
            }
          </div>
        </div>
      </>
    </div>
  );
};

export default ProductGallery;
