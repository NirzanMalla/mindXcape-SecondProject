import { useState, useEffect } from "react";

const usePagination = (data, itemsPerpage) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerpage;
    const endIndex = startIndex + itemsPerpage;
    setCurrentPageData(data.slice(startIndex, endIndex));
  }, [currentPage, data, itemsPerpage]);

  const totalPages = Math.ceil(data.length / itemsPerpage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return {
    currentPage,
    currentPageData,
    totalPages,
    handlePageChange,
  };
};

export default usePagination;
