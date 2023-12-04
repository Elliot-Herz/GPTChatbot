import openai from './config/open-ai.js';
import readlineSync from 'readline-sync';
import colors from 'colors';
import { start } from 'repl';

async function main () {
    console.log(colors.bold.green('Welcome to the Chatbot Program!'));
    console.log(colors.bold.green('Start Chatting!'));

    while(true) {
        const userInput = readlineSync.question(colors.yellow('You: '));

        try{

            if(userInput.toLowerCase() === 'exit') {
                return;
            }
        } catch (error) {
            console.error(colors.red(error));
        }
    }

}

main(); 