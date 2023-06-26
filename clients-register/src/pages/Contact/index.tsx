import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Forms } from "../../components/Forms";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Div } from "./style";
import { schema } from "./schema";
import Header from "../../components/Header";
import { toast } from "react-toastify";
import api from "../../services/api";


export const Contacts = () => {
  const postContact = async (data) => {
    try {
      console.log(data)
      await api.post(`/contact`, data);
      toast.success('Cadastrado com Sucesso!');
    } catch (error: any) {
      if (error.response.data.message == 'Contact alredy exists') {
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
      <Header/>
      <Div>
        <div className="contentCadastro">
          <header>
            <h2>Registro de Contatos</h2>
            <Link to="/">
              <span className="goback">Voltar</span>
            </Link>
          </header>

          <Forms onSubmit={handleSubmit(postContact)}>
            <h1 className="title1">Cadastro de Contatos</h1>
            <label htmlFor="fullName">Nome</label>
            <input
              id="fullName"
              type="text"
              placeholder="Digite seu nome completo..."
              {...register("fullName")}
            />
            <p className="error">{errors.fullName?.message}</p>

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              placeholder="Digite seu email completo..."
              {...register("email")}
            />
            <p className="error">{errors.email?.message}</p>

            <label htmlFor="phoneNumber">Telefone</label>
            <input
              id="phoneNumber"
              type="text"
              placeholder="Digite seu telefone..."
              {...register("phoneNumber")}
            />
            <p className="error">{errors.phoneNumber?.message}</p>

            <label htmlFor="userId">ID do seu Usuário</label>
            <input
              id="userId"
              type="text"
              placeholder="Digite o id do usuário"
              {...register("userId")}
            />
            <p className="error">{errors.userId?.message}</p>

            <button className="btnregister" type="submit">
              Cadastrar
            </button>
          </Forms>
        </div>
      </Div>
    </>
  );
};
