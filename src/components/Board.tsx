import { FC, useEffect, useState } from "react";
import { calculatePossibleFields } from "../utils/calculatePossibleFields";
import { calculateRandomFields } from "../utils/calculateRandomFields";
import { isField } from "../utils/isField";
import styles from "./Board.module.scss";
import BoardField from "./BoardField";

export interface Field {
  x: number;
  y: number;
}

const Board: FC = () => {
  const [clickedFields, setClickedFields] = useState<Field[]>([]);
  const [possibleFields, setPossibleFields] = useState<Field[]>([]);
  // const [occupiedFields, setOccupiedFields] = useState<number[]>([]);
  const [desiredFields, setDesiredFields] = useState<Field[]>([]);
  const [level, setLevel] = useState<number>(1);

  const lastClickedField = clickedFields[clickedFields.length - 1];

  useEffect(() => {
    lastClickedField &&
      setPossibleFields(
        calculatePossibleFields(lastClickedField, clickedFields)
      );
  }, [lastClickedField]);

  useEffect(() => {
    lastClickedField &&
      setDesiredFields(calculateRandomFields(lastClickedField, level));
  }, [level]);

  const onClickHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    field: Field
  ) => {
    e.stopPropagation();

    if (
      isField(possibleFields, field) ||
      JSON.stringify(possibleFields) === JSON.stringify([])
    ) {
      setClickedFields((fields) => [...fields, field]);
    }
  };
  return (
    <div className={styles.board}>
      {Array.from(Array(100).keys()).map((el) => {
        const field = { x: Math.floor(el / 10), y: el % 10 };
        return (
          <BoardField
            key={el}
            field={field}
            isClicked={isField(clickedFields, field)}
            isPossible={isField(possibleFields, field)}
            isDesired={isField(desiredFields, field)}
            onClick={(e) => onClickHandler(e, field)}
          />
        );
      })}
    </div>
  );
};

export default Board;
