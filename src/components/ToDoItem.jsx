import React, { useState } from "react";

function ToDoItem(props) {
  const [hover, setHover] = useState("default");
  function handleHover() {
    setHover("pointer");
  }

  return (
    <div
      style={{ cursor: hover }}
      onMouseOver={handleHover}
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
