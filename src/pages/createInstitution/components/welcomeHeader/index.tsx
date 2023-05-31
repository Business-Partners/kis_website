import React from "react";
import { logo } from "../../../../assets";
import Styles from "../../styles/index.module.scss";

const WelcomeHeader: React.FC<{ who: string }> = ({ who }) => {
  return (
    <div className={Styles.HeaderContainer}>
      <header>
        <div>
          <img src={logo} alt="Logo" />
          <strong> Kindergarten Integrated System </strong>
        </div>

        <strong> {who} </strong>
      </header>

      <div>
        <strong> Creche | ATL | Infantário | Pré-Escolar </strong>
      </div>
    </div>
  );
};

export default WelcomeHeader;
