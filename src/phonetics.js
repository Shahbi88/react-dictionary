import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetics);
  if (props.phonetics) {
    return (
      <div>
        <small className="phonetics">
          Phonetics:
          {props.phonetics}
        </small>
      </div>
    );
  } else return null;
}
