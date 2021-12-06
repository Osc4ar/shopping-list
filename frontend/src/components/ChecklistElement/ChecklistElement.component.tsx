import React from "react";

interface Item {
  id: string;
  name: string;
}

function ChecklistElement(props: Item) {
  return (
    <div key={props.id}>
      <input type="checkbox" id={props.id} />
      <label htmlFor={props.id}>{props.name}</label>
    </div>
  );
}

export default ChecklistElement;
