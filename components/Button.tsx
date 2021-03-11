import React from "react";
import styled from "@emotion/styled";

import { colours, sizes } from "../helpers/styles";

const Sbutton = styled.button`
  background: ${colours.white};
  color: ${colours.black};
  height: ${sizes.xxl};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${sizes.xxl};
  font-family: "Caveat", cursive;
  font-size: ${sizes.lg};
  border: none;
`;

const Button: React.FC = ({ children }) => <Sbutton>{children}</Sbutton>;

export default Button;
