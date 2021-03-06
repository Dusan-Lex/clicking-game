import { calculatePossibleFields } from "../utils/calculatePossibleFields";
import { generateRandomFields } from "../utils/generateRandomFields";
import { isField } from "../utils/isField";
import {
  ActionTypes,
  ADD_PLAYER,
  ADD_TIMESCORE,
  CHANGE_LIVES,
  CHANGE_PLAYER,
  GENERATE_LEVEL,
  GENERATE_POSSIBLE_FIELDS,
  SET_TIMER,
  START_LEVEL,
} from "./actions";
import { Store } from "./types";

import { generateInitialLevelsScores } from "../utils/utils";
import { startingLevel } from "../game.config";

export function gameReducer(
  state: Store = {
    clickedFields: [],
    possibleFields: [],
    generatedFields: [],
    level: startingLevel,
    lives: 0,
    timer: 0,
    playerName: "",
    allStats: {},
  },
  action: ActionTypes
) {
  switch (action.type) {
    case START_LEVEL:
      return {
        ...state,
        clickedFields: [],
        possibleFields: [],
        generatedFields: [],
        timer: 0,
        level: action.payload.level,
        lives: action.payload.lives,
      };
    case GENERATE_LEVEL:
      return {
        ...state,
        generatedFields: generateRandomFields(
          action.payload.field,
          action.payload.level
        ),
      };
    case GENERATE_POSSIBLE_FIELDS:
      return {
        ...state,
        clickedFields: [...state.clickedFields, action.payload],
        possibleFields: calculatePossibleFields([
          ...state.clickedFields,
          action.payload,
        ]).filter((x) => isField(state.generatedFields, x)),
      };
    case SET_TIMER:
      return {
        ...state,
        timer: action.payload.timer,
      };
    case ADD_TIMESCORE:
      return {
        ...state,
        allStats: {
          ...state.allStats,
          [action.payload.name]: {
            ...state.allStats[action.payload.name],
            [action.payload.level]: [
              ...state.allStats[action.payload.name][action.payload.level],
              state.timer,
            ],
          },
        },
      };
    case ADD_PLAYER:
      return {
        ...state,
        clickedFields: [],
        possibleFields: [],
        generatedFields: [],
        level: startingLevel,
        lives: 0,
        timer: 0,
        playerName: action.payload,
        allStats: {
          ...state.allStats,
          [action.payload]: generateInitialLevelsScores(startingLevel),
        },
      };
    case CHANGE_PLAYER:
      return {
        ...state,
        playerName: action.payload,
        clickedFields: [],
        possibleFields: [],
        generatedFields: [],
        lives: 0,
        timer: 0,
      };
    case CHANGE_LIVES:
      return {
        ...state,
        clickedFields: [],
        possibleFields: [],
        generatedFields: [],
        timer: 0,
        lives: action.payload,
      };
    default:
      return state;
  }
}
