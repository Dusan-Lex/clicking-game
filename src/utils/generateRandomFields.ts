//level builder algorithm

import { Field } from "../store/types";
import { calculatePossibleFields } from "./calculatePossibleFields";

export function generateRandomFields(
  startField: Field,
  level: number
): Field[] {
  const generatedFields = [startField];

  let j = 0;
  for (let i = 1; i <= level; i++) {
    const possibleFields = calculatePossibleFields(generatedFields);
    const possibleFieldsLength = possibleFields.length;
    if (possibleFieldsLength === 0) {
      j = i;
      break;
    }
    const possibleField =
      possibleFields[Math.floor(Math.random() * possibleFieldsLength)];
    generatedFields.push(possibleField);
  }
  if (j !== 0) {
    return generateRandomFields(startField, level);
  } else {
    return generatedFields;
  }
}
