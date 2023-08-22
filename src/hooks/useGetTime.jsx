import { useEffect, useState } from "react";

function useGetTime(country) {
  const [time, setTime] = useState("");

  console.log(country);
  useEffect(() => {
    const getTime = () => {
      let date = new Date();
      let options = { timeZone: country };
      let time = date.toLocaleString("en-US", options);
      return time;
    };

    const intervalId = setInterval(() => {
      const currentTime = getTime();
      setTime(currentTime);
    }, 1000);

    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts
    };
  }, []); // Empty dependency array ensures the effect runs only once during component mount

  return breakDateAndTime(time);
}

const breakDateAndTime = (time) => {
  const newTime = time.split(" ");
  return newTime;
};
export default useGetTime;
