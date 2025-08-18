class WordCounter {
    constructor(text){
        this.text = text;
    }

    countWords(){
        let words = this.text.trim().split(/\s+/);
        return words.length;
    }
}

let counter = new WordCounter("Hello world from JavaScript");
console.log(counter.countWords());