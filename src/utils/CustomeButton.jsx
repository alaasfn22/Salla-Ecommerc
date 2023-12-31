/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CustomeButton = ({ pathname, title, name }) => {
  return (
    <div className="flex py-4 justify-between">
      <h1 className="text-2xl  font-bold">{name}</h1>
      <Link to={pathname}>
        {title && (
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {title}
          </button>
        )}
      </Link>
    </div>
  );
};

export default CustomeButton;
