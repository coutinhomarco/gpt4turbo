async function sendMessage() {
    const inputField = document.getElementById('chat-input');
    const chatBox = document.getElementById('chat-box');
    const userText = inputField.value;
    inputField.value = '';

    chatBox.innerHTML += `<div>User: ${userText}</div>`;

    const response = await fetch(`http://localhost:3000/api/chat`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: userText }),
    });

    const data = await response.json();

    chatBox.innerHTML += `<div>AI: ${data.message}</div>`;
}