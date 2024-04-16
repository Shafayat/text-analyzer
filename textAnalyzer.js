const fs = require('fs');

function countWords(text) {

    return text.toLowerCase().split(/\s+/).length;
}

function countCharacters(text) {
    return text.toLowerCase().replace(/\s/g, '').length;
}

function countSentences(text) {

    return text.split(/[.!?]/).length - 1;
}

function countParagraphs(text) {

    return text.split(/\n\s*\n/).length;
}

function findLongestWords(text) {

    let paragraphs = text.split(/\n\s*\n/);
    let result = {};

    paragraphs.forEach((para, index) => {
        let words = para.split(/\s+/);
        let longestWords = [];
        let maxLength = 0;

        words.forEach(word => {
            if (word.length > maxLength) {
                longestWords = [word];
                maxLength = word.length;
            } else if (word.length === maxLength) {
                longestWords.push(word);
            }
        });

        result[`Paragraph ${index + 1}`] = longestWords;
    });
    return result;
}

module.exports = {
    countWords, countCharacters, countSentences, countParagraphs, findLongestWords
};
