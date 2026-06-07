import OpenAI from "openai";
import { VITE_OPENAI_KEY } from "./constants/constants";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;
