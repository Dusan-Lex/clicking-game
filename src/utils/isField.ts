import { Field } from "../components/Board";

export function isField(fields: Field[], field: Field): boolean {
  return fields.find((el) => el.x === field.x && el.y === field.y)
    ? true
    : false;
}
