import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Forms } from "../../components/Forms";
import { Link } from "react-router-dom";
import { DivTeam } from "./style";
import { schema } from "./schema";
import Header from "../../components/Header";
import { toast } from "react-toastify";
import api from "../../services/api";


export const User = () => {
  const postUser = async (data) => {
    try {
      await api.post(`/`, data);
      toast.success('Cadastrado com Sucesso!');
    } catch (error) {
      if (error.response.data.message == 'User alredy exists') {
        toast.error('Email já cadastrado!');
      } else {
        toast.error(error.response.data.message);
      }
      console.error(error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });



  return (
    <>
      <Header />
      <DivTeam>
        <div className="contentLogin">
          <h1>Registrar cliente</h1>

          <Forms onSubmit={handleSubmit(postUser)}>
            <h3>Cadastro de clientes</h3>

            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              placeholder="Insira o nome do usuário"
              {...register("name")}
            />
            <p className="error">{errors.name?.message}</p>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Insira o nome do usuário"
              {...register("email")}
            />
            <p className="error">{errors.name?.message}</p>

            <label htmlFor="phoneNumber">Telefone</label>
            <input
              id="phoneNumber"
              type="number"
              placeholder="Insira o nome do usuário"
              {...register("phoneNumber")}
            />
            <p className="error">{errors.name?.message}</p>

            <button className="btnregister" type="submit">
              Cadastrar
            </button>

            <Link to="/contact">
              <p className="btnregister1" type="submit">
                Deseja cadastrar contatos?
              </p>
            </Link>
          </Forms>
        </div>
      </DivTeam>
    </>
  );
};
