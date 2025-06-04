// const {OllamaClassifier} = require("./classifier");
import OllamaClassifierController from './ollama_classifier_controller.js';

async function main() {
    const response = await new OllamaClassifierController().classify_ticket("I can't see where to generate all my prvious invoices, my accountant is urgently asking me for them!");
}

main();