import ollama from 'ollama';
import OllamaClassifier from './ollama_classifier.js';

class OllamaClassifierController {
    classify_ticket(ticket_text, classifier_inst = new OllamaClassifier(ollama)){
        return classifier_inst.classify(ticket_text)
    }

    classify_ticket_batch(tickets) {
        const classifier_inst = new OllamaClassifier(ollama);
        return tickets.map(async (ticket) => {
            await this.classify_ticket(ticket, classifier_inst);
        });
    }
}

export default OllamaClassifierController;
