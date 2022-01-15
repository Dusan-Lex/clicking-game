import { Field } from "../store/types";
import { isField } from "./isField";

export function calculatePossibleFields(fields: Field[]): Field[] {
  if (fields.length === 0) {
    return fields;
  }
  const lastField = fields[fields.length - 1];
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
    .filter((el) => el.x >= 0 && el.x <= 9 && el.y >= 0 && el.y <= 9)
    .filter((x) => !isField(fields, x));
}
