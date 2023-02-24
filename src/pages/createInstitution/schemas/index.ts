import * as Yup from "yup";

export const institutionDataSchema = Yup.object().shape({
  name: Yup.string().trim().min(5).required("Name is a required field."),
  nifNumber: Yup.string()
    .trim()
    .max(15)
    .required("Nif Number is a required field."),
  description: Yup.string().trim().required("Description is a required field."),
  size: Yup.string()
    .trim()
    .oneOf(["TINY", "SMALL", "MEDIUM", "BIG", "VERYBIG", "EXTRABIG"])
    .required("The Size is  required Field."),
});

export const contactSchema = Yup.object().shape({
  content: Yup.string().trim().required(),
  contactTypeId: Yup.string().trim().uuid().required(),
});

export const addressSchema = Yup.object().shape({
  address: Yup.string().trim().required(),
  province: Yup.string().trim().required(),
  state: Yup.string().trim().required(),
  country: Yup.string().trim(),
  county: Yup.string().trim(),
  neighborhood: Yup.string().trim(),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().email().trim().required(),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .required("Password Confirmation is required")
    .oneOf([Yup.ref("password")], "Password must much"),
});
