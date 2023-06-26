import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Forms } from "../../components/Forms";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Div } from "./style";
import { schema } from "./schema";
import api from "../../services/api";
import { toast } from "react-toastify";
import Header from "../../components/Header";

export const Contacts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
    api
      .post("/contact", data)
      .then(() => {
        // setCardJogador([...cardJogador]);
        toast.success("Contato cadastrado com sucesso!");
      })
      .catch((err) => toast(err));
  }

  return (
    <>
      <Header/>
      <Div>
        <div className="contentCadastro">
          <header>
            <h2>Registro de Contatos</h2>
            <Link to="/">
              <span className="goback">Voltar</span>
            </Link>
          </header>

          <Forms onSubmit={handleSubmit(onSubmit)}>
            <h1 className="title1">Cadastro de Contatos</h1>
            <label htmlFor="fullName">Nome</label>
            <input
              id="fullName"
              type="text"
              placeholder="Digite seu nome completo..."
              {...register("name")}
            />
            <p className="error">{errors.name?.message}</p>

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              placeholder="Digite seu email completo..."
              {...register("email")}
            />
            <p className="error">{errors.name?.message}</p>

            <label htmlFor="phoneNumber">Telefone</label>
            <input
              id="phoneNumber"
              type="text"
              placeholder="Digite seu telefone..."
              {...register("phoneNumber")}
            />
            <p className="error">{errors.name?.message}</p>

            <label htmlFor="userId">ID do seu Usuário</label>
            <input
              id="userId"
              type="text"
              placeholder="Digite a idade do jogador"
              {...register("userId")}
            />
            <p className="error">{errors.team?.message}</p>

            <button className="btnregister" type="submit">
              Cadastrar
            </button>
          </Forms>
        </div>
      </Div>
    </>
  );
};
