import React from "react";

const box = (props) => {
  let result;
  if (
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !== ""
  ) {
    result = props.result == "win" ? "lose" : "win";
  } else {
    result = props.result;
  }

  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <h2>{props.item.name}</h2>
      <img className="image" src={props.item.img} alt="" />
      <h2>{result}</h2>
    </div>
  );
};

export default box;
