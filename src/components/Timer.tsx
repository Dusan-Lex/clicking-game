import { useEffect, useState } from "react";

export interface TimerProps {
  stopTimer: boolean;
}

const Timer = ({ stopTimer }: TimerProps) => {
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timer;
    if (!stopTimer) {
      interval = setInterval(() => setTimer(timer + 1), 1000);
    } else {
      setTimer(0);
    }
    return () => clearInterval(interval);
  }, [timer, stopTimer]);

  return (
    <div className="App">
      <div>Timer: {timer} s</div>
    </div>
  );
};

export default Timer;
