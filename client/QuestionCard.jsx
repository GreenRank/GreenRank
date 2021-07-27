import React, { useState } from "react";

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

  const updateState = (event) => {};

  const answers = Object.keys(props.answers).map((rating, index) => {
    const category = props.category;

    return (
      <div className="buttonSpacing" key={index}>
        <input
          type="radio"
          id="html"
          name="climateHabit"
          value={rating}
          answer={props.answers[rating]}
          // onChange={props.setAnswers({ category: event.target.answer })}
          onChange={updateState}
        ></input>
        <label className="buttons">{props.answers[rating]}</label>
      </div>
    );
  });

  return (
    <form className="container">
      <div id="questionTitle">
        <h2>{props.questionTitle}</h2>
        <p>{props.question}</p>
      </div>
      {answers}
      {props.id === 5 && (
        <button
          type="submit"
          value="Submit"
          className="buttons" /*onClick={this.state.submitForm}*/
          onClick={() =>
            console.log(
              "clicked; here is answers state obj: ",
              props.answersState
            )
          }
          // onSubmit={(submitForm)}
        >
          Submit
        </button>
      )}
    </form>
  );
};
