export interface Question {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: Array<string>;
  question: string;
  type: string;
}

export interface QuestionOpentdbInterface {
  response_code: number;
  results: Array<Question>;
}
