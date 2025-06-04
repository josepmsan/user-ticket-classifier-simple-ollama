/**
 * Classifier using ollama object instead of calling
 * Ollama via local HTTP request
 *
 * @class OllamaClassifier
 */
class OllamaClassifier {
    constructor(ollama) {
        this.ollama = ollama;
    }

    /**
     * Dummy initial function for unit testing
     *
     * @return {*} 
     * @memberof OllamaClassifier
     */
    say_hello() {
        return "say hello";
    }

    /**
     * Classify ticket
     *
     * @param {text} text
     * @return {JSON} 
     * @memberof OllamaClassifier
     */
    async classify(text) {
        const response = await send_msg_to_ollama(text, this.ollama);
        return response;
    }
};

/**
 * Send message to Ollama
 *
 * @param {string} ticket_text
 * @param {*} ollama - Ollama instance
 * @return {JSON} 
 */
async function send_msg_to_ollama(ticket_text, ollama) {
    try {
        const prompt = generate_prompt(ticket_text);
        const response = await ollama.chat({
            model: 'llama3',
            messages: [
            { role: 'user', content: prompt }
            ],
        });

        if (!response || !response.message || !response.message.content) {
            throw new Error("Unexpected response structure from ollama.chat");
        }

        const content = response.message.content
        return content;
    }
    catch(err) {
        console.error("Failed to send message to Ollama:", err);
        throw err;
    }
}

/**
 * Generate prompt for LLM
 *
 * @param {String} ticket_text
 * @return {String}
 */
function generate_prompt(ticket_text){
    return `Classify the following support ticket into:
        - Intent (e.g., refund, question, billing, shipping, order, claim)
        - Urgency (low, medium, high)
        - Product (Online Shop, Product Reviews, Chat Support)

        Ticket: "${ticket_text}"

        Respond in a javascript JSON format following the format like:
        {
            "intent": "...",
            "urgency": "...",
            "product": "...",
            "ticket_text": "${ticket_text}",
        }

        I don't want any other info than the one in JSON format with correct syntax. Don't
        forget to add "ticket_text" inside the JSON.
    `
}

export default OllamaClassifier;