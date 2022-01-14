import { FC, useEffect, useState } from "react";
import { calculatePossibleFields } from "../utils/calculatePossibleFields";
import { generateRandomFields } from "../utils/generateRandomFields";
import { isField } from "../utils/isField";
import styles from "./Board.module.scss";
import BoardField from "./BoardField";
import Modal from "./Modal";

export interface Field {
  x: number;
  y: number;
}

const Board: FC = () => {
  console.log("render board");
  const [clickedFields, setClickedFields] = useState<Field[]>([]);
  const [possibleFields, setPossibleFields] = useState<Field[]>([]);
  const [generatedFields, setGeneratedFields] = useState<Field[]>([]);
  const [level, setLevel] = useState<number>(2);
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
      setModal(true);
    }
  }, [possibleFields]);

  const onClickHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    field: Field
  ) => {
    console.log("onClick");
    e.stopPropagation();
    if (clickedFields.length === 0) {
      setClickedFields((fields) => [...fields, field]);
      setGeneratedFields(generateRandomFields(field, level));
    }
    if (isField(possibleFields, field)) {
      setClickedFields((fields) => [...fields, field]);
    }
  };
  return (
    <>
      {modal && (
        <Modal
          onHideCart={() => {
            setModal(false);
          }}
        >
          <h1>HKJHKJHKJ</h1>
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
    </>
  );
};

export default Board;
