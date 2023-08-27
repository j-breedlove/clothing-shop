import React from "react";
import "./button.styles.scss";

/*
Types of buttons:
- Google Sign In
- inverted
- default
 */

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};
const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <div>
      <button
        className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
