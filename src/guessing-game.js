class GuessingGame {
   constructor() {}

    setRange(min, max) {
        this._min = min;
        this._max = max;
    }

    guess() {
        return Math.round((this._min + this._max) / 2);
    }

    lower() {
        this._max = this.guess();
    }

    greater() {
        this._min = this.guess();
    }
}

module.exports = GuessingGame;
