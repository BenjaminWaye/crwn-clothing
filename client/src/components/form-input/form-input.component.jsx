import React from "react";
import Styled, { css } from "styled-components";

const FormInput = ({ handleChange, label, className, ...otherProps }) => (
  <div className={className}>
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

const subColor = "grey";
const mainColor = "black";

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

const StyledFormInput = Styled(FormInput)`

  position: relative;
  margin: 45px 0;

  .form-input {
    background: none;
    background-color: white;
    color: ${subColor};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${subColor};
    margin: 25px 0;

    &:focus {
      outline: none;
    }

    &:focus ~ label {
      ${shrinkLabelStyles};
    }
  }

  input[type="password"] {
    letter-spacing: 0.3em;
  }

  .form-input-label {
    color: ${subColor};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    &.shrink {
      ${shrinkLabelStyles};
    }
  }
`;

export default StyledFormInput;
