
import React, { useState, useEffect } from 'react';

const StructuralCalculator: React.FC = () => {
  const [claro, setClaro] = useState(6);
  const [results, setResults] = useState({
    beamH: 50,
    beamB: 25,
    steelD: 30,
    slabH: 24,
    slabT: 10
  });

  useEffect(() => {
    const L_cm = claro * 100;
    const bh = Math.ceil(L_cm / 12);
    const bb = Math.max(20, Math.ceil(bh / 2));
    const sd = Math.ceil(L_cm / 20);
    const sh = Math.ceil(L_cm / 25);
    // Typical perimeter estimate for slab T (assuming 6x6 room)
    const perimeter = (claro * 4) * 100;
    const st = Math.ceil(perimeter / 180);

    setResults({
      beamH: bh,
      beamB: bb,
      steelD: sd,
      slabH: sh,
      slabT: st
    });
  }, [claro]);

  return (
    <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-2xl border border-slate-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
        </div>
        <h2 className="text-xl font-bold">Estimador Rápido de Dimensiones</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Claro Principal (L) en metros</label>
          <div className="flex items-center gap-4">
            <input 
              type="range" 
              min="2" 
              max="15" 
              step="0.5"
              value={claro} 
              onChange={(e) => setClaro(parseFloat(e.target.value))}
              className="flex-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <span className="text-2xl font-mono text-blue-400 w-16 text-right">{claro}m</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
            <h4 className="text-[10px] font-bold text-blue-400 uppercase mb-3">Viga Concreto (h = L/12)</h4>
            <div className="flex justify-between items-end">
              <div>
                <span className="block text-2xl font-bold">{results.beamH} cm</span>
                <span className="text-xs text-slate-500">Peralte Sugerido</span>
              </div>
              <div className="text-right">
                <span className="block text-xl font-semibold text-slate-300">{results.beamB} cm</span>
                <span className="text-xs text-slate-500">Base Mínima</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 hover:border-slate-500/50 transition-colors">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase mb-3">Viga Acero (d = L/20)</h4>
            <div className="flex justify-between items-end">
              <div>
                <span className="block text-2xl font-bold">{results.steelD} cm</span>
                <span className="text-xs text-slate-500">Peralte Nominal</span>
              </div>
              <div className="text-right text-slate-500">
                <span className="text-[10px]">Perfil W recomendado</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 hover:border-amber-500/50 transition-colors">
            <h4 className="text-[10px] font-bold text-amber-400 uppercase mb-3">Losa Aligerada (h = L/25)</h4>
            <div>
              <span className="block text-2xl font-bold">{results.slabH} cm</span>
              <span className="text-xs text-slate-500">Espesor Total</span>
            </div>
          </div>

          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-colors">
            <h4 className="text-[10px] font-bold text-emerald-400 uppercase mb-3">Losa Maciza (t = P/180)</h4>
            <div className="flex justify-between items-end">
              <div>
                <span className="block text-2xl font-bold">{results.slabT} cm</span>
                <span className="text-xs text-slate-500">Espesor Estimado</span>
              </div>
              <div className="text-right text-slate-500">
                <span className="text-[10px]">Asumiendo tablero cuadrado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StructuralCalculator;
