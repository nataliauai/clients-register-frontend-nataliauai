import * as yup from "yup";

export const schema = yup.object({
    name: yup.string().required('Nome é obrigatório'),
    email: yup
      .string()
      .email('Formato de email invalido')
      .required('Email é obrigatório'),
    phoneNumber: yup.string().required('Telefone é obrigatório'),
  });