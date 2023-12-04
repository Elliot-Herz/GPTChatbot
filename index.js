import openai from './config/open-ai.js';
import readlineSync from 'readline-sync';
import colors from 'colors';
import { start } from 'repl';

async function main () {
    console.log(colors.bold.green('Welcome to the Chatbot Program!'));
    console.log(colors.bold.green('Start Chatting!'));

const chatHistory = [] // Store conversation history

    while(true) {
        const userInput = readlineSync.question(colors.yellow('You: '));

        try{
            // Construct messages by iterating over the history
            const messages = chatHistory.map(([role, content]) => ({ role, content }))

            // Add latest user input
            messages.push({ role: 'user', content: userInput });

            // Call the API with user input
            const chatCompletion = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: messages,
              });

            // Get completion text/content
            const completionText = chatCompletion.choices[0].message;

            if(userInput.toLowerCase() === 'exit') {
                console.log(colors.green('Bot: '+ completionText));
                return;
            }

            console.log(colors.green('Bot: '+ completionText));

            //Udpate history with user input and assistant response
            chatHistory.push(['user'. userInput]);
            chatHistory.push(['user'. completionText]);

        } catch (error) {
            console.error(colors.red(error));
        }
    }

}

main();