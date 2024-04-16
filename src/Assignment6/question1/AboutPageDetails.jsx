import React from "react";
import { useParams } from "react-router-dom";
const AboutPageDetails = () => {
  const { aboutId } = useParams();
  return <div>HELLO ! {aboutId}</div>;
};

export default AboutPageDetails;
