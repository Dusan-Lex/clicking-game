import React from "react";
import { Field } from "./Board";
import styles from "./BoardField.module.scss";
export interface BoardFieldProps {
  field: Field;
  isClicked: boolean;
  isPossible: boolean;
  isGenerated: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const BoardField = ({
  field,
  isClicked,
  isPossible,
  isGenerated,
  onClick,
}: BoardFieldProps) => {
  return (
    <div
      className={
        styles.board_field +
        ` ${isClicked ? styles.clicked : ""}` +
        ` ${isPossible ? styles.possible : ""}` +
        ` ${isGenerated ? styles.generated : ""}`
      }
      onClick={onClick}
    >
      <div></div>
    </div>
  );
};

export default BoardField;
