import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { Store } from "../store/types";
import styles from "./PlayerStats.module.scss";

const PlayerStats: FC = () => {
  const playerName = useSelector((state: Store) => state.playerName);
  let playerStats = useSelector((state: Store) =>
    Object.entries(state.allStats[playerName])
  );
  const [showAllTimes, setShowAllTimes] = useState<number>(0);
  playerStats = playerStats.filter((el) => el[1].length !== 0).reverse();
  return (
    <>
      <div className={styles.box}>
        <h5>Player :</h5>
        <p>{playerName}</p>
      </div>
      <div className={styles.box}>
        <h5>Top Score :</h5>
        <div className={styles.levelsstats}>
          <div className={styles.levelstats}>
            <div style={{ fontWeight: 600, color: "rgb(92, 47, 17)" }}>
              Level
            </div>
            <div style={{ fontWeight: 600, color: "rgb(92, 47, 17)" }}>
              Time
            </div>
            <div style={{ fontWeight: 600, color: "rgb(92, 47, 17)" }}>
              Times
            </div>
          </div>
          {playerStats.map((levelStats) => (
            <div className={styles.levelstats} key={levelStats.toString()}>
              <div>Level {levelStats[0]}</div>
              <div>
                {Math.min(...levelStats[1])} sec
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0c6909"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  onClick={() => {
                    setShowAllTimes(parseInt(levelStats[0]));
                  }}
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                {showAllTimes === parseInt(levelStats[0]) && (
                  <ul className={styles.popup}>
                    {levelStats[1]
                      .sort((a, b) => a - b)
                      .map((el, i) => (
                        <li key={i}>{el} secs</li>
                      ))}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#941313"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowAllTimes(0);
                      }}
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </ul>
                )}
              </div>
              <div>{levelStats[1].length}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PlayerStats;
