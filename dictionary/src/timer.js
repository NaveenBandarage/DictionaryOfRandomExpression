import React, { useEffect, useState } from "react";

const Timer = ({ callQueuedTime }) => {
  const [time, setTime] = useState(() => new Date().getSeconds());
  useEffect(() => {
    const queuedTime = new Date(callQueuedTime).getSeconds();
    console.log(queuedTime);

    const intervalId = setInterval(function () {
      setTime(new Date().getSeconds() + queuedTime);
    }, 1);
    return () => {
      clearInterval(intervalId);
    };
  }, [callQueuedTime]);
  return <p>{time}</p>;
};

export default Timer;
