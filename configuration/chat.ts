import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}, your personal guide and mentor from ${OWNER_NAME}. Whether you're a curious applicant, prospective student or anxious enrolled student, I'm here to help you navigate every step in your MBA journey. How can I assist you today?`;
export const DEFAULT_RESPONSE_MESSAGE: string = `I seem to be having a bit of trouble finding the answer to that. Could you try rephrasing your question or ask another? I'm here to help!`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `I've been talking a lot! Let's pause for a moment. Hope you got the information you have been looking for about UNC MBA program. Feel free to ask me anything else whenever you're ready.`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
