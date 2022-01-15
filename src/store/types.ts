export interface Field {
  x: number;
  y: number;
}

export interface PlayerStats {
  [key: string]: number[];
}

export interface PlayersStats {
  [key: string]: PlayerStats;
}
export interface Store {
  clickedFields: Field[];
  possibleFields: Field[];
  generatedFields: Field[];
  level: number;
  lives: number;
  timer: number;
  playerName: string;
  allStats: PlayersStats;
}
