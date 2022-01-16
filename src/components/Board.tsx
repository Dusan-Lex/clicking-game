import { FC, useEffect, useState } from "react";
import { isField } from "../utils/isField";
import styles from "./Board.module.scss";
import BoardField from "./BoardField";
import Modal from "./Modal/Modal";
import Timer from "./Timer";

import { useSelector, useDispatch } from "react-redux";
import { Field, Store } from "../store/types";
import { generateLevel, generatePossibleFields } from "../store/actions";
import ChoosePlayer from "./Modal/ChoosePlayer";
import ChooseLevel from "./Modal/ChooseLevel";
import CrossedLevel from "./Modal/CrossedLevel";
import UncrossedLevel from "./Modal/UncrossedLevel";
import GameOver from "./Modal/GameOver";

const Board: FC = () => {
  const generatedFields = useSelector((state: Store) => state.generatedFields);
  const clickedFields = useSelector((state: Store) => state.clickedFields);
  const possibleFields = useSelector((state: Store) => state.possibleFields);
  const playerName = useSelector((state: Store) => state.playerName);
  const level = useSelector((state: Store) => state.level);
  const lives = useSelector((state: Store) => state.lives);
  const dispatch = useDispatch();

  const [startCount, setStartCount] = useState<boolean>(false);

  const [modal, setModal] = useState<string>("choose_player");

  useEffect(() => {
    if (clickedFields.length !== 0 && possibleFields.length === 0) {
      setStartCount(false);
      if (clickedFields.length === level + 1) {
        setModal("crossed_level");
      } else {
        const remainingLives = lives - (level + 1 - clickedFields.length);
        if (remainingLives > 0) {
          setModal("uncrossed_level");
        } else {
          setModal("game_over");
        }
      }
    }
  }, [possibleFields.length, level, lives, clickedFields.length]);

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
      {modal && (
        <Modal>
          {modal === "choose_player" && <ChoosePlayer setModal={setModal} />}
          {modal === "choose_level" && (
            <ChooseLevel setModal={setModal} lives={lives} />
          )}
          {modal === "crossed_level" && <CrossedLevel setModal={setModal} />}
          {modal === "uncrossed_level" && (
            <UncrossedLevel setModal={setModal} />
          )}
          {modal === "game_over" && <GameOver setModal={setModal} />}
        </Modal>
      )}
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
      </div>
    </div>
  );
};

export default Board;
