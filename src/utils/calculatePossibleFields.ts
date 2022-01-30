import { Field } from "../store/types";
import { isField } from "./isField";

export function calculatePossibleFields(clickedFields: Field[]): Field[] {
  if (clickedFields.length === 0) {
    return clickedFields;
  }
  const lastField = clickedFields[clickedFields.length - 1];
  const possFields = [
    { x: lastField.x - 2, y: lastField.y - 2 },
    { x: lastField.x - 3, y: lastField.y },
    { x: lastField.x - 2, y: lastField.y + 2 },
    { x: lastField.x, y: lastField.y - 3 },
    { x: lastField.x, y: lastField.y + 3 },
    { x: lastField.x + 2, y: lastField.y - 2 },
    { x: lastField.x + 3, y: lastField.y },
    { x: lastField.x + 2, y: lastField.y + 2 },
  ];
  return possFields
    .filter((field) => field.x >= 0 && field.x <= 9 && field.y >= 0 && field.y <= 9 && !isField(clickedFields,field))
}
