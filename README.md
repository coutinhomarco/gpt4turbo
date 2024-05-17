# GPT4Turbo Chatbot

This project is a simple chatbot interface powered by OpenAI's GPT-4 Turbo model. The application allows users to interact with the chatbot through a web interface, sending prompts and receiving responses in real-time.

## Features

- **Simple Web Interface**: Users can interact with the chatbot through a clean and minimalistic web interface.
- **Express.js Server**: The backend is built with Express.js, handling API requests and serving the frontend.
- **OpenAI API Integration**: Utilizes OpenAI's GPT-4 Turbo model for generating responses.
- **CORS Support**: Configured to allow cross-origin requests.
- **Token Counting**: Includes an endpoint for counting tokens in a given input text.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)
- An OpenAI API key

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/coutinhomarco/gpt4turbo.git
    cd gpt4turbo
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root directory and add your OpenAI API key:
    ```plaintext
    OPENTOKEN=your-openai-api-key
    ```

4. **Start the server:**
    ```bash
    npm start
    ```

    The server will start on `http://localhost:3000`.

### Usage

1. **Access the web interface:**
    Open a web browser and navigate to `http://localhost:3000`.

2. **Interact with the chatbot:**
    Type your message in the input field and click "Send". The chatbot's response will appear below your message.

## API Endpoints

- **POST /api/chat**
    - Description: Sends a prompt to the GPT-4 Turbo model and returns the response.
    - Request Body: `{ "prompt": "your-message-here" }`
    - Response: `{ "message": "response-from-ai" }`

- **GET /api/token_count**
    - Description: Counts the number of tokens in the given input text.
    - Query Parameter: `inputText`
    - Response: `{ "count": number-of-tokens }`

## File Structure

```
/public
    /style.css
    /script.js
    /index.html
server.js
package.json
package-lock.json
.env (create this file with your OpenAI API key)
```

## Future Enhancements

- **User Authentication**: Add user authentication to restrict access to certain endpoints.
- **Database Integration**: Store chat history in a database.
- **Advanced Features**: Implement more advanced features such as context awareness, multiple languages, etc.
