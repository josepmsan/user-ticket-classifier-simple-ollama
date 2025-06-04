import ollama from 'ollama';
import OllamaClassifier from './ollama_classifier.js';

class OllamaClassifierController {
    async classify_ticket(ticket_text, classifier_inst = new OllamaClassifier(ollama)){
        return await classifier_inst.classify(ticket_text)
    }

    async classify_ticket_batch(tickets) {
        const classifier_inst = new OllamaClassifier(ollama);
        
        const classification_promises = tickets.map((ticket) => {
            return this.classify_ticket(ticket, classifier_inst)
        });

        return await Promise.all(classification_promises);
    }
}

export default OllamaClassifierController;
