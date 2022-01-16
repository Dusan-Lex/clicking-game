import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPlayer, changePlayer } from "../../store/actions";
import { Store } from "../../store/types";

const ChoosePlayer = ({
  setModal,
}: {
  setModal: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [name, setName] = useState("");
  const players = useSelector((state: Store) => Object.keys(state.allStats));
  const dispatch = useDispatch();
  return (
    <div>
      {players.length !== 0 && (
        <>
          <h3>Click to choose player</h3>
          <ul>
            {players.map((player, i) => (
              <li
                key={i}
                onClick={() => {
                  setModal("choose_level");
                  //   dispatch(changePlayer(player, 7));
                }}
              >
                {player}
              </li>
            ))}
          </ul>
          <h3>Or create new</h3>
        </>
      )}
      {players.length === 0 && <h3>Enter yor name</h3>}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addPlayer(name));
          setModal("");
          setName("");
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button>Create</button>
      </form>
    </div>
  );
};
export default ChoosePlayer;
