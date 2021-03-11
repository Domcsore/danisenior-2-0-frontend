import React from "react";
import styled from "@emotion/styled";
import { colours, sizes } from "../helpers/styles";

const Stextarea = styled.textarea`
  background: ${colours.black};
  border: 2px solid ${colours.white};
  color: ${colours.white};
  padding: ${sizes.md};
`;

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label;
}

const Textarea = ({ name, label, ...rest }: TextareaProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Stextarea aria-label={label} name={name} {...rest} />
);

export default Textarea;
