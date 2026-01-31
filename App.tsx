
import React from 'react';
import { ICONS, FORMULAS } from './constants';
import StructuralCalculator from './components/StructuralCalculator';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-slate-900 text-white p-2 rounded-xl shadow-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 leading-tight">Structura</h1>
              <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">Predimensionamiento Estructural</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex gap-4">
              {['Vigas', 'Columnas', 'Losas', 'Cargas'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                  {item}
                </a>
              ))}
            </nav>
            <div className="h-6 w-[1px] bg-slate-200"></div>
            <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded border border-blue-200">NTC 2023 Compliant</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Quick Estimator Section */}
            <section id="calculadora">
              <StructuralCalculator />
            </section>

            {/* Knowledge Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Beams */}
              <div id="vigas" className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {ICONS.BEAM}
                  </div>
                  <h3 className="font-bold text-slate-800">Criterio de Vigas</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <p className="text-xs font-bold text-blue-600 uppercase mb-1">Concreto Reforzado</p>
                    <p className="text-xl font-mono text-slate-700">h = L / 12</p>
                    <p className="text-[10px] text-slate-500 mt-1 italic">Válido para vigas simplemente apoyadas.</p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <p className="text-xs font-bold text-slate-600 uppercase mb-1">Acero Estructural</p>
                    <p className="text-xl font-mono text-slate-700">d ≈ L / 20</p>
                    <p className="text-[10px] text-slate-500 mt-1 italic">Optimizado para perfiles laminados en caliente.</p>
                  </div>
                </div>
              </div>

              {/* Columns */}
              <div id="columnas" className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    {ICONS.COLUMN}
                  </div>
                  <h3 className="font-bold text-slate-800">Columnas de Concreto</h3>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                   <p className="text-xs font-bold text-emerald-600 uppercase mb-3">Área de Compresión</p>
                   <div className="bg-white p-3 rounded shadow-inner text-center">
                      <span className="text-lg font-mono text-slate-700">Ag = Pu / (0.35 · f'c)</span>
                   </div>
                   <ul className="mt-4 text-[10px] text-slate-500 space-y-2">
                     <li className="flex items-center gap-2"><div className="w-1 h-1 bg-emerald-400 rounded-full"></div> <b>f'c:</b> Usar mín 250kg/cm² en CDMX</li>
                     <li className="flex items-center gap-2"><div className="w-1 h-1 bg-emerald-400 rounded-full"></div> <b>Carga:</b> Factorizar por 1.3 (CM) y 1.5 (CV)</li>
                   </ul>
                </div>
              </div>

              {/* Slabs */}
              <div id="losas" className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-amber-100 text-amber-600 rounded-lg group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    {ICONS.SLAB}
                  </div>
                  <h3 className="font-bold text-slate-800">Losas y Cubiertas</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-100">
                    <h4 className="text-[10px] font-bold text-amber-700 uppercase">Losa Maciza</h4>
                    <p className="text-lg font-mono text-slate-700">t = Perímetro / 180</p>
                  </div>
                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-100">
                    <h4 className="text-[10px] font-bold text-amber-700 uppercase">Losa Aligerada</h4>
                    <p className="text-lg font-mono text-slate-700">h ≈ L / 25</p>
                  </div>
                </div>
              </div>

              {/* Loads */}
              <div id="cargas" className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-rose-100 text-rose-600 rounded-lg group-hover:bg-rose-600 group-hover:text-white transition-colors">
                    {ICONS.LOADS}
                  </div>
                  <h3 className="font-bold text-slate-800">Análisis de Cargas</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-2 bg-rose-50 rounded-lg border border-rose-100">
                    <span className="block text-[9px] font-bold text-rose-700 uppercase">Habitacional</span>
                    <span className="text-sm font-bold">190 kg/m²</span>
                  </div>
                  <div className="p-2 bg-rose-50 rounded-lg border border-rose-100">
                    <span className="block text-[9px] font-bold text-rose-700 uppercase">Oficinas</span>
                    <span className="text-sm font-bold">250 kg/m²</span>
                  </div>
                  <div className="p-2 bg-rose-50 rounded-lg border border-rose-100">
                    <span className="block text-[9px] font-bold text-rose-700 uppercase">Comercio</span>
                    <span className="text-sm font-bold">350 kg/m²</span>
                  </div>
                  <div className="p-2 bg-rose-50 rounded-lg border border-rose-100">
                    <span className="block text-[9px] font-bold text-rose-700 uppercase">Escaleras</span>
                    <span className="text-sm font-bold">350 kg/m²</span>
                  </div>
                </div>
                <p className="text-[9px] text-slate-400 mt-3 text-center">* Basado en NTC-Cargas 2023</p>
              </div>

            </div>
          </div>

          {/* AI Sidebar */}
          <div className="space-y-6">
            <div className="sticky top-24">
              <AIAssistant />
              <div className="mt-6 bg-blue-50 border border-blue-100 p-4 rounded-xl">
                <h4 className="text-xs font-bold text-blue-800 uppercase mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Nota de Seguridad
                </h4>
                <p className="text-[10px] text-blue-700 leading-relaxed italic">
                  Todo predimensionamiento es una aproximación inicial. Un ingeniero calculista certificado debe realizar el análisis sísmico y de viento detallado antes de la construcción.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-xs">Structura v1.0 • Guía Técnica para Ingenieros y Arquitectos</p>
          <div className="mt-4 flex justify-center gap-4">
            <span className="text-[10px] text-slate-400">NTC México</span>
            <span className="text-[10px] text-slate-400">ACI 318</span>
            <span className="text-[10px] text-slate-400">AISC 360</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
