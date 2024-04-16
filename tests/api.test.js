const request = require('supertest');
const {app, server} = require('../index'); // Express app

describe('POST /upload', () => {
    it('uploads a file and analyzes its content', async () => {
        const response = await request(app)
            .post('/upload')
            .attach('sample', 'sample.txt'); // Attach a sample text file for testing

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('wordCount');
        expect(response.body).toHaveProperty('characterCount');
        expect(response.body).toHaveProperty('sentenceCount');
        expect(response.body).toHaveProperty('paragraphCount');
        expect(response.body).toHaveProperty('longestWords');
    });
});

describe('GET /analyze/words', () => {
    it('analyzes the word count of the uploaded text', async () => {
        const response = await request(app).get('/analyze/words');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('wordCount');
    });
});

describe('GET /analyze/characters', () => {
    it('analyzes the characters count of the uploaded text', async () => {
        const response = await request(app).get('/analyze/characters');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('characterCount');
    });
});

describe('GET /analyze/sentences', () => {
    it('analyzes the sentences count of the uploaded text', async () => {
        const response = await request(app).get('/analyze/sentences');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('sentenceCount');
    });
});

describe('GET /analyze/paragraphs', () => {
    it('analyzes the paragraphs count of the uploaded text', async () => {
        const response = await request(app).get('/analyze/paragraphs');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('paragraphCount');
    });
});

describe('GET /analyze/longestWords', () => {
    it('analyzes the longestWords of the uploaded text', async () => {
        const response = await request(app).get('/analyze/longestWords');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('longestWords');
    });
});

test('closes server after test', async () => {
    await server.close();
});
