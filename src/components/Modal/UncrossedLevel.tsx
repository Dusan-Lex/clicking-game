import { useDispatch, useSelector } from "react-redux";
import { startLevel } from "../../store/actions";

import { Store } from "../../store/types";

const UncrossedLevel = ({
  setModal,
}: {
  setModal: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const clickedFields = useSelector((state: Store) => state.clickedFields);
  const level = useSelector((state: Store) => state.level);
  const lives = useSelector((state: Store) => state.lives);
  const remainingLives = lives - (level + 1 - clickedFields.length);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>You haven't completed level: {level} but you still have lives </h3>
      <p>Do you want to play this level again?</p>
      <div>
        <button
          onClick={() => {
            dispatch(startLevel(1, remainingLives));
          }}
        >
          No
        </button>
        <button
          onClick={() => {
            dispatch(startLevel(level, remainingLives));
            setModal("");
          }}
        >
          Yes
        </button>
      </div>
    </div>
  );
};
export default UncrossedLevel;
