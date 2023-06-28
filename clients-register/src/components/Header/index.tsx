import React from "react";
import { Link } from "react-router-dom";
import HeaderSty from "./style";

const Header = () => {
  return (
    <HeaderSty>
      <Link to="/users">
        <span>Cadastrar usuários</span>
      </Link>
      <Link to="/contact">
        <span>Cadastrar contatos</span>
      </Link>
      <Link to="/">
        <span>Consultar usuarios cadastrados</span>
      </Link>
    </HeaderSty>
  );
};

export default Header;
