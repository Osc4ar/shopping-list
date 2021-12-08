import React, { useState, useContext } from "react";
import ChecklistElement from "../ChecklistElement";
import { TotalContext } from "../../utils/state/TotalContext";

function Checklist() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState<string[]>([]);
  const { total, setTotal } = useContext(TotalContext);

  const renderItems = (items: string[]) => {
    if (items.length === 0) return;

    return items.map((item, index) =>
      ChecklistElement({ id: index + "", name: item })
    );
  };

  const addNewItem = () => {
    setItems([...items, newItem]);
    setNewItem("");
    setTotal(total + 1);
  };

  return (
    <>
      <h2>{total}</h2>
      {renderItems(items)}
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
