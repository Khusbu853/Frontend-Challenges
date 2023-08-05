import React, { useState } from "react";

import TodoListItem from "./TodoListItem";

const Todo = () => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);
  const [editInfo, setEditInfo] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();
    if (editInfo) {
      updateItem(value);
    } else {
      addItem(value);
    }

    setValue("");
  };

  const addItem = (value) => {
    setItems(items.concat({ value, id: new Date().getTime() }));
  };

  const updateItem = (value) => {
    const newItems = [...items];
    const item = newItems.find((item) => item.id === editInfo.id);
    item.value = value;
    setItems(newItems);
    setEditInfo(null);
  };

  const handleEditClick = ({ id, value }) => {
    setValue(value);
    setEditInfo({ id, value });
  };

  const cancelHandler = () => {
    setValue("");
    setEditInfo(null);
  };

  const handleDeleteClick = (idx) => {
    if (editInfo?.id === items[idx].id) {
      setValue("");
      setEditInfo(null);
    }
    setItems(items.filter((_, i) => i !== idx));
  };

  return (
    <div className="todo">
      <form onSubmit={submitHandler}>
        <input className="input"
          type="text"
          value={value}
          placeholder="Enter your todo"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn" type="submit" disabled={!value}>
          {editInfo ? "Update" : "Submit"}
        </button>
        <button className="btn cancel-btn"
          type="reset"
          onClick={cancelHandler}
          disabled={!(value || editInfo)}
        >
          Cancel
        </button>
      </form>

      <TodoListItem
        items={items}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  );
};

export default Todo;

