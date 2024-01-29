import { LazyLoadImage } from "react-lazy-load-image-component";
import { imageAPi } from "../../Api/imageAPI";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BrandCard = ({ name, image, id }) => {
  return (
    <Link to={`/products/brand?brandId=${id}&name=${name}`}>
      <div className="flex my-4 flex-col p-2 overflow-hidden justify-between items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <LazyLoadImage
          className="object-contain p-2   w-20 h-20"
          src={imageAPi + image.slice(9)}
          alt={name}
          loading="lazy"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {name}
          </p>
        </div>
      </div>
    </Link>
      
       
  );
};

export default BrandCard;
