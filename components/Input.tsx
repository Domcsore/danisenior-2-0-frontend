import React from "react";
import styled from "@emotion/styled";
import { colours, sizes } from "../helpers/styles";

const Sinput = styled.input`
  background: ${colours.black};
  border: 2px solid ${colours.white};
  height: ${sizes.xxl};
  color: ${colours.white};
  padding: ${sizes.md};
`;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label;
}

const Input = ({ name, label, ...rest }: InputProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Sinput aria-label={label} name={name} {...rest} />
);

export default Input;
