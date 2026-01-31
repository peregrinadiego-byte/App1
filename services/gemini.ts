
import { GoogleGenAI } from "@google/genai";
import { ChatMessage, GroundingSource } from "../types";

export const getStructuralAdvice = async (prompt: string): Promise<ChatMessage> => {
  try {
    // Inicializamos el cliente directamente con la variable de entorno requerida
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        systemInstruction: `Eres un asistente experto en ingeniería estructural enfocado en la normativa mexicana (NTC) y estándares internacionales (ACI, AISC). 
        Proporcionas consejos de predimensionamiento precisos, citando valores típicos de resistencia y cargas. 
        Si se te pregunta por fórmulas específicas, explica su origen y limitaciones.
        Responde siempre en español profesional.`
      },
    });

    const text = response.text || "Lo siento, no pude procesar esa consulta.";
    
    // Extracción de fuentes de grounding (Google Search)
    const sources: GroundingSource[] = [];
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    if (chunks) {
      chunks.forEach((chunk: any) => {
        if (chunk.web) {
          sources.push({
            title: chunk.web.title,
            uri: chunk.web.uri
          });
        }
      });
    }

    return {
      role: 'model',
      text,
      sources
    };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      role: 'model',
      text: "Hubo un error al conectar con el asistente de IA. Asegúrate de que la API_KEY esté correctamente configurada en las variables de entorno de Vercel."
    };
  }
};
