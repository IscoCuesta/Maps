import React from "react";
import "./style.css";
// import { url } from "inspector";

function Parallax({ props }) {
  return (
    <div
    {...props}
    // style={{backgroundImage: "src=("+props.img+")" }}
      className="parallax"
    >
      {props.BG}
      {/* {children} */}
    </div>
  );
}

export default Parallax;
