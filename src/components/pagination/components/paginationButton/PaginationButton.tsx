import React from "react";
import classes from "./PaginationButton.module.sass";

type Props = {
  page: number;
  setPage:(page: number)=>void
  currentPage:number
};

export const PaginationButton = ({ page, setPage, currentPage }: Props) => {
  return (
    <button
      disabled = {page === currentPage}
      className={page === currentPage ? classes.ContainerActive  : classes.Container}
      onClick={() => {
        setPage(page);
      }}
    >
      {page}
    </button>
  );
};
