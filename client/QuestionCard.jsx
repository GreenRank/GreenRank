import React from "react";

// 

const submitForm = () => {

  const body = this.props.setAnswers

  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  
}

export const QuestionCard = (props) => {
  return (
    <form className="container">
      <div id="questionTitle">
        <h2>{props.questionTitle}</h2>
        <p>{props.question}</p>
      </div>
      <div>
        <div className="buttonSpacing">
          <input type="radio" id="html" name="climateHabit" value="low"></input>
          <label className="buttons">{props.answer1}</label>
        </div>
        <div className="buttonSpacing">
          <input type="radio" id="html" name="climateHabit" value="medium"></input>
          <label className="buttons">{props.answer2}</label>
        </div>
        <div className="buttonSpacing">
          <input type="radio" id="html" name="climateHabit" value="high"></input>
          <label className="buttons">{props.answer3}</label>
        </div>
        <div className="buttonSpacing">
          <input type="radio" id="html" name="climateHabit" value="giant"></input>
          <label className="buttons">{props.answer4}</label>
        </div>
      </div>
    </form>
  );
};
