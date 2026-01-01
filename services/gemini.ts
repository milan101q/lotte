import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

export class GeminiService {
  /**
   * Provides style consultations using Gemini AI.
   * Refactored to adhere to @google/genai SDK best practices.
   */
  async getStyleConsultation(history: ChatMessage[], userPrompt: string) {
    try {
      // Fix: Use the API key directly from process.env and initialize right before call
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Fix: Convert UI history to Gemini-compatible model roles, skipping initial assistant greeting to ensure user starts the turn
      const formattedHistory = history.length > 1 
        ? history.slice(1).map(msg => ({
            role: msg.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: msg.content }]
          }))
        : [];

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...formattedHistory, { role: 'user', parts: [{ text: userPrompt }] }],
        config: {
          // Fix: Use systemInstruction in config to maintain persona consistency
          systemInstruction: `You are an expert style consultant for Lotte Plaza Barber & Salon in Chantilly, VA. 
            The salon offers barbering (shaves, men's cuts) and salon services (color, blowouts, women's cuts).
            
            Shop Address: 13955 Metrotech Dr, Chantilly, VA 20151.
            Phone: (703) 263-1778.
            
            Your goal is to help users decide on a style or answer questions about the services.
            Be sophisticated, trendy, and helpful. Keep responses concise (under 3 sentences unless asked for details).`,
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
        }
      });

      // Fix: Access .text as a property rather than a method call
      return response.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I'm sorry, I'm having a little trouble connecting to my style database. Please give us a call at (703) 263-1778 for immediate assistance!";
    }
  }
}

export const geminiService = new GeminiService();