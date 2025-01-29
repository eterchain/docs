import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];

  // Tentukan jumlah halaman yang ingin ditampilkan
  const maxVisiblePages = 6;

  // Menentukan awal dan akhir dari halaman yang akan ditampilkan
  let startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
  let endPage = startPage + maxVisiblePages - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - maxVisiblePages + 1, 1);
  }

  // Membuat array halaman yang akan ditampilkan
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.pagination}>
      <button
        className={clsx(styles.paginationButton, styles.prevButton)}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ← Prev
      </button>
      <div className={styles.pageNumbers}>
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={clsx(styles.paginationButton, {
              [styles.activePage]: number === currentPage,
            })}
            onClick={() => onPageChange(number)}
          >
            {number}
          </button>
        ))}
      </div>
      <button
        className={clsx(styles.paginationButton, styles.nextButton)}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next →
      </button>
    </div>
  );
}

export default Pagination;
