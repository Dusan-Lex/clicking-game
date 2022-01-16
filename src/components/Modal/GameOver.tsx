import { useDispatch, useSelector } from "react-redux";
import { addTimescore, startLevel } from "../../store/actions";

import { Store } from "../../store/types";

const GameOver = ({
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
      <h3>Game Over</h3>
      <p>Do you want to play again?</p>
      <div>
        {/* <button
          onClick={() => {
            dispatch(startLevel(level, lives + 1));
            setModal("");
          }}
        >
          No
        </button> */}
        <button
          onClick={() => {
            dispatch(startLevel(1, 0));
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
