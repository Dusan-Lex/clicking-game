//level builder algorithm

import { Field } from "../store/types";
import { calculatePossibleFields } from "./calculatePossibleFields";

export function generateRandomFields(
  startField: Field,
  level: number
): Field[] {
  const generatedFields = [startField];

  let isGenerated = true;
  for (let i = 1; i <= level; i++) {
    const possibleFields = calculatePossibleFields(generatedFields);
    const possibleFieldsLength = possibleFields.length;
    if (possibleFieldsLength === 0) {
      isGenerated = false;
      break;
    }
    const possibleField = possibleFields[Math.floor(Math.random() * possibleFieldsLength)];
    generatedFields.push(possibleField);
  }
  if (!isGenerated) {
    return generateRandomFields(startField, level);
  } else {
    return generatedFields;
  }
}
