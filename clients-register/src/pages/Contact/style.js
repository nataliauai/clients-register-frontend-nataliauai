import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  header {
    display: flex;
    justify-content: space-between;
   
  }

  h2 {
    color: var(--color-primary);
  }

  .contentCadastro {
    height: 100%;
    width: 30%;
  }

  .goback {
    width: 400px;
    height: 30px;
    text-decoration: none;
    background-color: var(--color-grey3);
    color: var(--color-grey0);
    border-radius: 4px;
    cursor: pointer;
  }

  .btnregister {
    width: 94%;
    height: 50px;
    background-color: var(--color-grey1);
    margin: 20px 10px;
  }

  .error {
    margin-left: 10px;
    color: var(--color-grey1);
    font-size: 12px;
  }
  .title1{
    font-size: 25px;
    text-align:center;
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 22px;
    }

    header {
      width: 90%;
    }

    div {
     
      padding: 10px;
      margin-left: 15px;
      font-size: 14px;
    }

    button {
      font-size: 14px;
    }
    .btnregister {
      width: 200px;
      height: 40px;
      background-color: var(--color-grey1);
      margin: 20px;
    }
    .contentCadastro {
    height: 100%;
    width: 90%;
  }

  }
`;
