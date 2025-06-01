import React, { useState } from "react";

const Item = () => {
  const [item, setItem] = useState("");

  const onItemChange = ({ target }) => {
    setItem(target.value);
  };

  return (
    <div>
      <input type="text" onChange={(e) => onItemChange(e)}></input>

      <div>{`The current item is ${item}`}</div>
    </div>
  );
};

export default Item;
