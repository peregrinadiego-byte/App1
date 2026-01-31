
import React from 'react';

export const FORMULAS = {
  BEAM_CONCRETE: {
    label: "Viga de Concreto Reforzado",
    formula: "h = L / 12",
    details: "Base (b) ≈ h / 2 (mín. 20cm)",
    color: "blue"
  },
  BEAM_STEEL: {
    label: "Viga de Acero (Perfil I)",
    formula: "d ≈ L / 20",
    details: "Relación económica para deflexión controlada",
    color: "slate"
  },
  COLUMN_CONCRETE: {
    label: "Columna de Concreto",
    formula: "Ag = Pu / (0.35 · f'c)",
    details: "Donde Ag es el área bruta y Pu es la carga factorizada",
    color: "emerald"
  },
  SLAB_SOLID: {
    label: "Losa Maciza",
    formula: "t = Perímetro / 180",
    details: "Criterio para losas perimetrales apoyadas",
    color: "amber"
  },
  SLAB_JOIST: {
    label: "Losa Aligerada",
    formula: "h ≈ L / 25",
    details: "Peralte total incluyendo bovedilla o casetón",
    color: "rose"
  }
};

export const ICONS = {
  BEAM: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4M4 12L8 16M4 12L8 8" /></svg>,
  COLUMN: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="8" y="2" width="8" height="20" rx="2" strokeWidth="2" /></svg>,
  SLAB: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15h18M3 9h18" /><rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2"/></svg>,
  LOADS: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>,
  AI: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
};
