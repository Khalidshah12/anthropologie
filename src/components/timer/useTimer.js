import { useState, useRef, useEffect } from "react";

export default function useTimer(delay) {
  const [timer, setTimer] = useState(60);
  const ref = useRef(null);

  //   console.log(ref);

  useEffect(() => {
    const clearup = () => {
      Stop();
    };
    return clearup;
  }, []);

  const Start = () => {
    if (ref.current !== null) return;
    ref.current = setInterval(() => {
      setTimer((prev) => {
        if (prev === 0) {
          return prev;
        }
        return prev - 1;
      });
    }, delay);
  };

  const Stop = () => {
    clearInterval(ref.current);
    ref.current = null;
  };

  const Reset = () => {
    Stop();
    setTimer(0);
  };

  return { timer, Stop, Start, Reset };
}
