import React from "react";

//

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

export const QuestionCard = (props) => {
  const answers = Object.keys(props.answers).map((rating, index) => {
    return (
      <div className="buttonSpacing" key={index}>
        <input
          type="radio"
          id="html"
          name="climateHabit"
          value={rating}
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
        >
          Submit
        </button>
      )}
    </form>
  );
};
