import ollama from 'ollama';

export default class Classifier {
    say_hello() {
        return "say hello";
    }

    async classify(text) {
        return await send_msg_to_ollama(text);
    }
}

async function send_msg_to_ollama(ticket_text) {
    const prompt = `Classify the following support ticket into:
        - Intent (e.g., refund, question, billing, shipping, order, claim)
        - Urgency (low, medium, high)
        - Product (Online Shop, Product Reviews, Chat Support)

        Ticket: "${ticket_text}"

        Respond in a javascript JSON format following the format like:
        {
            "intent": "...",
            "urgency": "...",
            "product": "...",
            "ticket_text": "${ticket_text}"
        }

        I don't want any other info than the one in JSON format with correct syntax.
    `
    const response = await ollama.chat({
        model: 'llama3',
        messages: [
        { role: 'user', content: prompt }
        ],
    });

    const content = response.message.content
    console.log(content);
    return content;
}