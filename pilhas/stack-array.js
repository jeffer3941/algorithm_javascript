class Stack { 
    constructor() {
        this.items = [];
    }

    push(element) {
        return this.items.push(element);
    }

    pop(element) {
       return this.items.pop(element);
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length
    }

    clear() {
        this.items = [];
    }
}

module.exports = {
    Stack
}