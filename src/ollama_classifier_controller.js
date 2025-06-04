import ollama from 'ollama';
import OllamaClassifier from './ollama_classifier.js';

/**
 * Controller for Classifier using Ollama
 *
 * @class OllamaClassifierController
 */
class OllamaClassifierController {
    /**
     * Classify 1 ticket
     *
     * @param {String} ticket_text
     * @param {Object} [classifier_inst=new OllamaClassifier(ollama)]
     * @return {JSON} 
     * @memberof OllamaClassifierController
     */
    async classify_ticket(ticket_text, classifier_inst = new OllamaClassifier(ollama)){
        return await classifier_inst.classify(ticket_text)
    }

    /**
     * Classify multiple tickets
     *
     * @param {Array} tickets
     * @return {Array} 
     * @memberof OllamaClassifierController
     */
    async classify_ticket_batch(tickets) {
        const classifier_inst = new OllamaClassifier(ollama);
        
        const classification_promises = tickets.map((ticket) => {
            return this.classify_ticket(ticket, classifier_inst)
        });

        return await Promise.all(classification_promises);
    }
}

export default OllamaClassifierController;
