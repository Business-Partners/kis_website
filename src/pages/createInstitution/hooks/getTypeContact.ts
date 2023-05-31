import { useEffect, useState } from "react";
import { api } from "../../../services/api";

const useGetContactTypes = function (): [
  typeContactTelefone: any,
  typeContactEmail: any
] {
  const [typeContactTelefone, setTelefone] = useState({});
  const [typeContactEmail, setEmail] = useState({});

  async function GetData() {
    try {
      const getTelefoneType = await api.get("/typeContact/desc/telefone");
      setTelefone(getTelefoneType.data);

      const getEmailType = await api.get("/typeContact/desc/email");
      setEmail(getEmailType.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    GetData();
  }, []);

  return [typeContactTelefone, typeContactEmail];
};

export { useGetContactTypes };
