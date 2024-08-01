class Word {
  constructor(private term: string, private definition: string) {}

  public getTerm() {
    return this.term;
  }

  public getDefinition() {
    return this.definition;
  }
}

type Dictionary = {
  [term: string]: string;
};

class Computer {
  private dictionary: Dictionary;

  constructor() {
    this.dictionary = {};
  }

  addWordInDictionay(word: Word) {
    if (this.dictionary[word.getTerm()] === undefined) {
      this.dictionary[word.getTerm()] = word.getDefinition();
    } else {
      console.log("already enrolled");
    }
  }

  findWordInDictionary(word: string) {
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

    if (checkDeleteBefore === "yes") delete this.dictionary[word];
    alert("you canceled to delete word");
  }
}

const hi = new Word("hi", "english greeting");
const computer = new Computer();

computer.addWordInDictionay(hi);
computer.deleteWordInDictionary();
