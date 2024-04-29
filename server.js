const express = require("express");
const OpenAI = require("openai");
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: '*' }));
app.use(express.static('public'));
app.use(express.json());

const openai = new OpenAI({
    apiKey: process.env.OPENTOKEN
});

async function ask(options) {
    const { system, prompt, model, temperature } = options;
    const completion = await openai.chat.completions.create({
        model: model || "gpt-4-turbo-2024-04-09",
        messages: [
            { role: "system", content: system || "You're a helpful assistant." },
            { role: "user", content: prompt || "What time is it?" }
        ],
        stream: true,
        temperature: temperature || 0
    });

    let result = "";
    for await (const chunk of completion) {
        const text = chunk.choices[0]?.delta?.content || "";
        result += text;
    }
    return result;
}

function token_count(inputText) {
    const tokens = encode(inputText); // Assuming 'encode' is defined somewhere
    return tokens.length;
}

app.post('/api/chat', async (req, res) => {
    try {
        const { prompt } = req.body;
        const response = await ask({
            prompt,
            model: "gpt-4-turbo-2024-04-09",
            temperature: 0
        });
        res.json({ message: response });
    } catch (error) {
        console.error('Error calling OpenAI API:', error);
        res.status(500).send('Error processing your request');
    }
});

app.get('/api/token_count', (req, res) => {
    try {
        const { inputText } = req.query;
        const count = token_count(inputText);
        res.json({ count });
    } catch (error) {
        console.error('Error in token counting:', error);
        res.status(500).send('Error processing your request');
    }
});

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
