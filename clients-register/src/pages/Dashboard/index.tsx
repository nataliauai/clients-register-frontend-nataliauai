import React from "react";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import api from "../../services/api";
import { DivLand } from "./style";
import "./Landing.css";

export const Dashboard = () => {
  // const [cardContact, setContact] = useState([]);
  const [cardUser, setCardUser] = useState<any>([]);

  useEffect(() => {
    api.get("/").then((res) => {
      setCardUser(res.data);

    });
  }, []);

  // useEffect(() => {
  //   api.get("/contact").then((res) => {
  //     setContact(res.data);
  //   });
  // }, []);

  return (
    <>
      <Header />
      <h1 className="titleDash">
        <span className="colorBrand">Registro de Clientes </span>
         Cadastre seus clientes e contatos de forma rápida
      </h1>
      <div className="landDash">
      <DivLand>
        <h2>Clientes Cadastrados:</h2>

        {cardUser.map((user) => {
          return (
            <li key={user.id}>
              <h4 className="name">Nome:{user.name}</h4>
              <h4 className="email">Email:{user.age}</h4>
              <h4 className="phoneNumber">Telefone:{user.phoneNumber}</h4>
              <h5 className="phoneNumber">UserId:{user.id}</h5>
              <h4>
   
              </h4>
            </li>
          );
        })}
      </DivLand>
      </div>
    </>
  );
};
