import styles from "./Board.module.scss";
import BoardField from "./BoardField";

const Board = () => {
  return (
    <div className={styles.board}>
      {Array.from(Array(100).keys()).map((el) => (
        <BoardField key={el} />
      ))}
    </div>
  );
};

export default Board;
