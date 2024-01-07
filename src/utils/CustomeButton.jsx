/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CustomeButton = ({ pathname, title, name }) => {
  return (
    <div className="flex py-4 justify-between dark:text-white">
      <h1 className="text-2xl  font-bold">{name}</h1>
      <Link to={pathname}>
        {title && (
          <button
            type="button"
            className="text-white bg-btn-color hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-gray-500 dark:hover:bg-btn-color dark:focus:ring-blue-800"
          >
            {title}
          </button>
        )}
      </Link>
    </div>
  );
};

export default CustomeButton;
