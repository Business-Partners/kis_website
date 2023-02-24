import React from "react";
import { logo } from "../../../assets";
import { Link } from "react-router-dom";
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
        <Link to="/getStarted/createInstitution/keep">
          Adicionar Dados de Login
        </Link>
      </div>
      <footer className="initialPageFooter">
        <u>Termos e Políticas de Privacidade</u>
        <p>Todos os Direitos Reservados</p>
      </footer>
    </div>
  );
};

export default WelcomeInitialPage;
