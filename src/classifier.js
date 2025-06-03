import ollama from 'ollama';

export default class Classifier {
    say_hello() {
        return "say hello";
    }

    async classify(text) {
        return await send_msg_to_ollama();
    }
}

async function send_msg_to_ollama() {
    const response = await ollama.chat({
        model: 'llama3',
        messages: [
        { role: 'user', content: 'What is the capital from Catalonia?' }
        ],
    });

    const content = response.message.content
    console.log(content);
    return content;
}

// module.exports = Classifier;