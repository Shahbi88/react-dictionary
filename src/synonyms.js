import React from "react";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms) {
    return (
      <div>
        <small className="synonyms">
          Synonyms:
          <br />
          {props.synonyms}
        </small>
      </div>
    );
  } else return null;
}
