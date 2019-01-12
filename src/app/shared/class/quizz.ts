export default class Quizz {
    private _nickname: string;
    private _avatar: string;
    private _score = 0;
    private _time = 0;

    get nickname(): string {
        return this._nickname;
    }

    set nickname(value: string) {
        this._nickname = value;
    }

    get avatar(): string {
        return this._avatar;
    }

    set avatar(value: string) {
        this._avatar = value;
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
