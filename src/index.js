import OllamaClassifierController from './ollama_classifier_controller.js';

async function main() {
    // const response = await new OllamaClassifierController().classify_ticket("I can't see where to generate all my prvious invoices, my accountant is urgently asking me for them!");
    fetch('http://localhost:3000/v1/classify_with_ollama_using_llama_3', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
         },
        body: JSON.stringify({
            tickets: [
                "When will there be again dotted socks?",
                "According to news the jelly beeans that I bought is poisonous, what do you say?",
                "When would it be my next payment?",
                "I wasn't happy with the attention received by Norbert, I demand compensation!",
                "I can't see where to generate all my prvious invoices, my accountant is urgently asking me for them!"
            ]
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response:', data);
    })
    .catch(err => {
        console.error('Error calling server:', err);
    });
}

main();