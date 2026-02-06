
import React from 'react';
import { Icons, COLORS } from '../constants';

interface ConfirmationProps {
  message: string;
  onReset: () => void;
}

const Confirmation: React.FC<ConfirmationProps> = ({ message, onReset }) => {
  return (
    <div className="text-center py-12 px-6 animate-fade-in flex flex-col items-center">
      <div className="bg-white p-4 rounded-full shadow-inner mb-6">
        <Icons.Check />
      </div>
      
      <h2 className="text-3xl font-bold text-slate-800 mb-4">Información recibida</h2>
      
      <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-sm mx-auto">
        {message}
      </p>
      
      <div className="bg-blue-50 p-6 rounded-2xl mb-8 border border-blue-100 flex items-start gap-4 text-left max-w-md">
        <div className="mt-1">
          <Icons.Heart />
        </div>
        <div>
          <h3 className="font-semibold text-blue-900 mb-1">Todo está en orden</h3>
          <p className="text-sm text-blue-800 opacity-90">
            Nuestras enfermeras ya recibieron la notificación. Podés esperar tranquilo/a en la sala, te llamaremos por tu nombre.
          </p>
        </div>
      </div>

      <button
        onClick={onReset}
        className="text-slate-400 hover:text-slate-600 text-sm font-medium underline underline-offset-4"
      >
        Volver a completar si cometiste un error
      </button>
    </div>
  );
};

export default Confirmation;
