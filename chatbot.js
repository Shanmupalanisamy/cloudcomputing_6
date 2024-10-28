function sendMessage() {
    let userMessage = document.getElementById("userInput").value.trim();
    if (userMessage === "") return;

    // Display user message
    let chatBox = document.getElementById("chatBox");
    let userMsgDiv = document.createElement("div");
    userMsgDiv.className = "chat-message user-message";
    userMsgDiv.innerText = userMessage;
    chatBox.appendChild(userMsgDiv);

    // Clear input
    document.getElementById("userInput").value = "";

    // Simulate bot response with text matching
    setTimeout(() => {
        let botMsgDiv = document.createElement("div");
        botMsgDiv.className = "chat-message bot-message";
        
        // Check if the user's message matches a specific text
        if (userMessage.toLowerCase() === "hello") {
            botMsgDiv.innerText = "Hello! How can I assist you today?";
        } else if (userMessage.toLowerCase() === "bye") {
            botMsgDiv.innerText = "Goodbye! Have a great day!";
        } else if (userMessage.toLowerCase() === "good morning") {
            botMsgDiv.innerText = "good morning everyone and have a great day!";
        } else {
            botMsgDiv.innerText = "I'm not sure how to respond to that. Try saying 'hello', 'bye', or 'azure'.";
        }

        chatBox.appendChild(botMsgDiv);

        // Scroll to bottom of chat
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}
0