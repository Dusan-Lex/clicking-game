import { FC, useEffect, useState } from "react";
import { calculatePossibleFields } from "../utils/calculatePossibleFields";
import { generateRandomFields } from "../utils/generateRandomFields";
import { isField } from "../utils/isField";
import styles from "./Board.module.scss";
import BoardField from "./BoardField";
import Modal from "./Modal";
import Timer from "./Timer";

export interface Field {
  x: number;
  y: number;
}

const Board: FC = () => {
  console.log("render board");
  const [clickedFields, setClickedFields] = useState<Field[]>([]);
  const [possibleFields, setPossibleFields] = useState<Field[]>([]);
  const [generatedFields, setGeneratedFields] = useState<Field[]>([]);
  const [level, setLevel] = useState<number>(1);
  const [stopTimer, setStopTimer] = useState<boolean>(true);
  const [lives, setLives] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    setPossibleFields(
      calculatePossibleFields(clickedFields).filter((x) =>
        isField(generatedFields, x)
      )
    );
  }, [clickedFields, generatedFields]);

  useEffect(() => {
    if (clickedFields.length !== 0 && possibleFields.length === 0) {
      setStopTimer(true);
      if (clickedFields.length === level + 1) {
        // pozovi modal i ako je odgovor yes setuj dole navedeno
        setLevel(level + 1);
        setLives(lives + 1);
      } else {
        setLives(lives - (level + 1 - clickedFields.length));
      }
      setClickedFields([]);
      setPossibleFields([]);
      setGeneratedFields([]);
    }
  }, [possibleFields]);

  const onClickHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    field: Field
  ) => {
    e.stopPropagation();

    if (clickedFields.length === 0) {
      setStopTimer(false);
      setClickedFields((fields) => [...fields, field]);
      setGeneratedFields(generateRandomFields(field, level));
    }
    if (isField(possibleFields, field)) {
      setClickedFields((fields) => [...fields, field]);
    }
  };
  return (
    <div className={styles.container}>
      {modal && (
        <Modal onHideCart={() => {}}>
          <h3>You have completed level: {level}</h3>
          <p>Do you want to play next level?</p>
        </Modal>
      )}
      <div className={styles.board}>
        {Array.from(Array(100).keys()).map((el) => {
          const field = { x: Math.floor(el / 10), y: el % 10 };
          return (
            <BoardField
              key={el}
              field={field}
              isClicked={isField(clickedFields, field)}
              isPossible={isField(possibleFields, field)}
              isGenerated={isField(generatedFields, field)}
              onClick={(e) => onClickHandler(e, field)}
            />
          );
        })}
      </div>
      <div className={styles.gamestats}>
        <div>Level: {level}</div>
        <Timer stopTimer={stopTimer} />
        <div>Clicked: {clickedFields.length}</div>
        <div>Unclicked: {level + 1 - clickedFields.length}</div>
        <div>Lives: {lives}</div>
      </div>
    </div>
  );
};

export default Board;
