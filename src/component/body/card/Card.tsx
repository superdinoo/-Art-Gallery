import React from "react";
import s from "./Card.module.scss";
import { useGetPaintingsQuery } from "../../../redux/reducers/apiSlice";
import { useSelector } from "react-redux";
import { selectCurrentPage } from "../../../redux/selectors/paginationSelector";
import usePagination from "../../../hooks/usePagination";
import { PaintingData } from "../../../interface/interface";
import baseUrl from "../../../baseUrl";
import helpers from "./helpers";
import { selectMainLight } from "../../../redux/selectors/mainLightSelector";
import { selectSearch } from "../../../redux/selectors/searchSelector";

const Card: React.FC = () => {
  const currentPage = useSelector(selectCurrentPage);
  const { paintingSize } = usePagination();
  const { authorsById, locationId } = helpers();
  const mainLight = useSelector(selectMainLight);
  const searchData = useSelector(selectSearch);

  const {
    data: paintingsData,
    isError,
    isLoading,
  } = useGetPaintingsQuery({ page: currentPage, limit: paintingSize, q: searchData });

  if (isLoading) return <div className={!mainLight ? s.loading : s.loadingLiht}>Loading...</div>;
  if (isError) return <div>Error: {isError}</div>;
  if (paintingsData && paintingsData.length === 0) {
    return (
      <div className={s.searchData}>
        <h1 className={!mainLight ? s.h1Search : s.h1SearchLight}>
          No matches for <p className={!mainLight ? s.searchP : s.searchPLight}>{searchData}</p>
        </h1>
        <p className={!mainLight ? s.pSearch : s.pSearchLight}>
          Please try again with a different spelling or keywords.
        </p>
      </div>
    );
  }

  return (
    <div className={s.all}>
      <div className={s.container}>
        {paintingsData.map((painting: PaintingData) => {
          const author = authorsById.get(painting.authorId);
          const location = locationId.get(painting.locationId);

          return (
            <div className={s.containerPainting} key={painting.id}>
              <img
                className={s.imgPainting}
                src={`${baseUrl}${painting.imageUrl}`}
                alt="imgPainting"
              />
              <div className={!mainLight ? s.pathNamePainting : s.pathNamePaintingsLight}>
                <div className={!mainLight ? s.line : s.lineLight}></div>
                <div className={s.blockPath}>
                  <h1 className={!mainLight ? s.h1Text : s.h1TextLight}>{painting.name}</h1>
                  <p className={!mainLight ? s.year : s.pTextLight}>{painting.created}</p>
                </div>
              </div>
              {author && (
                <div className={s.pathTwoNamePainting}>
                  <div className={s.blockPathTwo}>
                    <h1 className={!mainLight ? s.h1Text : s.h1TextLight}>{author.name}</h1>
                    {location && (
                      <p className={!mainLight ? s.year : s.pTextLight}>{location.location}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
