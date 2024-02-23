import React from "react";

export default function Photo(props) {
  console.log(props.photo);
  if (props.photo) {
    return (
      <div className="photo">
        <img src={props.photo} />
      </div>
    );
  } else return null;
}
