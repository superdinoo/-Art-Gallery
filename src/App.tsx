import React from "react";
import { Header } from "./component";
import s from "./App.module.scss";
import Body from "./component/body/Body";
import Pagination from "./component/pagination/Pagination";
import { selectMainLight } from "./redux/selectors/mainLightSelector";
import { useSelector } from "react-redux";

const App: React.FC = () => {
  const mainLight = useSelector(selectMainLight);

  return (
    <div className={!mainLight ? s.app : s.appLight}>
      <div className={s.container}>
        <Header />
        <Body />
        <Pagination />
      </div>
    </div>
  );
};

export default App;
