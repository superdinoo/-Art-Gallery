import React from "react";
import s from "./Header.module.scss";
import { Logo } from "../../assets/svg/index";
import { Light, Dark } from "../../assets/svg";
import { useDispatch, useSelector } from "react-redux";
import { setLightAction } from "../../redux/reducers/mainLight";
import { selectMainLight } from "../../redux/selectors/mainLightSelector";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const mainLight = useSelector(selectMainLight);

  const handleClickLight = () => {
    dispatch(setLightAction());
  };

  return (
    <div className={s.all}>
      <div className={s.container}>
        <div className={s.logoStyle}>
          <Logo className={!mainLight ? s.logo : s.logoDark} />
        </div>
        <button className={s.iconBack} onClick={handleClickLight}>
          {!mainLight ? <Light className={s.icon} /> : <Dark className={s.svgIconDark} />}
        </button>
      </div>
    </div>
  );
};

export default Header;
