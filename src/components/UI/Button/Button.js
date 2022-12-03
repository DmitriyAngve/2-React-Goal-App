// Styled-component
// import styled from "styled-components";

// // attacked template literal. Button is a method of this "styled" object. Styled object importing from style components and we can sccess the button method. This will be executed as a method behind the scenes (styled.p; styled.h2 and other...)
// const Button = styled.button`
//   width: 100%
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

import React from "react";
import styles from "./Button.module.css"; // .module - a signal to the underlyung compilation process to transform to code so that CSS Modules work

const Button = (props) => {
  return (
    // styles from CSS Module and property is a each class from css file (creates unique class with unique hash - Button__button_hash)
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
