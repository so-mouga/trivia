export default class Quizz {
    private _nickname: string;
    private _avatar_url: string;
    private _score = 0;
    private _time = 0;

    get nickname(): string {
        return this._nickname;
    }

    set nickname(value: string) {
        this._nickname = value;
    }

    get avatar_url(): string {
        return this._avatar_url;
    }

    set avatar_url(value: string) {
        this._avatar_url = value;
    }

    get score(): number {
        return this._score;
    }

    set score(value: number) {
        this._score = value;
    }

    get time(): number {
        return this._time;
    }

    set time(value: number) {
        this._time = value;
    }
}
