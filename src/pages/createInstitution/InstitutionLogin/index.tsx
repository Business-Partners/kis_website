import { AxiosError, AxiosResponse } from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../services/api";
import WelcomeHeader from "../components/welcomeHeader";
import { loginSchema } from "../schemas";
import Styles from "../styles/index.module.scss";
import FinalWrappers from "./finalWrappers";
import { LoginData } from "./types";

const InstitutionLoginData: React.FC = () => {
  const { institutionId } = useParams();
  const navigate = useNavigate();
  const [openFinalWrapper, setOpenFinalWrapper] = useState(false);
  const [loginData, setLoginData] = useState<LoginData>({} as LoginData);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (ValidateFields()) {
      CreateInstitutionLoginData();
    }
  };

  const ValidateFields = (): boolean => {
    if (loginData.password !== loginData.confirmPassword) {
      toast.error("As palavras-passe devem ser iguais.");
      return false;
    }

    if (!loginSchema.isValidSync(loginData)) {
      toast.error("Preencha os Campos Corretamente.");
      return false;
    }

    return true;
  };

  const CreateInstitutionLoginData = async () => {
    await api
      .post("/loginData", {
        email: loginData.email,
        password: loginData.password,
        institutionId,
      })
      .then((res: AxiosResponse) => {
        toast.success(
          "Dados de Login Adicionados Com sucesso. Redirecionando."
        );
        setTimeout(() => {
          setOpenFinalWrapper(true);
        }, 3000);
      })
      .catch((err: AxiosError) => {
        toast.error(err?.response?.data.message);
        console.log(err);
      });
  };

  return (
    <>
      <div className={Styles.CreateContainer}>
        <WelcomeHeader who="Dados do Super User" />
        <div className={Styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <fieldset className={Styles.superUserLoginFormFieldset}>
              <legend>Informações de Login - Super User</legend>
              <div className={Styles.oneLayout}>
                <div className="elements1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={loginData.email}
                    onChange={(e) =>
                      setLoginData({ ...loginData, email: e.target.value })
                    }
                    required
                  />
                  <label htmlFor="email">Email</label>
                </div>

                <div className="elements1">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    minLength={8}
                    maxLength={16}
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                    required
                  />
                  <label htmlFor="password">Password</label>
                </div>

                <div className="elements1">
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    minLength={8}
                    maxLength={16}
                    value={loginData.confirmPassword}
                    onChange={(e) =>
                      setLoginData({
                        ...loginData,
                        confirmPassword: e.target.value,
                      })
                    }
                    required
                  />
                  <label htmlFor="confirmPassword">
                    Confirmar Palavra Passe
                  </label>
                </div>
              </div>

              <button type="submit">Finalizar</button>
            </fieldset>
          </form>
        </div>
      </div>
      <FinalWrappers open={openFinalWrapper} />
    </>
  );
};

export default InstitutionLoginData;
