import React from "react";
let status = "";
const cssStyle = {
  textAlign: "center",
};

export default function Temperature(props) {
  if (props.value > 25) status = "It's sunny today!🌅";
  else if (props.value < 10) status = "It's cold today! ❄";

  return <><h1 style={cssStyle} >{status}</h1><hr/></>;
}
