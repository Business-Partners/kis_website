import { AxiosError, AxiosResponse } from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";
import WelcomeHeader from "../components/welcomeHeader";
import Styles from "../styles/index.module.scss";

const KeepRegister: React.FC = () => {
  const [nifNumber, setNifNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    getInstitution();
  };

  const getInstitution = async () => {
    await api
      .get(`/institution/nifNumber/${nifNumber}`)
      .then((res: AxiosResponse) => {
        toast.success("Instituição Encontrada. Redirecionando...");
        setTimeout(() => {
          navigate(`/getStarted/createInstitution/${res.data?.id}`);
        }, 3000);
      })
      .catch((err: AxiosError) => {
        toast.error(err.response?.data?.message);
      });
  };

  return (
    <div className={Styles.CreateContainer}>
      <WelcomeHeader who="Continuar Cadastro" />
      <div className={Styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <fieldset className={Styles.superUserLoginFormFieldset}>
            <legend> Nif ou Número da Instituição </legend>
            <div className={Styles.oneLayout}>
              <div className="elements1">
                <input
                  id="nifNumber"
                  name="nifNumber"
                  required
                  maxLength={15}
                  value={nifNumber}
                  onChange={(e) => setNifNumber(e.target.value)}
                />
                <label htmlFor="nifNumber"> Nif/Número </label>
              </div>

              <button type="submit"> Continuar </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default KeepRegister;
