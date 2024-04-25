import { useEffect, useState } from "react";
import { pathArray } from "../data";
const SlideShow = () => {
  const [path, setPath] = useState(0);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (play) {
      const timer = setTimeout(() => {
        if (path === pathArray.length - 1) {
          setPath(0);
        } else {
          setPath(path + 1);
        }
      }, 3000);
      return () => clearTimeout(timer); //for cleanup of previous Timeout
    }
  }, [play, path]);
  return (
    <div>
      <img src={pathArray[path]} width={300} height={400} alt="slide" />
      <div>
        <button onClick={() => setPlay(true)}>Play</button>
        <button onClick={() => setPlay(false)}>Pause</button>
      </div>
    </div>
  );
};
export default SlideShow;
