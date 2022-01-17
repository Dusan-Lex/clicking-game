import styles from "./EndLevel.module.scss";
import { useDispatch, useSelector } from "react-redux";

import { Store } from "../../store/types";
import { changeLives, startLevel } from "../../store/actions";
import { startingLevel } from "../../game.config";

const UncrossedLevel = ({
  setModal,
}: {
  setModal: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const clickedFields = useSelector((state: Store) => state.clickedFields);
  const level = useSelector((state: Store) => state.level);
  const lives = useSelector((state: Store) => state.lives);
  const dispatch = useDispatch();
  const remainingLives = lives - (level + 1 - clickedFields.length);

  return (
    <div className={styles.endlevel}>
      <h3>
        You haven't completed level {level} but you still have {remainingLives}{" "}
        {`${remainingLives !== 1 ? "lives" : "life"}`}
      </h3>
      <p>Do you want to continue the game?</p>
      <div>
        <button
          onClick={() => {
            // dispatch(startLevel(startingLevel, 0));
            // setModal("choose_player");
            dispatch(startLevel(startingLevel, 0));
            setModal("");
          }}
        >
          No
        </button>
        <button
          onClick={() => {
            dispatch(changeLives(remainingLives));
            setModal("choose_level");
          }}
        >
          Yes
        </button>
      </div>
    </div>
  );
};
export default UncrossedLevel;
