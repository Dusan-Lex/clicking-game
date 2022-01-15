import { createStore } from "redux";
import { calculatePossibleFields } from "../utils/calculatePossibleFields";
import { generateRandomFields } from "../utils/generateRandomFields";
import { isField } from "../utils/isField";
import {
  ActionTypes,
  GENERATE_LEVEL,
  GENERATE_POSSIBLE_FIELDS,
  START_LEVEL,
} from "./actions";
import { Store } from "./types";

export function gameReducer(
  state: Store = {
    clickedFields: [],
    possibleFields: [],
    generatedFields: [],
    level: 1,
    lives: 0,
    timer: 0,
  },
  action: ActionTypes
) {
  switch (action.type) {
    case START_LEVEL:
      return {
        clickedFields: [],
        possibleFields: [],
        generatedFields: [],
        level: action.payload.level,
        lives: action.payload.lives,
        timer: 0,
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

    default:
      return state;
  }
}

const store = createStore(gameReducer);
export default store;
