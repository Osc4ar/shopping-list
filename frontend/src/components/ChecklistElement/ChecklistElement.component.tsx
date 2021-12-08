import { useContext } from "react";
import { TotalContext } from "../../utils/state/TotalContext";

interface Item {
  id: string;
  name: string;
}

function ChecklistElement(props: Item) {
  const { total, setTotal } = useContext(TotalContext);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) onCheck();
    else onUncheck();
  };

  const onCheck = () => {
    setTotal(total - 1);
  };

  const onUncheck = () => {
    setTotal(total + 1);
  };

  return (
    <div key={props.id}>
      <input type="checkbox" id={props.id} onChange={onChange} />
      <label htmlFor={props.id}>{props.name}</label>
    </div>
  );
}

export default ChecklistElement;
