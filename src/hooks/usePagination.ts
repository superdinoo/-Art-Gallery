import { useEffect, useState } from "react";
import { useGetTotalPaintingsQuery } from "../redux/reducers/apiSlice";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/reducers/paginationSlice";

const usePagination = () => {
  const [allPage, setAllPage] = useState(1);
  const paintingSize = 6;
  const { data: total } = useGetTotalPaintingsQuery({});

  const dispatch = useDispatch();
  const handlePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  useEffect(() => {
    if (total && total.length > 0) {
      setAllPage(Math.ceil(total.length / paintingSize));
    }
  }, [total, paintingSize]);

  return {
    allPage,
    handlePage,
    paintingSize,
    total,
  };
};

export default usePagination;
