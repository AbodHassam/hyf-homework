import React from "react";
export const TodoItem = props => {
  const { items, deleteItem, toggleDone } = props;
  
  const ListItem = items.length ? (
    items.map(item => {
      const itemChecked = item.done ? " itemChecked " : "";
      let editIcon = (
        <img
          id="icon"
          alt=""
          onClick={() => props.onStartEditItem(item.id)}
          src="https://cdn3.iconfinder.com/data/icons/vector-icons-for-mobile-apps-2/512/Edit_black-512.png"
        />
      );
      let titleDisplay = item.description;
      if (item.isEditing) {
        titleDisplay = (
          <input
            type="text"
            onChange={e => props.onTextEditItem(e, item.id)}
            value={item.descriptionEdit}
          />
        );
        editIcon = (
          <b className="inlineIcons">
            <img
              id="icon"
              alt=""
              onClick={() => props.onCancelEditItem(item.id)}
              src="https://cdn3.iconfinder.com/data/icons/vector-icons-for-mobile-apps-2/512/Remove_black-512.png"
            />
            <img
              id="icon"
              alt=""
              onClick={() => props.onUpdateItem(item.id)}
              src="https://cdn3.iconfinder.com/data/icons/vector-icons-for-mobile-apps-2/512/Check_black-512.png"
            />
          </b>
        );
      }

      return (
        <div key={item.id}>
          <span id="desinput" className={"description" + itemChecked}>
            {titleDisplay}
            {editIcon}
          </span>
          <span className={"date" + itemChecked}>{item.date}</span>
          <span className="done">
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => toggleDone(item.id)}
            />
          </span>
          <span className="action icon" onClick={() => deleteItem(item.id)}>
            &times;
          </span>
        </div>
      );
    })
  ) : (
    <p>There is no item to show</p>
  );
  return (
    <div className="ListItems">
      <div>
        <span className="description title">description</span>
        <span className="date title">Deadline</span>
        <span className="done title">done</span>
        <span className="action title">Action</span>
      </div>
      {ListItem}
    </div>
  );
};
