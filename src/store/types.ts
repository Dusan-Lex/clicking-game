export interface Field {
  x: number;
  y: number;
}

export interface Store {
  clickedFields: Field[];
  possibleFields: Field[];
  generatedFields: Field[];
  level: number;
  lives: number;
  timer: number;
}
