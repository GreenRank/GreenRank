import React, { useState } from "react";

//

const [answers, setAnswers] = useState([
  {
    mobility_vehicles: "",
    consumption_food: "",
    consumption_shopping: "",
    household_area: "",
    household_building: "",
    household_heating: "",
  },
]);

const QuestionCard = (props) => {
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

  const answers = Object.keys(props.answers).map((rating, index) => {
    return (
      <div className="buttonSpacing" key={index}>
        <input
          type="radio"
          id="html"
          name="climateHabit"
          value={rating}
          onChange={setAnswers}
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
          onSubmit={(setAnswers, submitForm)}
        >
          Submit
        </button>
      )}
    </form>
  );
};
