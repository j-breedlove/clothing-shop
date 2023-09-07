import React, { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import { StyledButton } from "../button/button.styles";
import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles";

const SignInForm = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      setUserCredentials({ email: "", password: "" });
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials((prevState) => ({ ...prevState, [name]: value }));
  };

  const signInWithGoogle = () => {
    signInWithGooglePopup();
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          type={"email"}
          required
          onChange={handleChange}
          name={"email"}
          value={email}
        />
        <FormInput
          label={"Password"}
          type={"password"}
          required
          onChange={handleChange}
          name={"password"}
          value={password}
        />
        <ButtonsContainer>
          <StyledButton type={"submit"}>Sign In</StyledButton>
          <StyledButton
            type={"button"}
            buttonType={"google"}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </StyledButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
