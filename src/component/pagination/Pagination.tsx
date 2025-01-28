import React from "react";
import { Pagination } from "antd";
import s from "./Pagination.module.scss";
import "./antd.scss";
import usePagination from "../../hooks/usePagination";
import { useSelector } from "react-redux";
import { selectCurrentPage } from "../../redux/selectors/paginationSelector";
import { selectMainLight } from "../../redux/selectors/mainLightSelector";

const PaginationComponent = () => {
  const { handlePage, paintingSize, total } = usePagination();
  const mainLight = useSelector(selectMainLight);

  const currentPage = useSelector(selectCurrentPage);
  return (
    <div className={s.all}>
      <Pagination
        className={!mainLight ? s.paginationClassName : s.paginationLight}
        onChange={handlePage}
        total={total?.length}
        current={currentPage}
        pageSize={paintingSize}
      />
    </div>
  );
};

export default PaginationComponent;
