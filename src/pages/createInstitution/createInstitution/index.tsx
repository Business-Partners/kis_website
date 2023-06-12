import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError, AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { api } from "../../../services/api";
import WelcomeHeader from "../components/welcomeHeader";
import { useGetContactTypes } from "../hooks/getTypeContact";
import { schema } from "../schemas";
import Styles from "../styles/index.module.scss";
import FinalWrappers from "./finalWrappers";
import {
  InstitutionAddress,
  InstitutionContact,
  InstitutionData,
  InstitutionSize,
} from "./types";

type FormData = Yup.InferType<typeof schema>;

const CreateInstitution: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [openFinalWrapper, setOpenFinalWrapper] = useState(false);
  const [typeContactTelefone, typeContactEmail] = useGetContactTypes();
  const [institutionContacts, setInstitutionContacts] = useState<
    InstitutionContact[]
  >([]);
  const [institutionData, setInstitutionData] = useState<InstitutionData>(
    {} as InstitutionData
  );
  const [institutionAddress, setInstituionAddress] =
    useState<InstitutionAddress>({} as InstitutionAddress);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    setLoading(true);
    setInstitutionContacts([
      {
        content: data.email,
        contactTypeId: typeContactEmail?.id,
      },
      {
        content: data.phone,
        contactTypeId: typeContactTelefone?.id,
      },
      {
        content: data.altPhone,
        contactTypeId: typeContactTelefone?.id,
      },
    ]);

    setInstituionAddress({
      address: data.address,
      county: data.county,
      country: data.country,
      province: data.province,
      state: data.state,
      neighborhood: data.neighborhood,
    });

    setInstitutionData({
      name: data.name,
      nifNumber: data.nifNumber,
      description: data.description,
      size: data.size,
    });
  };

  useEffect(() => {
    if (institutionData.name) CreateInstitution();
  }, [institutionData]);

  const CreateInstitution = async () => {
    await api
      .post("/i", {
        institutionData,
        institutionContacts,
        institutionAddress,
      })
      .then((res: AxiosResponse) => {
        console.log(res);
        toast.success("Instituição criada com sucesso, Redirecionando.");
        setTimeout(() => {
          setOpenFinalWrapper(true);
        }, 3000);
      })
      .catch((err) => {
        if (err instanceof AxiosError) {
          toast.error(err.response?.data?.message);
        } else {
          toast.error(err.code + " " + err.message);
        }
      });
    setLoading(false);
  };

  return (
    <>
      <div className={Styles.CreateContainer}>
        <WelcomeHeader who="Dados da Instituição" />

        <div className={Styles.formContainer}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className={Styles.institutionFormFieldset}>
              <legend>Instituição</legend>

              <div className={Styles.twoLayout}>
                <div className="elements2">
                  <input {...register("name")} />
                  <label htmlFor="name">Nome</label>
                  <span>{errors.name?.message}</span>
                </div>

                <div className="elements2">
                  <select
                    defaultValue={InstitutionSize.SMALL}
                    {...register("size")}
                  >
                    <option value="TINY">Muito Pequena</option>
                    <option value="SMALL">Pequena</option>
                    <option value="MEDIUM">Média</option>
                    <option value="BIG">Grande</option>
                    <option value="VERYBIG">Muito Grande</option>
                    <option value="EXTRABIG">Extra Grande</option>
                  </select>
                  <label htmlFor="tamanho">Tamanho</label>
                  <span>{errors.size?.message}</span>
                </div>
              </div>

              <div className={Styles.twoLayout}>
                <div className="elements2">
                  <input
                    type="number"
                    id="nifNumber"
                    {...register("nifNumber")}
                  />
                  <label htmlFor="nif">NIF/Número</label>
                  <span>{errors.nifNumber?.message}</span>
                </div>

                <div className="elements2">
                  <input
                    type="email"
                    id="enterprise_email"
                    {...register("email")}
                  />
                  <label htmlFor="enterprise_email">Enterprise E-mail</label>
                  <span>{errors.email?.message}</span>
                </div>
              </div>
            </fieldset>

            <fieldset className={Styles.institutionFormFieldset}>
              <legend>Endereço</legend>

              <div className={Styles.oneLayout}>
                <input type="text" {...register("address")} />
                <label htmlFor="endereco_1">Endereço 1</label>
                <span>{errors.address?.message}</span>
              </div>

              <div className={Styles.twoLayout}>
                <div className="elements2">
                  <input type="text" id="cidade" {...register("state")} />
                  <label>Cidade</label>
                  <span>{errors.state?.message}</span>
                </div>

                <div className="elements2">
                  <input type="text" id="provincia" {...register("province")} />
                  <label htmlFor="provincia">Província</label>
                  <span>{errors.province?.message}</span>
                </div>
              </div>
              <div className={Styles.twoLayout}>
                <div className="elements2">
                  <input
                    type="text"
                    id="bairro"
                    {...register("neighborhood")}
                  />
                  <label htmlFor="bairro">Bairro</label>
                  <span>{errors.neighborhood?.message}</span>
                </div>

                <div className="elements2">
                  <input type="text" id="municipio" {...register("county")} />
                  <label htmlFor="municipio">Município</label>
                  <span>{errors.county?.message}</span>
                </div>
              </div>
              <div className={Styles.twoLayout}>
                <div className="elements2">
                  <input type="number" id="telefone" {...register("phone")} />
                  <label htmlFor="telefone">Telefone</label>
                  <span>{errors.phone?.message}</span>
                </div>

                <div className="elements2">
                  <input
                    type="number"
                    id="telefone_alternativo"
                    {...register("altPhone")}
                  />
                  <label htmlFor="telefone_alternativo">
                    Telefone - Alternativo
                  </label>
                  <span>{errors.altPhone?.message}</span>
                </div>
              </div>
            </fieldset>

            <fieldset className={Styles.institutionFormFieldset}>
              <legend>Descrição</legend>

              <div className={Styles.oneLayout}>
                <div id="description">
                  <textarea {...register("description")}></textarea>
                </div>
                <span>{errors.description?.message}</span>
              </div>

              <button type="submit" disabled={loading}>
                Próximo
              </button>
            </fieldset>
          </form>
        </div>
      </div>

      <FinalWrappers open={openFinalWrapper} />
    </>
  );
};

export default CreateInstitution;
