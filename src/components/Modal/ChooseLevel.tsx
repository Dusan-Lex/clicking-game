import styles from "./Choose.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { startLevel } from "../../store/actions";

import { Store } from "../../store/types";
import { startingLevel } from "../../game.config";

const ChooseLevel = ({
  setModal,
  lives,
}: {
  setModal: React.Dispatch<React.SetStateAction<string>>;
  lives: number;
}) => {
  let playerLevels = useSelector((state: Store) => {
    const obj = state.allStats[state.playerName];
    return Object.keys(obj)
      .filter((level) => obj[level].length !== 0)
      .map((x) => parseInt(x));
  });

  if (playerLevels.length !== 0) {
    playerLevels.push(playerLevels[playerLevels.length - 1] + 1);
  } else {
    playerLevels.push(startingLevel);
  }
  const dispatch = useDispatch();
  return (
    <div className={styles.choose}>
      <h3>Choose level:</h3>
      <ul>
        {playerLevels.map((x) => (
          <li
            key={x}
            onClick={() => {
              dispatch(startLevel(x, lives));
              setModal("");
            }}
          >
            Level {x}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ChooseLevel;
