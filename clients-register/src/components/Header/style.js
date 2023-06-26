import styled from "styled-components";

const HeaderSty = styled.header`
  display: flex;
  justify-content: space-around;
  padding: 15px;
  align-items: center;
  background-color: var(--color-primary);
  text-color: white;
  text-decoration: none;
  span{
    color:white;
  }


  @media screen and (min-width: 768px) {
    .rightHeader {
      gap: 2rem;
    }
  }
`;

export default HeaderSty;
