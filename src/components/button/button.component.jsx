import React from "react";
import { StyledButton } from "./button.styles";

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
