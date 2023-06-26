import * as yup from "yup";

export const schema = yup.object({
    userId:yup.string(),
    fullName: yup.string().required('Nome é obrigatório'),
    email: yup
      .string()
      .email('Formato de email invalido')
      .required('Email é obrigatório'),
    phoneNumber: yup.number().required('Telefone é obrigatório'),
});
