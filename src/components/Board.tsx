import { FC, useEffect, useState } from "react";
import { isField } from "../utils/isField";
import styles from "./Board.module.scss";
import BoardField from "./BoardField";
// import Modal from "./Modal";
import Timer from "./Timer";

import { useSelector, useDispatch } from "react-redux";
import { Field, Store } from "../store/types";
import {
  addTimescore,
  generateLevel,
  generatePossibleFields,
  startLevel,
} from "../store/actions";
import ChoosePlayer from "./ChoosePlayer";

const Board: FC = () => {
  const generatedFields = useSelector((state: Store) => state.generatedFields);
  const clickedFields = useSelector((state: Store) => state.clickedFields);
  const possibleFields = useSelector((state: Store) => state.possibleFields);
  const playerName = useSelector((state: Store) => state.playerName);
  const level = useSelector((state: Store) => state.level);
  const lives = useSelector((state: Store) => state.lives);
  const dispatch = useDispatch();

  const [startCount, setStartCount] = useState<boolean>(false);

  // const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    if (clickedFields.length !== 0 && possibleFields.length === 0) {
      setStartCount(false);
      if (clickedFields.length === level + 1) {
        dispatch(addTimescore(playerName, level));
        dispatch(startLevel(level + 1, lives + 1));
      } else {
        const remainingLives = lives - (level + 1 - clickedFields.length);
        if (remainingLives > 0) {
          dispatch(startLevel(level, remainingLives));
        } else {
          dispatch(startLevel(1, 0));
        }
      }
    }
  }, [
    possibleFields,
    level,
    dispatch,
    lives,
    clickedFields.length,
    playerName,
  ]);

  const onClickHandler = (field: Field) => {
    if (clickedFields.length === 0) {
      setStartCount(true);
      dispatch(generateLevel(field, level));
      dispatch(generatePossibleFields(field));
    } else {
      if (isField(possibleFields, field)) {
        dispatch(generatePossibleFields(field));
      }
    }
  };
  return (
    <div className={styles.container}>
      {/* {modal && (
        <Modal onHideCart={() => {}}>
          <h3>You have completed level: {level}</h3>
          <p>Do you want to play next level?</p>
        </Modal>
      )} */}
      <div className={styles.board}>
        {Array.from(Array(100).keys()).map((el) => {
          const field = { x: Math.floor(el / 10), y: el % 10 };
          return (
            <BoardField
              key={el}
              isClicked={isField(clickedFields, field)}
              isPossible={isField(possibleFields, field)}
              isGenerated={isField(generatedFields, field)}
              onClick={() => onClickHandler(field)}
            />
          );
        })}
        <div className={styles.bottom}>
          <div>Level: {level}</div>
          <Timer startCount={startCount} />
          <div>Unclicked: {level + 1 - clickedFields.length}</div>
          <div>Lives: {lives}</div>
        </div>
      </div>
      <div className={styles.gamestats}>
        <div>Player name: {playerName}</div>

        <ChoosePlayer />
      </div>
    </div>
  );
};

export default Board;
