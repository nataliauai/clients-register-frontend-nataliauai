import styled from "styled-components";

export const DivTeam = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;

  h1 {
    color: var(--color-primary);
    text-align: center;
    padding-left: 20px;
    margin:15px;
  }

  h3 {
    text-align: center;
    font-size: 28px;
  }

  .contentTeam {
    height: 100%;
    width: 30%;
  }

  .account {
    text-align: center;
  }
  .error {
    margin-left: 10px;
    color: var(--color-grey1);
    font-size: 12px;
  }
  .btnregister {
    width: 260px;
    height: 40px;
    background-color: var(--color-grey1);
    margin: 20px;
    color: white;
    text-align: center;
  }
  .btnregister1 {
    width: 260px;
    height: 40px;
    background-color: var(--color-grey1);
    margin: 20px;
    padding-top: 10px;
    color: white;
    text-align: center;
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 22px;
    }

    header {
      width: 90%;
    }

    .contentTeam {
      width: 100%;
      padding: 10px;
      margin-left: 15px;
      font-size: 14px;
    }

    button {
      font-size: 14px;
    }
  }
`;
