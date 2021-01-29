const path = require('path');
const nodejieba = require("nodejieba");
const dict = path.join(__dirname, './dict_tw.txt');
nodejieba.load({
    userDict: dict,
});
const tokenize = sentence => {
    const sanitized = sentence.replace(/[^(a-zA-Z\u4E00-\u9FFF0-9_)+\s]/g, ' ');
    return nodejieba.cutHMM(sanitized);
};
module.exports = tokenize;