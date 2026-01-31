
export interface GroundingSource {
  title?: string;
  uri?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  sources?: GroundingSource[];
}

export enum StructuralElementType {
  BEAM_CONCRETE = 'viga_concreto',
  BEAM_STEEL = 'viga_acero',
  COLUMN_CONCRETE = 'columna_concreto',
  SLAB_SOLID = 'losa_maciza',
  SLAB_JOIST = 'losa_aligerada'
}

export interface CalculationResult {
  h?: number; // peralte
  b?: number; // base
  t?: number; // thickness
  area?: number;
  label: string;
  formula: string;
}
