import React from "react";
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer {...otherProps} />
      {label && (
        <FormInputLabel value={otherProps.value}>{label}</FormInputLabel>
      )}
    </GroupContainer>
  );
};

export default FormInput;
