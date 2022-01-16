import styles from "./EndLevel.module.scss";

const GameOver = ({
  setModal,
}: {
  setModal: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className={styles.endlevel}>
      <h3>Game Over</h3>
      <p>Do you want to play again?</p>
      <div>
        <button
          onClick={() => {
            setModal("choose_player");
          }}
        >
          No
        </button>
        <button
          onClick={() => {
            setModal("choose_level");
          }}
        >
          Yes
        </button>
      </div>
    </div>
  );
};
export default GameOver;
