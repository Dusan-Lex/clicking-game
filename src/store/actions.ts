import { Field } from "./types";

export const GENERATE_LEVEL = "GENERATE_LEVEL";
export const GENERATE_POSSIBLE_FIELDS = "GENERATE_POSSIBLE_FIELDS";
export const START_LEVEL = "START_LEVEL";

export type ActionTypes =
  | {
      type: typeof GENERATE_LEVEL;
      payload: { field: Field; level: number };
    }
  | {
      type: typeof GENERATE_POSSIBLE_FIELDS;
      payload: Field;
    }
  | {
      type: typeof START_LEVEL;
      payload: { level: number; lives: number };
    };

export const generateLevel = (field: Field, level: number): ActionTypes => ({
  type: GENERATE_LEVEL,
  payload: { field: field, level: level },
});

export const generatePossibleFields = (field: Field): ActionTypes => ({
  type: GENERATE_POSSIBLE_FIELDS,
  payload: field,
});

export const startLevel = (level: number, lives: number): ActionTypes => ({
  type: START_LEVEL,
  payload: { level: level, lives: lives },
});
