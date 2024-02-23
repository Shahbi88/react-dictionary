import React from "react";

export default function Example(props) {
  console.log(props.sxample);
  if (props.example) {
    return (
      <div>
        <small className="example">
          Example:
          <br />
          {props.example}
        </small>
      </div>
    );
  } else return null;
}
