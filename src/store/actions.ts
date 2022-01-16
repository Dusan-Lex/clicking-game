import { Field } from "./types";

export const GENERATE_LEVEL = "GENERATE_LEVEL";
export const GENERATE_POSSIBLE_FIELDS = "GENERATE_POSSIBLE_FIELDS";
export const START_LEVEL = "START_LEVEL";
export const SET_TIMER = "SET_TIMER";
export const ADD_TIMESCORE = "ADD_TIMESCORE";

export const ADD_PLAYER = "ADD_PLAYER";
export const CHANGE_PLAYER = "CHANGE_PLAYER";

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
    }
  | {
      type: typeof SET_TIMER;
      payload: { timer: number };
    }
  | {
      type: typeof ADD_TIMESCORE;
      payload: { name: string; level: number };
    }
  | {
      type: typeof ADD_PLAYER;
      payload: string;
    }
  | {
      type: typeof CHANGE_PLAYER;
      payload: { name: string; level: number };
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

export const setTimer = (timer: number): ActionTypes => ({
  type: SET_TIMER,
  payload: { timer: timer },
});

export const addTimescore = (name: string, level: number): ActionTypes => ({
  type: ADD_TIMESCORE,
  payload: { name: name, level: level },
});

export const addPlayer = (name: string): ActionTypes => ({
  type: ADD_PLAYER,
  payload: name,
});

export const changePlayer = (name: string, level: number): ActionTypes => ({
  type: CHANGE_PLAYER,
  payload: { name: name, level: level },
});
