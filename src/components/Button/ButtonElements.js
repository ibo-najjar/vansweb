import styled from "styled-components";
import { Link } from "react-scroll";

export const Button1 = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#fff" : "#121212")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#121212" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "14px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#de2c33")};
    color: #121212;
  }
`;
