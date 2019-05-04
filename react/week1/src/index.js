import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const ToDoList = [
    {
        task: 'Get out of bed',
        date: 'Wed Sep 13 2017'
    },
    {
        task: 'Brush teeth',
        date: 'Thu Sep 14 2017'
    },
    {
        task: 'Eat breakfast',
        date: 'Fri Sep 15 2017'
    }
];

class ToDo extends Component {
    render() {
        const { task, index, date } = this.props;
        return (
            <tbody>
                <tr>
                    <td>{index}</td>
                    <td>{task}</td>
                    <td>{date}</td>

                </tr>
            </tbody>
        );
    }
};

class App extends Component {
    render() {
        return (
            <div id="box" >
                <h1>Todo List</h1>
                <table>
                    {/* <caption>Todo List</caption> */}
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Task</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    {ToDoList.map((item, index) =>
                        <ToDo index={index + 1} task={item.task} date={item.date} />
                    )}
                </table>
            </div>
        );
    }
};

ReactDOM.render(<App/>, document.getElementById('root'));


