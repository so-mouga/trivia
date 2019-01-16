export class Question {
    private _category: string;
    private _correct_answer: string;
    private _difficulty: string;
    private _incorrect_answers: Array<string>;
    private _question: string;
    private _type: string;

    get category(): string {
        return this._category;
    }

    set category(value: string) {
        this._category = value;
    }

    get correct_answer(): string {
        return this._correct_answer;
    }

    set correct_answer(value: string) {
        this._correct_answer = value;
    }

    get difficulty(): string {
        return this._difficulty;
    }

    set difficulty(value: string) {
        this._difficulty = value;
    }

    get incorrect_answers(): Array<string> {
        return this._incorrect_answers;
    }

    set incorrect_answers(value: Array<string>) {
        this._incorrect_answers = value;
    }

    get question(): string {
        return this._question;
    }

    set question(value: string) {
        this._question = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    all_answers() {
        return this._incorrect_answers.concat(this._correct_answer);
    }
}
