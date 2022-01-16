import { useDispatch, useSelector } from "react-redux";
import { addTimescore, startLevel } from "../../store/actions";

import { Store } from "../../store/types";

const CrossedLevel = ({
  setModal,
}: {
  setModal: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const level = useSelector((state: Store) => state.level);
  const lives = useSelector((state: Store) => state.lives);
  const playerName = useSelector((state: Store) => state.playerName);

  const dispatch = useDispatch();
  return (
    <div>
      <h3>You have completed level: {level}</h3>
      <p>Do you want to play next level?</p>
      <div>
        <button
          onClick={() => {
            dispatch(addTimescore(playerName, level));
            dispatch(startLevel(1, 0));
            setModal("");
          }}
        >
          No
        </button>
        <button
          onClick={() => {
            dispatch(addTimescore(playerName, level));
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
