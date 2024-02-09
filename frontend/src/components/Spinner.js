import React from "react";
import { Spinner as Loader } from "react-bootstrap";

const Spinner = () => {
  return (
    <Loader
      animation="border"
      variant="info"
      size="lg"
      style={{
        marginLeft: "50%",
        marginTop: "10%",
        width: "3rem",
        height: "3rem",
      }}
    ></Loader>
  );
};

export default Spinner;
