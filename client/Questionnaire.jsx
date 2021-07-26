import React from "react";
import { QuestionCard } from "./QuestionCard";

export const Questionnaire = () => {
  return (
    <div>
      <QuestionCard
        questionTitle={"Means of transport"}
        question={"Which statement is most accurate for you?"}
        answer1={
          "I walk or ride a bicycle, and I use public transport only occasionally."
        }
        answer2={
          "I predominately use public transport (2/3) and sometimes walk or ride a bicycle (1/3)."
        }
        answer3={
          "I usually drive a car, but I also occasionally use public transport or walk."
        }
        answer4={"I mainly drive a car."}
      />
      <QuestionCard
        questionTitle={"Food"}
        question={"Which statement is most accurate for you?"}
        answer1={"I eat only vegan food."}
        answer2={"I mostly eat vegetarian food."}
        answer3={"I eat meat every other day on average."}
        answer4={"I eat meat at almost every meal."}
      />
      <QuestionCard
        questionTitle={"Shopping, leisure, culture"}
        question={"Which statement is most accurate for you?"}
        answer1={
          "I purchase new clothing, devices and furniture very rarely (these expenses are 60 euros a month). Expenses for leisure time, culture and health are below average."
        }
        answer2={
          "I purchase half of my clothing, devices and furniture second-hand (these expenses are 170 euros a month). Expenses for leisure time, culture and health are slightly below average."
        }
        answer3={
          "I occasionally purchase new clothing, devices and furniture (these expenses are 210 euros a month). Expenses for leisure time, culture and health are average (360 euros a month)."
        }
        answer4={
          "I frequently purchase new clothing, devices and furniture (these expenses are 420 euros a month). Expenses for leisure time, culture and health are slightly above average."
        }
      />
      <QuestionCard
        questionTitle={"Living space"}
        question={"Which statement is most accurate for you?"}
        answer1={
          "I live in a small space (for example, a flat with several people)."
        }
        answer2={"I live in a large area (e.g. detached house)."}
      />
      <QuestionCard
        questionTitle={"Construction standard"}
        question={"Which statement is most accurate for you?"}
        answer1={"I live in a renovated, energy-efficient house."}
        answer2={"The house I inhabit is an older structure."}
      />
      <QuestionCard
        questionTitle={"Heating system"}
        question={"Which statement is most accurate for you?"}
        answer1={
          "Our home is heated using renewable energies (wood, heat pumps, etc.)."
        }
        answer2={
          "Our home is heated using fossil fuels (petroleum, natural gas, etc.)."
        }
      />
    </div>
  );
};
