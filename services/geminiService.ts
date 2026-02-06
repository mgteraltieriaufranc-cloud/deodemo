
import { GoogleGenAI, Type } from "@google/genai";
import { TriageFormData, UrgencyLevel } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeTriageWithGemini = async (data: TriageFormData) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analiza este reporte de triage oncológico y genera una respuesta empática para el paciente y un resumen técnico para el médico.
      
      Datos del paciente:
      - Nombre: ${data.fullName}
      - Motivo: ${data.reason}
      - Urgencia percibida: ${data.urgency}
      - Notas: ${data.additionalNotes || 'N/A'}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            empatheticResponse: {
              type: Type.STRING,
              description: "Un mensaje cálido y tranquilizador de una oración para el paciente.",
            },
            medicalSummary: {
              type: Type.STRING,
              description: "Un resumen ejecutivo de 10 palabras para el equipo médico.",
            },
            suggestedPriority: {
              type: Type.STRING,
              description: "Prioridad sugerida basada en el motivo: BAJA, MEDIA, ALTA.",
            }
          },
          required: ["empatheticResponse", "medicalSummary", "suggestedPriority"]
        },
        systemInstruction: "Eres un asistente médico oncológico empático. Tu prioridad es la contención emocional del paciente y la claridad técnica para el staff médico."
      },
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini analysis failed:", error);
    return {
      empatheticResponse: "Ya recibimos tu información. El equipo te va a atender a la brevedad.",
      medicalSummary: `Triage: ${data.reason}`,
      suggestedPriority: data.urgency
    };
  }
};
