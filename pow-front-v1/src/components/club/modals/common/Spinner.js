import React from "react";
import Loader from "react-loader-spinner";

const Spinner = () => {
  return (
    <div>
      <Loader
        type="0val"
        color="#3d66ba"
        height={300}
        width={300}
        timeout={3000}
      ></Loader>
    </div>
  );
};

export default Spinner;
