import React from "react";
// import Alldiss from "./Alldiss.js";
import RowAndColumnSpacing from "./RowAndColumnSpacing.js";

function Discussion() {
  const centerDivStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div styles={centerDivStyle}>
      <RowAndColumnSpacing />
      {/* <Alldiss /> */}
    </div>
  );
}

export default Discussion;
