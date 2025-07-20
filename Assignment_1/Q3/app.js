

const readline = require('readline');
const { getBotResponse } = require('./chatbotModule'); 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Welcome to our E-commerce Support Chatbot!");
console.log("Type 'exit' to quit.");

function askQuestion() {
    rl.question('You: ', (userInput) => {
        if (userInput.toLowerCase() === 'exit') {
            console.log(getBotResponse('exit'));
            rl.close();
            return;
        }

        const botResponse = getBotResponse(userInput);
        console.log(`Bot: ${botResponse}`);

        askQuestion(); 
    });
}

askQuestion(); 