import { styled } from "styled-components";

export const NavCep = styled.header`
  display: flex;
  width: 100%;
  height: 78px;
  justify-content: center;
  position: fixed;
  box-shadow: 0px 1px 0px 0px #00FA19;

  nav {
    width: 90%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 71px;
  }

  a {
    text-decoration: none;
    color: var(--black);
    font-size: var(--text2);
    font-weight: bold;

    &:visited {
      color: var(--black);
    }
  }
`;
