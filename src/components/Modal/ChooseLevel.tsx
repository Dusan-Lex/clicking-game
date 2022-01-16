import styles from "./Choose.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { startLevel } from "../../store/actions";

import { Store } from "../../store/types";

const ChooseLevel = ({
  setModal,
}: {
  setModal: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const playerLevels = useSelector((state: Store) => {
    console.log(state.playerName, state.allStats);
    const obj = state.allStats[state.playerName];

    return Object.keys(obj).filter((el) => obj[el].length !== 0);
  });
  const dispatch = useDispatch();
  return (
    <div className={styles.choose}>
      <h3>Choose level:</h3>
      <ul>
        {playerLevels.map((x) => (
          <li
            key={x}
            onClick={() => {
              dispatch(startLevel(parseInt(x), 0));
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
