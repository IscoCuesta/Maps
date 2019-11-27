import React from "react";

function Jumbotron({ children, props }) {
  return (
    <div
      {...props}
      style={{ clear: "both",marginTop: "20px" ,textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
