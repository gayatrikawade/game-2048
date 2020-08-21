export class Cell {
    _value = null;

    set value(val: number) {
        this._value = val;
    }

    get value() {
        return this._value;
    }

    get isEmpty(): boolean {
        return this.value === null;
    };
}