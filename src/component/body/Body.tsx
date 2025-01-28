import React from "react";
import Search from "./search/Search";
import s from "./Body.module.scss";
import Card from "./card/Card";

const Body: React.FC = () => {
  return (
    <div className={s.all}>
      <div className={s.searchAll}>
        <Search />
      </div>
      <Card />
    </div>
  );
};

export default Body;
