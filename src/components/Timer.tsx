import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTimescore, setTimer, startLevel } from "../store/actions";
import { Store } from "../store/types";

export interface TimerProps {
  startCount: boolean;
}

const Timer = ({ startCount }: TimerProps) => {
  const timer = useSelector((state: Store) => state.timer);
  const dispatch = useDispatch();

  useEffect(() => {
    let interval: NodeJS.Timer;
    if (startCount) {
      interval = setInterval(() => dispatch(setTimer(timer + 1)), 1000);
    } else {
      dispatch(setTimer(0));
    }
    return () => clearInterval(interval);
  }, [timer, startCount]);

  return <div>Timer: {timer} s</div>;
};

export default Timer;
