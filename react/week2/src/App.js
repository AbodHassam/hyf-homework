import React, { Component } from "react";
import TodoItems from "./components/TodoItems/TodoItems";
import AddItem from "./components/AddItem/AddItem";
class App extends Component {
  state = {
    items: [
      { id: 1, description: "Get out of bed", done:true},
      { id: 2, description: "Brush teeth", done:false},
      { id: 3, description: "Eat breakfast", done:false}
    ]
  };

  deleteItem = id => {
    let items = this.state.items.filter(item => {
      return item.id !== id;
    });
    this.setState({ items });

    //another way
    /* let items = this.state.items;
    let i = items.findIndex(item => item.id === id);
    items.splice(i, 1);
    this.setState({ items }); */
  };
  
  addItem = item => {
    item.id = this.state.items.length +1;
    let items = this.state.items;
    items.push(item);
    this.setState({ items });
  };

  toggleDone = id =>{
    const newitems = this.state.items.map(item => {
      if (item.id === id){
        item.done = !item.done;
        return item;
      } else {
        return item;
      }
    });

    this.setState({ items: newitems });
  }

  render() {
    return (
      <div className="App container">
        <h1>Todo List</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem} toggleDone={this.toggleDone} />
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
