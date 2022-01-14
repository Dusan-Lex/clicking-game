import { Field } from "../components/Board";
import { isField } from "./isField";

export function calculatePossibleFields(
  field: Field,
  noFields: Field[]
): Field[] {
  const possFields = [
    { x: field.x - 2, y: field.y - 2 },
    { x: field.x - 3, y: field.y },
    { x: field.x - 2, y: field.y + 2 },
    { x: field.x, y: field.y - 3 },
    { x: field.x, y: field.y + 3 },
    { x: field.x + 2, y: field.y - 2 },
    { x: field.x + 3, y: field.y },
    { x: field.x + 2, y: field.y + 2 },
  ];
  return possFields
    .filter((el) => el.x >= 0 && el.x <= 9 && el.y >= 0 && el.y <= 9)
    .filter((x) => !isField(noFields, x));
}
