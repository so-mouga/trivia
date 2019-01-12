import {Question} from '../../class/question';

export interface QuestionOpentdbInterface {
  response_code: number;
  results: Array<Question>;
}
