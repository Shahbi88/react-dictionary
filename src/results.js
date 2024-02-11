import React from "react";
import Dictionary from "./dictionary";

export default function Results(props) {
  console.log(props.results);
  return <div>{props.results}</div>;
}
