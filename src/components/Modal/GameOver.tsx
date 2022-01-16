import { useDispatch } from "react-redux";
import { startingLevel } from "../../game.config";
import { changeLives, startLevel } from "../../store/actions";

import styles from "./EndLevel.module.scss";

const GameOver = ({
  setModal,
}: {
  setModal: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.endlevel}>
      <h3>Game Over</h3>
      <p>Do you want to play again?</p>
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
            dispatch(startLevel(startingLevel, 0));
            setModal("");
          }}
        >
          Yes
        </button>
      </div>
    </div>
  );
};
export default GameOver;
