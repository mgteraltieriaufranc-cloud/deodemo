
import React, { useState } from 'react';
import { TriageFormData, UrgencyLevel } from '../types';
import { COLORS } from '../constants';

interface TriageFormProps {
  onSubmit: (data: TriageFormData) => void;
  isLoading: boolean;
}

const TriageForm: React.FC<TriageFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<TriageFormData>({
    fullName: '',
    dni: '',
    reason: '',
    urgency: UrgencyLevel.LOW,
    additionalNotes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.reason) {
      onSubmit(formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Nombre y Apellido</label>
        <input
          type="text"
          name="fullName"
          required
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Ej: María García"
          className="w-full px-4 py-3 rounded-xl border-0 ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-slate-400 outline-none bg-white transition-all shadow-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">DNI (Opcional)</label>
        <input
          type="text"
          name="dni"
          value={formData.dni}
          onChange={handleChange}
          placeholder="Número de documento"
          className="w-full px-4 py-3 rounded-xl border-0 ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-slate-400 outline-none bg-white transition-all shadow-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Motivo de tu consulta</label>
        <textarea
          name="reason"
          required
          rows={3}
          value={formData.reason}
          onChange={handleChange}
          placeholder="¿En qué podemos ayudarte hoy?"
          className="w-full px-4 py-3 rounded-xl border-0 ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-slate-400 outline-none bg-white transition-all shadow-sm resize-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">¿Cómo te sentís hoy?</label>
        <div className="grid grid-cols-3 gap-3">
          {Object.values(UrgencyLevel).map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, urgency: level }))}
              className={`py-3 px-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all border-2 ${
                formData.urgency === level
                  ? 'bg-slate-700 text-white border-slate-700 shadow-md transform scale-105'
                  : 'bg-white text-slate-600 border-slate-100'
              }`}
            >
              {level === UrgencyLevel.LOW ? 'Estable' : level === UrgencyLevel.MEDIUM ? 'Molesto/a' : 'Urgente'}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-4 px-6 rounded-2xl text-white font-bold text-lg shadow-lg transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center ${
          isLoading ? 'bg-slate-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
        }`}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Enviando...
          </>
        ) : (
          'Enviar y quedarme tranquilo/a'
        )}
      </button>
      
      <p className="text-center text-xs text-slate-400 italic">
        Tu información es confidencial y solo la verá el equipo médico.
      </p>
    </form>
  );
};

export default TriageForm;
