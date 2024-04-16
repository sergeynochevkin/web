import { useCallback, useEffect, useState } from "react";
import { TUserItem } from "..";
import { step } from "@/constants/constants";

export const useMain = () => {
  const [paginatedUsers, setPaginatedUsers] = useState<TUserItem[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [skip, setSkip] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);


  const getUsers = useCallback(async () => {
    try {
      const res = await fetch(`http://localhost:3000/users?skip=${skip}&&take=${step}`, { method: "GET" });
      const data = await res.json();
      setPaginatedUsers(data.users);
      setTotal(data.total);
    } catch (error) {
      console.log(error);
    }
  }, [skip]);

  const setPage = (page: number) => {
    setSkip((page - 1) * step);
    setCurrentPage(page);
  };

  useEffect(() => {
    getUsers();
  }, [skip]);

  return { getUsers, paginatedUsers, total, setPage, currentPage };
};
