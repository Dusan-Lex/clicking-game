import styles from "./EndLevel.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addTimescore, changeLives, startLevel } from "../../store/actions";

import { Store } from "../../store/types";
import { useEffect } from "react";

const CrossedLevel = ({
  setModal,
}: {
  setModal: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const level = useSelector((state: Store) => state.level);
  const lives = useSelector((state: Store) => state.lives);
  const playerName = useSelector((state: Store) => state.playerName);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addTimescore(playerName, level));
  }, [playerName, level, dispatch]);
  return (
    <div className={styles.endlevel}>
      <h3>You have completed level {level} .</h3>
      <p>Do you want to continue the game?</p>
      <div>
        <button
          onClick={() => {
            dispatch(changeLives(0));
            setModal("choose_player");
          }}
        >
          No
        </button>
        <button
          onClick={() => {
            dispatch(startLevel(level + 1, lives + 1));
            setModal("");
          }}
        >
          Yes
        </button>
      </div>
    </div>
  );
};
export default CrossedLevel;
