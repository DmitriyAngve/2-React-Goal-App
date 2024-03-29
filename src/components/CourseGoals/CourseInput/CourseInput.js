import React, { useState } from "react";

import Button from "../../UI/Button/Button";
// import "./CourseInput.module.css";
// import styled from "styled-components";
import styles from "./CourseInput.module.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  // this state could be an indicator for the user submitted and entered something valid or not (working with a boolean), initially we trust the user
  const [isValid, setIsValid] = useState(true); // as long as is it true - user input is valid

  const goalInputChangeHandler = (event) => {
    // Checking valid input
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // Avoid empty strting then click Add Goal with empty input
    if (enteredValue.trim().length === 0) {
      // use .trim() - to avoid entering spaces, and check the length

      setIsValid(false); // if user input not valid

      return; // return if condition is met
    }
    props.onAddGoal(enteredValue);
  };
  // Use styled component
  // implement red border if the user entered something invalid
  //   return (
  //     <form onSubmit={formSubmitHandler}>
  //       {/* change CSS class dynamically depends on isValid state */}
  //       {/* <FormControl className={!isValid && "invalid"}> */}
  //       <FormControl invalid={!isValid}>
  //         <label>Course Goal</label>
  //         <input type="text" onChange={goalInputChangeHandler} />
  //       </FormControl>
  //       <Button type="submit">Add Goal</Button>
  //     </form>
  //   );
  // };

  // Use CSS Modules
  return (
    <form onSubmit={formSubmitHandler}>
      {/* styles["form-control"] - like that, because strings a valid keys */}
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
