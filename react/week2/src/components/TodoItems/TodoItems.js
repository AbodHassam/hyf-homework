import React from "react";
//import "./TodoItems.css";
const TodoItems = props => {
  const { items, deleteItem,toggleDone } = props;
  const ListItem = items.length ? (
    items.map(item => {
      return (
        <div key={item.id}>
          <span className="description" id={item.done ? 'item--checked' : "" }>{item.description}</span>
          <span className="done"><input type='checkbox' checked={item.done} onChange={() => toggleDone(item.id)} /></span>
          <span className="action icon" onClick={() => deleteItem(item.id)} >
            &times;
          </span>
        </div>
      )
    })
  ) : (
      <p>There is no item to show</p>
    );
  return (
    <div className="ListItems">
      <div>
        <span className='description title'>description</span>
        <span className='done title'>done</span>
        <span className='action title'>Action</span>
      </div>
      {ListItem}
    </div>
  );
};

export default TodoItems;
