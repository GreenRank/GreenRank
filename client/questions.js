
const questions = [
  {
    category: "mobility_vehicles",
    questionTitle: "Means of transport",
    question: "Which statement is most accurate for you?",
    answers: {
      low: "I walk or ride a bicycle, and I use public transport only occasionally.",
      medium: "I predominately use public transport (2/3) and sometimes walk or ride a bicycle (1/3).",
      high: "I usually drive a car, but I also occasionally use public transport or walk.",
      giant: "I mainly drive a car."
    }
  },
  {
    category: "consumption_food",
    questionTitle: "Food",
    question: "Which statement is most accurate for you?",
    answers: {
      low: "I eat only vegan food.",
      medium: "I mostly eat vegetarian food.",
      high: "I eat meat every other day on average.",
      giant: "I eat meat at almost every meal."
    }
  },
  {
    category: "consumption_shopping",
    question: "Shopping, leisure, culture",
    question: "Which statement is most accurate for you?",
    answers: {
      low: "I purchase new clothing, devices and furniture very rarely (these expenses are 70 dollars a month). Expenses for leisure time, culture and health are below average.",
      medium: "I purchase half of my clothing, devices and furniture second-hand (these expenses are 200 dollars a month). Expenses for leisure time, culture and health are slightly below average.",
      high: "I occasionally purchase new clothing, devices and furniture (these expenses are 250 dollars a month). Expenses for leisure time, culture and health are average (360 euros a month).",
      giant: "I frequently purchase new clothing, devices and furniture (these expenses are 500 dollars a month). Expenses for leisure time, culture and health are slightly above average."
    }
  },
  {
    category: "household_area",
    questionTitle: "Living space",
    question: "Which statement is most accurate for you?",
    answers: {
      low: "I live in a small space (for example, a flat with several people).",
      high: "I live in a large area (e.g. detached house)."
    }
  },
  {
    category: "household_building",
    questionTitle: "Construction standard",
    question: "Which statement is most accurate for you?",
    answers: {
      low: "I live in a renovated, energy-efficient house.",
      high: "The house I inhabit is an older structure."
    }
  },
  {
    category: "household_heating",
    questionTitle: "Heating system",
    question: "Which statement is most accurate for you?",
    answers: {
      low: "Our home is heated using renewable energies (wood, heat pumps, etc.).",
      high: "Our home is heated using fossil fuels (petroleum, natural gas, etc.)."
    }
  }
]

export default questions;

