import React from "react";
import { QuestionCard } from "./QuestionCard";
import Carousel from "react-elastic-carousel";
import questions from "./questions.js";

const breakPoints = [{ width: 1, itemsToShow: 1 }];

export const Questionnaire = () => {
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
          />
        ))}
      </Carousel>
    </div>
  );
};
