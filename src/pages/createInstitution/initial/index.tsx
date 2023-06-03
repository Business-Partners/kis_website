import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../../assets";
import Styles from "../styles/index.module.scss";

const WelcomeInitialPage: React.FC = () => {
  return (
    <div className={Styles.InitialPageContainer}>
      <img src={logo} alt="Logo" />
      <h1>Bem-Vindo ao KIS</h1>
      <h4>Kindergarten Integrated System</h4>
      <div className="buttonsContainer">
        <Link to="/getStarted/createInstitution">Começar</Link>
        <Link to="/docs">Documentação</Link>
      </div>
      <footer className="initialPageFooter">
        <u>Termos e Políticas de Privacidade</u>
        <p>Todos os Direitos Reservados</p>
      </footer>
    </div>
  );
};

export default WelcomeInitialPage;
