import OpenAIApi from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAIApi ({
    apiKey: process.env.OPENAI_API_KEY
});

export default openai;