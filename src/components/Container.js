import React from "react";

function Container({ children }) {
  return <div style={style}>{children}</div>;
}

const style = {
  backgroundColor: "rgba(255, 255, 255, 0.05)",
  maxWidth: "50%",
  margin: "auto",
  paddingInline: "30px",
  borderRadius: "10px",
};

export default Container;
