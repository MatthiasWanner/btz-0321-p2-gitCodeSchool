import { useState, useEffect } from 'react';

export function usePagination(total) {
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    const pages = Math.ceil(total / 30) > 10 ? 10 : Math.ceil(total / 30);
    setTotalPages(pages);
  }, [total]);

  const [pagination, setPagination] = useState([]);
  useEffect(() => {
    const pagination = [];
    for (let i = 1; i <= totalPages; i++) {
      pagination.push(i);
    }
    setPagination(pagination);
  }, [totalPages]);

  return pagination;
}
