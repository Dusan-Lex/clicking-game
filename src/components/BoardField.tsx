import React from "react";
import { Field } from "./Board";
import styles from "./BoardField.module.scss";
export interface BoardFieldProps {
  field: Field;
  isClicked: boolean;
  isPossible: boolean;
  isDesired: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const BoardField = ({
  field,
  isClicked,
  isPossible,
  isDesired,
  onClick,
}: BoardFieldProps) => {
  return (
    <div
      className={
        styles.board_field +
        ` ${isClicked ? styles.clicked : ""}` +
        ` ${isPossible ? styles.possible : ""}` +
        ` ${isDesired ? styles.desired : ""}`
      }
      onClick={onClick}
    >
      <div>
        {field.x} , {field.y}
      </div>
    </div>
  );
};

export default React.memo(BoardField);
