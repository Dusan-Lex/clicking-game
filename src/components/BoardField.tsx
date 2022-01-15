import { FC } from "react";
import styles from "./BoardField.module.scss";

export interface BoardFieldProps {
  isClicked: boolean;
  isPossible: boolean;
  isGenerated: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const BoardField: FC<BoardFieldProps> = ({
  isClicked,
  isPossible,
  isGenerated,
  onClick,
}) => {
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
