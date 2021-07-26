import React from "react";

export const QuestionCard = (props) => {
  return (
    <div className="container">
      <div id="questionTitle">
        <h2>{props.questionTitle}</h2>
        <p>{props.question}</p>
      </div>
      <div>
        <div className="buttonSpacing">
          <button className="buttons">{props.answer1}</button>
        </div>
        <div className="buttonSpacing">
          <button className="buttons">{props.answer2}</button>
        </div>
        <div className="buttonSpacing">
          <button className="buttons">{props.answer3}</button>
        </div>
        <div className="buttonSpacing">
          <button className="buttons">{props.answer4}</button>
        </div>
      </div>
    </div>
  );
};
