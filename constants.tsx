
import React from 'react';

export const COLORS = {
  beige: '#FDF6F0',
  sage: '#E8F3E8',
  sky: '#E3F2FD',
  primary: '#4A6670', // Deep slate blue/green for text
  accent: '#A8C3B8', // Muted sage for buttons
  softRed: '#F8D7DA', // For high urgency warnings (subtle)
};

export const CONTACT_INFO = {
  targetEmail: 'aaltieriaufranc@gmail.com',
  targetWhatsApp: '+5493513281704',
};

export const Icons = {
  Check: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  Heart: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-300" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  ),
};
