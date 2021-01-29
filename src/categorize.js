const NaiveBayes = require('naivebayes');
const path = require('path');
const tokenize = require("./tokenize");
const fs = require('fs');
console.time("categorize spend");
fs.readFile(path.join(__dirname, '../output/model.json'), (err, model) => {
    const revivedClassifier = NaiveBayes.fromJson(JSON.parse(model));
    revivedClassifier.tokenizer = tokenize;
    let text = `Trimble X7的工業設計滿足了在飛機上運送的尺寸要求，避免了單獨配送的需要。整套系統可裝入一個同時置放掃描儀、平板電腦與電池的背包，並附帶非常輕巧的三腳架，只需一個人便能輕鬆前往工作地點執行任務。`;
    console.log('Class:', revivedClassifier.categorize(text));
    console.table(revivedClassifier.probabilities(text));
});
console.timeEnd("categorize spend", 'End');



