class Range {
    constructor(start, end) {
        this.value = start;
        this.end = end;
    }

    [Symbol.iterator]() {return this;}

    next() {
        if (this.value < this.end) {
            return {done: false, value: this.value++}
        }
        return {done: true, value: undefined}
    }
}

for (let v of new Range(0, 3)) { 
    console.log(v);
}