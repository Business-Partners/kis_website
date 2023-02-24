import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { WelcomeRightImage } from "../../assets";
import CreateInstitution from "./createInstitution";
import WelcomeInitialPage from "./initial";
import InstitutionLoginData from "./InstitutionLogin";
import KeepRegister from "./keepRegister";
import Styles from "./styles/index.module.scss";

const Welcome: React.FC = () => {
  return (
    <>
      <section className={Styles.wrapper}>
        <div className={Styles.mainContainer}>
          <Routes>
            <Route path="/" element={<WelcomeInitialPage />} />
            <Route path="/createInstitution" element={<CreateInstitution />} />
            <Route
              path="/createInstitution/:institutionId"
              element={<InstitutionLoginData />}
            />
            <Route path="/createInstitution/keep" element={<KeepRegister />} />
            <Route path="*" element={<Navigate to="/getStarted" />} />
          </Routes>
        </div>
        <div className={Styles.secondContainer}>
          <img src={WelcomeRightImage} alt="Welcome To Kis" />
        </div>
      </section>
    </>
  );
};

export default Welcome;