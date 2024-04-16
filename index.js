const express = require('express');
const textAnalyzer = require('./textAnalyzer');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const app = express();
const port = 3000;

let wordCount;
let characterCount;
let sentenceCount;
let paragraphCount;
let longestWords;
let textContent;


// Ensure the uploads directory exists (if not, create it)
const uploadsDir = path.join(__dirname, 'uploads');
fs.mkdirSync(uploadsDir, {recursive: true});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Modify if you want a different upload directory
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Use the original filename
    }
});

const upload = multer({storage: storage});

// Individual API Endpoints
app.post('/upload', upload.single('sample'), (req, res, next) => {
    const uploadedFile = req.file;

    fs.readFile(uploadedFile.path, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send("Error reading file.");
        } else {
            // Process the text from the file (data variable)
            data = data.replace(/\s+$/, ''); // remove EOF white spaces and new lines
            textContent = data;
            wordCount = textAnalyzer.countWords(data);
            characterCount = textAnalyzer.countCharacters(data);
            sentenceCount = textAnalyzer.countSentences(data);
            paragraphCount = textAnalyzer.countParagraphs(data);
            longestWords = textAnalyzer.findLongestWords(data);
            res.json({wordCount, characterCount, sentenceCount, paragraphCount, longestWords});
        }
    });
});

app.get('/analyze/words', (req, res, next) => {
    if (!textContent) return next(new Error('No file found.'));
    const wordCount = textAnalyzer.countWords(textContent);
    res.json({wordCount});
});

app.get('/analyze/characters', (req, res, next) => {
    if (!textContent) return next(new Error('No file found.'));
    const characterCount = textAnalyzer.countCharacters(textContent);
    res.json({characterCount});
});

app.get('/analyze/sentences', (req, res, next) => {
    if (!textContent) return next(new Error('No file found.'));
    const sentenceCount = textAnalyzer.countSentences(textContent);
    res.json({sentenceCount});
});

app.get('/analyze/paragraphs', (req, res, next) => {
    if (!textContent) return next(new Error('No file found.'));
    const paragraphCount = textAnalyzer.countParagraphs(textContent);
    res.json({paragraphCount});
});

app.get('/analyze/longestWords', (req, res, next) => {
    if (!textContent) return next(new Error('No file found.'));
    const longestWords = textAnalyzer.findLongestWords(textContent);
    res.json({longestWords});
});


app.use(express.static('public'));
// Global Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack for debugging

    // Customize the response based on the error type, if needed

    res.status(500).send(err.message);
});
let server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// needed for testing
module.exports = {app, server};
