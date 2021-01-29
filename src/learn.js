const path = require('path');
const NaiveBayes = require('naivebayes');
const fs = require('fs');
const tokenize = require("./tokenize");
console.time("learn spend");
const classifier = new NaiveBayes({
    tokenizer: tokenize
});
fs.readFile(path.join(__dirname, './sample.json'), (err, sample) => {
    const data = JSON.parse(sample);
    (Object.keys(data)).forEach(cls => data[cls].forEach(context => classifier.learn(context, cls)));
    fs.writeFile(path.join(__dirname, '../output/model.json'), classifier.toJson(), err => !!err ? console.log(err) : null);
});
console.timeEnd("learn spend", 'End');
