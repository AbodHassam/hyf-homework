import React, { Component } from "react";
import { TodoItem } from "./TodoItem";
import { AddItem } from "./AddItem";

class App extends Component {
  state = {
    items: [
      { id: 1, description: "Get out of bed", date: "2017-09-13", done: true },
      { id: 2, description: "Brush teeth", date: "2017-09-14", done: false },
      { id: 3, description: "Eat breakfast", date: "2017-09-15", done: false }
    ]
  };

  addItem = item => {
    item.id = this.state.items.length + 1;
    let items = this.state.items;
    let num = Math.random() * 10;
    items.map(i => {
      if (i.id === item.id) {
        return (item.id = this.state.items.length + num.toFixed(2));
      }
      return item.id;
    });
    items.push(item);
    this.setState({ items });
  };

  deleteItem = id => {
    const items = this.state.items.filter(item => {
      return item.id !== id;
    });
    this.setState({ items });
  };

  onStartEditItem = id => {
    const items = this.state.items.map(item => {
      if (item.id === id) {
        item.isEditing = true;
        item.descriptionEdit = item.description;
      }

      return item;
    });

    this.setState({ items });
  };

  onUpdateItem = id => {
    const items = this.state.items.map(item => {
      if (item.id === id) {
        item.isEditing = false;
        item.description = item.descriptionEdit;
      }

      return item;
    });

    this.setState({ items });
  };

  onCancelEditItem = id => {
    const items = this.state.items.map(item => {
      if (item.id === id) {
        item.isEditing = false;
        item.descriptionEdit = null;
      }

      return item;
    });

    this.setState({ items });
  };

  onTextEditItem(e, id) {
    const items = this.state.items.map(item => {
      if (item.id === id) {
        item.descriptionEdit = e.target.value;
      }

      return item;
    });

    this.setState({ items });
  }

  toggleDone = id => {
    const newData = this.state.items.map(item => {
      if (item.id === id) item.done = !item.done;
      return item;
    });

    this.setState({ items: newData });
  };

  render() {
    return (
      <div>
        <h1>My Todo List</h1>
        <div className="App container">
          <TodoItem
            items={this.state.items}
            /* key={item.id} */
            deleteItem={this.deleteItem}
            onStartEditItem={this.onStartEditItem}
            onTextEditItem={this.onTextEditItem.bind(this)}
            onUpdateItem={this.onUpdateItem}
            onCancelEditItem={this.onCancelEditItem}
            toggleDone={this.toggleDone}
            onMouseOvering={this.onMouseOvering}
            onMouseOuting={this.onMouseOuting}
          />
          <AddItem addItem={this.addItem} />
        </div>
      </div>
    );
  }
}

export default App;