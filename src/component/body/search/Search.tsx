import React from "react";
import s from "./Search.module.scss";
import { SearchIcon } from "../../../assets/svg";
import { selectMainLight } from "../../../redux/selectors/mainLightSelector";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../../redux/reducers/searchSlice";

const Search: React.FC = () => {
  const mainLight = useSelector(selectMainLight);

  const dispatch = useDispatch();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <div className={s.all}>
      <div className={s.container}>
        <SearchIcon className={!mainLight ? s.searchIcon : s.searchSvg} />
        <input
          type="text"
          className={!mainLight ? s.input : s.inputLight}
          placeholder="Painting title"
          onChange={(e) => handleInput(e)}
        />
      </div>
    </div>
  );
};

export default Search;
