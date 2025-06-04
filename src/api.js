const OllamaClassifierController = require('ollama_classifier_controller.js')
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Miau!');
});

app.post('/classify_with_ollama_using_llama_3', (req, res) => {
    const {tickets = []} = req.body;
    const response = new OllamaClassifierController().classify_tickets(tickets);
    res.send('Miau!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});