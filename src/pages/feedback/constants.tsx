// Number of minutes after which the survey expires
export const EXPIRATION_MINUTES = 30;

export const Question2Labels: { value: number; label: string }[] = [
  { value: 1, label: "very, very low mental effort" },
  { value: 2, label: "very low mental effort" },
  { value: 3, label: "low mental effort" },
  { value: 4, label: "rather low mental effort" },
  { value: 5, label: "neither low nor high mental effort" },
  { value: 6, label: "rather high mental effort" },
  { value: 7, label: "high mental effort" },
  { value: 8, label: "very high mental effort" },
  { value: 9, label: "very, very high mental effort" },
];

export const Question3Options: { value: number; label: string }[] = [
  { value: 1, label: "Not at all" },
  { value: 2, label: "A little" },
  { value: 3, label: "A moderate amount" },
  { value: 4, label: "A lot" },
  { value: 5, label: "A great deal" },
];

export const Question3Labels: { value: number; label: string }[] = [
  { value: 1, label: "I did things I had not intended to" },
  { value: 2, label: "Distractions disturbed my focus" },
  { value: 3, label: "Made mistakes/errors in judgement" },
  { value: 4, label: "Concentrated for short periods of time" },
  { value: 5, label: "Could not express what I wanted to (tip of tongue)" },
  { value: 6, label: "Had difficulty to follow conversations" },
  { value: 7, label: "Daydreamed indtead of listening/engaging" },
  { value: 8, label: "Became impatient" },
  { value: 9, label: "Acted differently than planned" },
  { value: 10, label: "Had difficulty to follow the conversation" },
  { value: 11, label: "Spoke quickly" },
  { value: 12, label: "Read repeatedly" },
  { value: 13, label: "Wonder whether I had used a word correctly" },
  { value: 14, label: "Mind wandered" },
  {
    value: 15,
    label:
      "I found it difficult to stay focused on what's happening in the present",
  },
];

export const ErrorMessages: { [key in "q1" | "q2" | "q3"]: string } = {
  q1: "Please insert a valid code, first 2 letters of mother's name, first 2 letters of father's name, own birthyear (e.g. ANMA1990)",
  q2: "Please choose an option",
  q3: "Please choose an option in every row",
};
