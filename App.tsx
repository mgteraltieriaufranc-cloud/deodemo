
import React, { useState } from 'react';
import TriageForm from './components/TriageForm';
import Confirmation from './components/Confirmation';
import { TriageFormData } from './types';
import { analyzeTriageWithGemini } from './services/geminiService';
import { CONTACT_INFO } from './constants';

const App: React.FC = () => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [isLoading, setIsLoading] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleTriageSubmit = async (data: TriageFormData) => {
    setIsLoading(true);
    
    // 1. Analyze with Gemini (Simulates backend intelligence)
    const analysis = await analyzeTriageWithGemini(data);
    
    // 2. Simulate Notifications (In a real app, this would hit a Node.js API)
    console.log('--- SYSTEM NOTIFICATION ---');
    console.log(`Sending Email to: ${CONTACT_INFO.targetEmail}`);
    console.log(`Subject: [URGENCIA ${analysis.suggestedPriority}] Nuevo Triage - ${data.fullName}`);
    console.log(`Summary: ${analysis.medicalSummary}`);
    
    console.log(`Sending WhatsApp to: ${CONTACT_INFO.targetWhatsApp}`);
    const whatsappMsg = `🔔 NUEVO PACIENTE: ${data.fullName}\n📍 Motivo: ${data.reason}\n⚠️ Prioridad: ${analysis.suggestedPriority}\n👨‍⚕️ Resumen: ${analysis.medicalSummary}`;
    console.log(`Message Content: ${whatsappMsg}`);
    
    // 3. Simulated network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setConfirmationMessage(analysis.empatheticResponse);
    setIsLoading(false);
    setStep('success');
  };

  const handleReset = () => {
    setStep('form');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 selection:bg-slate-200">
      <div className="w-full max-w-xl bg-white/40 backdrop-blur-md rounded-[2.5rem] shadow-xl overflow-hidden border border-white/50">
        
        {/* Header Branding */}
        <div className="bg-white/60 pt-10 pb-6 px-8 text-center border-b border-white/40">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-50 to-blue-50 rounded-full mb-4 shadow-sm">
            <svg className="w-8 h-8 text-green-600/70" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-800 leading-tight">Canal de Atención Directa</h1>
          <p className="text-slate-500 text-sm mt-1">Hospital de Día Oncológico</p>
        </div>

        {/* Dynamic Content */}
        <main className="p-8 sm:p-10">
          {step === 'form' ? (
            <TriageForm onSubmit={handleTriageSubmit} isLoading={isLoading} />
          ) : (
            <Confirmation message={confirmationMessage} onReset={handleReset} />
          )}
        </main>

        {/* Footer */}
        <footer className="px-8 py-6 bg-white/40 border-t border-white/40 text-center">
          <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
            Tu cuidado comienza aquí • Silencioso y Eficiente
          </p>
        </footer>
      </div>

      {/* Decorative background elements */}
      <div className="fixed -z-10 top-20 -left-20 w-80 h-80 bg-green-200/20 blur-[100px] rounded-full"></div>
      <div className="fixed -z-10 bottom-20 -right-20 w-80 h-80 bg-blue-200/20 blur-[100px] rounded-full"></div>
    </div>
  );
};

export default App;
