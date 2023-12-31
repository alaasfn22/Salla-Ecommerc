"use client";

import { Pagination } from "flowbite-react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function CustomePagination({ handelOnSelectPage, pageCount }) {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => {
    setCurrentPage(page);
    handelOnSelectPage(page);
  };

  return (
    <div className="flex justify-center items-center py-8">
      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={pageCount}
          onPageChange={onPageChange}
          showIcons
        />
      </div>
    </div>
  );
}

export default CustomePagination;
