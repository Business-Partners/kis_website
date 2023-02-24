import { AxiosError, AxiosResponse } from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";
import WelcomeHeader from "../components/welcomeHeader";
import { useGetContactTypes } from "../hooks/getTypeContact";
import { addressSchema, institutionDataSchema } from "../schemas";
import Styles from "../styles/index.module.scss";
import {
  Contacts,
  InstitutionAddress,
  InstitutionContact,
  InstitutionData,
  InstitutionSize,
} from "./types";

const CreateInstitution: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [typeContactTelefone, typeContactEmail] = useGetContactTypes();
  const [contacts, setContacts] = useState<Contacts>({} as Contacts);
  const [institutionContacts, setInstitutionContacts] = useState<
    InstitutionContact[]
  >([]);
  const [institutionData, setInstitutionData] = useState<InstitutionData>(
    {} as InstitutionData
  );
  const [institutionAddress, setInstituionAddress] =
    useState<InstitutionAddress>({} as InstitutionAddress);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setInstitutionContacts([
      {
        content: contacts.phone,
        contactTypeId: typeContactTelefone?.id,
      },
      {
        content: contacts.alternativePhone,
        contactTypeId: typeContactTelefone?.id,
      },
      {
        content: contacts.email,
        contactTypeId: typeContactEmail?.id,
      },
    ]);

    ValidateFields().then((res) => {
      if (res === false) toast.error("Preencha Corretamente os Campos!");
      else {
        CreateInstitution();
      }
    });
  };

  const ValidateFields = async () => {
    const validateData = await institutionDataSchema.isValid(institutionData);

    const validateAddress = await addressSchema.isValid(institutionAddress);

    return validateData && validateAddress;
  };

  const CreateInstitution = async () => {
    await api
      .post("/institution", {
        institutionData,
        institutionContacts,
        institutionAddress,
      })
      .then((res: AxiosResponse) => {
        console.log(res);
        toast.success("Instituição criada com sucesso, Redirecionando.");
        setTimeout(() => {
          navigate(`/getStarted/createInstitution/${res.data?.id}`);
        }, 3000);
      })
      .catch((err: AxiosError) => {
        toast.error(err.response?.data?.message);
      });
    setLoading(false);
  };

  return (
    <div className={Styles.CreateContainer}>
      <WelcomeHeader who="Dados da Instituição" />

      <div className={Styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <fieldset className={Styles.institutionFormFieldset}>
            <legend>Instituição</legend>

            <div className={Styles.twoLayout}>
              <div className="elements2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={institutionData.name}
                  required
                  onChange={(e) =>
                    setInstitutionData({
                      ...institutionData,
                      name: e.target.value,
                    })
                  }
                />
                <label htmlFor="name">Nome</label>
              </div>

              <div className="elements2">
                <select
                  name="tamanho"
                  id="tamanho"
                  required
                  defaultValue={InstitutionSize.SMALL}
                  onChange={(e) =>
                    setInstitutionData({
                      ...institutionData,
                      size: InstitutionSize[e.target.value],
                    })
                  }
                >
                  <option value="TINY">Muito Pequena</option>
                  <option value="SMALL">Pequena</option>
                  <option value="MEDIUM">Média</option>
                  <option value="BIG">Grande</option>
                  <option value="VERYBIG">Muito Grande</option>
                  <option value="EXTRABIG">Extra Grande</option>
                </select>
                <label htmlFor="tamanho">Tamanho</label>
              </div>
            </div>

            <div className={Styles.twoLayout}>
              <div className="elements2">
                <input
                  type="number"
                  name="nifNumber"
                  id="nifNumber"
                  pattern="[0-9]*"
                  required
                  value={institutionData.nifNumber}
                  onChange={(e) =>
                    setInstitutionData({
                      ...institutionData,
                      nifNumber: e.target.value,
                    })
                  }
                />
                <label htmlFor="nif">NIF/Número</label>
              </div>

              <div className="elements2">
                <input
                  type="email"
                  name="enterprise_email"
                  id="enterprise_email"
                  required
                  value={contacts.email}
                  onChange={(e) =>
                    setContacts({ ...contacts, email: e.target.value })
                  }
                />
                <label htmlFor="enterprise_email">Enterprise E-mail</label>
              </div>
            </div>
          </fieldset>

          <fieldset className={Styles.institutionFormFieldset}>
            <legend>Endereço</legend>

            <div className={Styles.oneLayout}>
              <input
                type="text"
                name="endereco_1"
                required
                value={institutionAddress.address}
                onChange={(e) =>
                  setInstituionAddress({
                    ...institutionAddress,
                    address: e.target.value,
                  })
                }
              />
              <label htmlFor="endereco_1">Endereço 1</label>
            </div>

            <div className={Styles.twoLayout}>
              <div className="elements2">
                <input
                  type="text"
                  name="cidade"
                  id="cidade"
                  required
                  value={institutionAddress.state}
                  onChange={(e) =>
                    setInstituionAddress({
                      ...institutionAddress,
                      state: e.target.value,
                    })
                  }
                />
                <label>Cidade</label>
              </div>

              <div className="elements2">
                <input
                  type="text"
                  name="provincia"
                  id="provincia"
                  required
                  value={institutionAddress.province}
                  onChange={(e) =>
                    setInstituionAddress({
                      ...institutionAddress,
                      province: e.target.value,
                    })
                  }
                />
                <label htmlFor="provincia">Província</label>
              </div>
            </div>
            <div className={Styles.twoLayout}>
              <div className="elements2">
                <input
                  type="text"
                  name="bairro"
                  id="bairro"
                  value={institutionAddress.neighborhood}
                  onChange={(e) =>
                    setInstituionAddress({
                      ...institutionAddress,
                      neighborhood: e.target.value,
                    })
                  }
                />
                <label htmlFor="bairro">Bairro</label>
              </div>

              <div className="elements2">
                <input
                  type="text"
                  name="municipio"
                  id="municipio"
                  value={institutionAddress.county}
                  onChange={(e) =>
                    setInstituionAddress({
                      ...institutionAddress,
                      county: e.target.value,
                    })
                  }
                />
                <label htmlFor="municipio">Município</label>
              </div>
            </div>
            <div className={Styles.twoLayout}>
              <div className="elements2">
                <input
                  type="number"
                  name="telefone"
                  id="telefone"
                  required
                  value={contacts.phone}
                  onChange={(e) =>
                    setContacts({
                      ...contacts,
                      phone: e.target.value,
                    })
                  }
                />
                <label htmlFor="telefone">Telefone</label>
              </div>

              <div className="elements2">
                <input
                  type="number"
                  name="telefone_alternativo"
                  id="telefone_alternativo"
                  value={contacts.alternativePhone}
                  onChange={(e) =>
                    setContacts({
                      ...contacts,
                      alternativePhone: e.target.value,
                    })
                  }
                  required
                />
                <label htmlFor="telefone_alternativo">
                  Telefone - Alternativo
                </label>
              </div>
            </div>
          </fieldset>

          <fieldset className={Styles.institutionFormFieldset}>
            <legend>Descrição</legend>

            <div className={Styles.oneLayout}>
              <div id="description">
                <textarea
                  name="description"
                  value={institutionData.description}
                  onChange={(e) =>
                    setInstitutionData({
                      ...institutionData,
                      description: e.target.value,
                    })
                  }
                ></textarea>
              </div>
            </div>

            {/* <Link to="/getStarted/superUserLogin">Próximo</Link> */}
            <button type="submit" disabled={loading}>
              {" "}
              Próximo{" "}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default CreateInstitution;
