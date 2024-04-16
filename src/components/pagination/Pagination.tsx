import React from "react";
import { PaginationButton } from "./components/paginationButton/PaginationButton";
import classes from "./Pagination.module.sass";
import { usePagination } from "./hooks/usePagination";

type Props = {
  total: number;
  setPage: (page: number) =>void
  currentPage: number
};

export const Pagination = ({ total, setPage, currentPage }: Props) => {
  const { steps, currentRange, nextRange, prevRange, endRange, startRange  } = usePagination(total);

  return (
    <div className={classes.Container}>
      <button disabled = {currentRange ===0} onClick={startRange} className={classes.Arrow}>{`«`}</button>
      <button disabled = {currentRange ===0} onClick={prevRange} className={classes.Arrow}>{`‹`}</button>
      {steps.slice(currentRange*10,currentRange*10+10).map((step) => (
        <PaginationButton page={step} key={step} setPage = {setPage} currentPage={currentPage} />
      ))}
      <button disabled = {currentRange === Math.max(...steps)/10-1} onClick={nextRange}  className={classes.Arrow}>{`›`}</button>
      <button disabled = {currentRange === Math.max(...steps)/10-1} onClick={endRange}  className={classes.Arrow}>{`»`}</button>
    </div>
  );
};
