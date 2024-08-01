"use strict";
class Word {
    constructor(term, definition) {
        this.term = term;
        this.definition = definition;
    }
    getTerm() {
        return this.term;
    }
    getDefinition() {
        return this.definition;
    }
}
class Computer {
    constructor() {
        this.dictionary = {};
    }
    addWordInDictionay(word) {
        if (this.dictionary[word.getTerm()] === undefined) {
            this.dictionary[word.getTerm()] = word.getDefinition();
        }
        else {
            console.log("already enrolled");
        }
    }
    findWordInDictionary(word) {
        return this.dictionary[word] || "there is no word";
    }
    deleteWordInDictionary() {
        const word = prompt("choose the word you wanna delete");
        if (typeof word != "string" || word.trim() === "") {
            alert("please enter the word you wanna find");
            return;
        }
        if (this.dictionary[word] === undefined) {
            alert("There is no such word");
            return;
        }
        const checkDeleteBefore = prompt("do you wanna delete it?", "");
        if (checkDeleteBefore === "yes")
            delete this.dictionary[word];
        alert("you canceled to delete word");
    }
}
const hi = new Word("hi", "english greeting");
const computer = new Computer();
computer.addWordInDictionay(hi);
computer.deleteWordInDictionary();
