const textAnalyzer = require('../textAnalyzer');
const fs = require('fs');

const sampleText = "The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.";

describe('Text Analyzer', () => {
    it('should count words correctly', () => {
        const wordCount = textAnalyzer.countWords(sampleText);
        expect(wordCount).toBe(16);
    });

    it('should count characters correctly', () => {
        const charCount = textAnalyzer.countCharacters(sampleText);
        expect(charCount).toBe(60);
    });

    it('should count sentences correctly', () => {
        const sentenceCount = textAnalyzer.countSentences(sampleText);
        expect(sentenceCount).toBe(2);
    });

    it('should count paragraphs correctly', () => {
        const paraCount = textAnalyzer.countParagraphs(sampleText);
        expect(paraCount).toBe(1);
    });

    it('findLongestWords should return an object with paragraph-wise results', () => {
        const sampleText = "Paragraph one. Short sentence.\n\nParagraph two with a longer sentence.";

        const result = textAnalyzer.findLongestWords(sampleText);

        expect(typeof result).toBe('object');
    });
});