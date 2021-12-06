import React, { useState } from "react";
import ChecklistElement from "../ChecklistElement";

function Checklist() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState<string[]>([]);

  const addNewItem = () => {
    setItems([...items, newItem]);
    setNewItem("");
  };

  return (
    <>
      {items.map((item, index) =>
        ChecklistElement({ id: index + "", name: item })
      )}
      <input
        type="text"
        value={newItem}
        onChange={(event) => setNewItem(event.target.value)}
      />
      <button onClick={addNewItem}>Add</button>
    </>
  );
}

export default Checklist;
