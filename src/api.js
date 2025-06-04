import OllamaClassifierController from "./ollama_classifier_controller.js";
import express from 'express'
const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
    res.send('Miau!');
});

app.post('/v1/classify_with_ollama_using_llama_3', async (req, res) => {
    try {
      const {tickets = []} = req.body;
      const classified_tickets = await new OllamaClassifierController().classify_ticket_batch(tickets);
      
      res.status(200).json({
        message: `Successfully classified ${tickets.length} / ${classified_tickets.length}`,
        data: classified_tickets
      });
    }
    catch(err) {
        res.status(500).json({ error: `Internal server error: ${err.message}` });
    }
});

app.use((req, res) => {
  res.status(404).send('Route not found');
});

// Start the server
const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

// For practical purposes to not loose connection
// on reqest made by VM in a Proxmox server not using passthrough at the moment
server.setTimeout(200000);