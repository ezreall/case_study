class BXH {
    constructor(game, number, point, ratio, image) {
        this._game = game;
        this._number = number;
        this._point = point;
        this._ratio = ratio;
        this._image = image;
    }

    get game() {
        return this._game;
    }

    set game(value) {
        this._game = value;
    }

    get number() {
        return this._number;
    }

    set number(value) {
        this._number = value;
    }

    get point() {
        return this._point;
    }

    set point(value) {
        this._point = value;
    }

    get ratio() {
        return this._ratio;
    }

    set ratio(value) {
        this._ratio = value;
    }

    get image() {
        return this._image;
    }

    set image(value) {
        this._image = value;
    }
}
