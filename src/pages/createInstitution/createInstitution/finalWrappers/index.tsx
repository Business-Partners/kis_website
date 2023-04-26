import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logo, WelcomeRightImage } from "../../../../assets";
import { WrapperAlmostDone } from "../styles";

const FinalWrappers: React.FC<{ open: boolean }> = ({ open }) => {
  const [openFinal, setOpenFinal] = useState(false);

  setTimeout(() => {
    setOpenFinal(true);
  }, 5000);

  return (
    <>
      <WrapperAlmostDone flex={open}>
        <img src={logo} alt="kis Logo" />

        {openFinal === true ? (
          <Link to="/docs"> Guia de Utilização </Link>
        ) : (
          <h3>Preparando Tudo. Aguarde...</h3>
        )}

        <img src={WelcomeRightImage} alt="Welcome" />
      </WrapperAlmostDone>
    </>
  );
};

export default FinalWrappers;
