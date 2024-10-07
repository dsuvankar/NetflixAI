import OpenAI from "openai";
import { OPENAI_KEY } from "./Constants";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;
