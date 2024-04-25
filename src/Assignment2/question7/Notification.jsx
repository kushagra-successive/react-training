import { useEffect, useState } from "react";
import { notification } from "../data";
const Notification = () => {
  const [message, setState] = useState(notification);
  useEffect(() => {
    const timer = setTimeout(() => {
      setState(""); //hiding the notification
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [message]);
  return (
    <div>
      <p style={{ color: "Brown" }}>{message}</p>
    </div>
  );
};
export default Notification;
//First useEffect run as component renders and prints message and after 5sec as state change it makes rerender of component and again useEffect is invoked but this time Settimeout is not work because immediately clearTimeout runs first which which clears the previous timemout and now nomore rerendering and rendering is done
