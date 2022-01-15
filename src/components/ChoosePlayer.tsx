import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPlayer } from "../store/actions";
import { Store } from "../store/types";

const ChoosePlayer = () => {
  const [name, setName] = useState("");
  const players = useSelector((state: Store) => Object.keys(state.allStats));
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Click to choose player</h3>
      <ul>
        {players.map((player, i) => (
          <li key={i} onClick={() => {}}>
            {player}
          </li>
        ))}
      </ul>
      <h3>Or create new</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addPlayer(name));
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
