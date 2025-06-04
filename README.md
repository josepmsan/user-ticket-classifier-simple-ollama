# user-ticket-classifier-simple-ollama
Example using node of a classifier for 5 tickets using ollama as local LLM

## Instructions to run the project
In a terminal type the commands that the following steps indicate.

1. Clone the repository:
```bash
https://github.com/josepmsan/user-ticket-classifier-simple-ollama.git
cd user-ticket-classifier-simple-ollama
```

2. Install dependencies 
`npm install`

3. Run the server
In a separated tab, same path type:
`node src/api.js`

4. Run the client app firing the API request to the server
`node src/index.js`

### Optional step
Run the unit tests used at the beggining of the implementation, they will fail. It is ran by the testing framework Jest
`npm test`

## Things to consider
The project uses Ollama running llama3, so in the machine you are executing the code you should have ollama installed. Having GPU compatible with Ollama reduces the time needed to generate the classification, but works otherwise as well.

To install ollama on your machine see below:

## 🛠️ Ollama Installation Guide

Follow the steps below to install **Ollama** on your system:

### 📦 macOS

1. Download the macOS installer from the official site:
   [https://ollama.com/download/mac](https://ollama.com/download/mac)
2. Open the downloaded `.zip` file.
3. Drag `Ollama.app` to your `Applications` folder.
4. Launch the app from Spotlight or Applications.
5. To confirm installation, open Terminal and run:

   ```bash
   ollama --version
   ```

---

### 🪟 Windows

1. Download the Windows installer:
   [https://ollama.com/download/windows](https://ollama.com/download/windows)
2. Run the `.exe` file and complete the setup wizard.
3. Open Command Prompt or PowerShell and verify the installation:

   ```powershell
   ollama --version
   ```

---

### 🐧 Linux

1. Open a terminal window.
2. Run the installation script:

   ```bash
   curl -fsSL https://ollama.com/install.sh | sh
   ```
3. After installation, verify it:

   ```bash
   ollama --version
   ```

---

For more details, visit the [official Ollama docs](https://ollama.readthedocs.io/en/quickstart/).

---