// import React from "react";
import { QuestionCard } from "./QuestionCard";
import Carousel from "react-elastic-carousel";
import questions from "./questions.js";
import React, { useState } from "react";

const breakPoints = [{ width: 1, itemsToShow: 1 }];

export const Questionnaire = () => {
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

  return (
    <div>
      <Carousel breakPoints={breakPoints}>
        {questions.map((question, index) => (
          <QuestionCard
            id={index}
            key={index}
            questionTitle={question["questionTitle"]}
            question={question["question"]}
            answers={question["answers"]}
            length={questions.length}
            category={questions["category"]}
            setAnswers={setAnswers}
            answersState={answers}
          />
        ))}
      </Carousel>
    </div>
  );
};
