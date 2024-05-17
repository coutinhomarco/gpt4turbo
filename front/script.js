async function sendMessage() {
    const inputField = document.getElementById('chat-input');
    const chatBox = document.getElementById('chat-box');
    const userText = inputField.value.trim();

    if (userText === '') return;

    inputField.value = '';

    chatBox.innerHTML += `<div class="chat-message user">User: ${userText}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;

    const response = await fetch(`http://localhost:3000/api/chat`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: userText }),
    });

    const data = await response.json();

    chatBox.innerHTML += `<div class="chat-message ai">AI: ${data.message}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}
