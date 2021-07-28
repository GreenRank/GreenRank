import React, { useState } from "react";
import questions from "./questions.js";

export const QuestionCard = (props) => {
  const submitForm = () => {
    const body = this.props.setAnswers;

    fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };

  // const updateState = (event) => {};

  // send keys to the API
  // itaerate thru the keys of answers objects
  const category = props.category;
  const answersPerCard = Object.keys(props.answersArray).map(
    (rating, index) => {
      return (
        <div className="buttonSpacing" key={index}>
          <input
            type="radio"
            id="html"
            name="climateHabit"
            // value={rating}
            answer={props.answersArray[rating]}
            onChange={(e) => {
              console.log(
                `for this category: ${props.category}, my choice is ${rating}`
              );
              props.setAnswers({
                ...props.answersState,
                [props.category]: rating,
              });
              console.log("current state: ", props.answersState);
            }}
            // onChange={updateState}
          ></input>
          <label className="buttons">{props.answersArray[rating]}</label>
        </div>
      );
    }
  );

  return (
    <form className="container">
      <div id="questionTitle">
        <h2>{props.questionTitle}</h2>
        <p>{props.question}</p>
      </div>
      {answersPerCard}
      {props.id === 5 && (
        <button
          // value="Submit"
          className="buttons" /*onClick={this.state.submitForm}*/
          onClick={() =>
            console.log(
              "clicked; here is answers state obj: ",
              props.answersState
            )(submitForm)
          }
          // onSubmit={(submitForm)}
        >
          Submit
        </button>
      )}
    </form>
  );
};
