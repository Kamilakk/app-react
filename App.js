import React, { Component } from 'react';
import AddTask from './AddTask'
import TaskList from './TaskList'
import './App.css';


class App extends Component {

  counter = 0

  state = {
    tasks: [
      {
        id: 0,
        text: '',
        date: '2019-08-12',
        important: true,
        active: true,
        finishDate: null,
      },
      //{ id: 1, text: 'Odebrać awizo na poczcie', date: '2019-08-20', important: true, active: true, finishDate: null },
      //{ id: 2, text: 'Umówić się do fryzjera', date: '2019-08-16', important: false, active: true, finishDate: null },
      //{ id: 3, text: 'Kupić sukienkę', date: '2019-10-05', important: false, active: true, finishDate: null },
      //{ id: 4, text: 'Obejrzeć salę weselną', date: '2019-09-19', important: true, active: true, finishDate: null }
    ]

  }

  deleteTask = (id) => {
    console.log('delete item with id ' + id);
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);

    this.setState({
      tasks
    })

  }

  changeTaskStatus = (id) => {
    console.log('change item state with id ' + id);
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })

  }

  addTask = (text, date, important) => {
    //console.log('dodany obiekt');
    const task = {
      id: this.counter,
      text, //tekst z input
      date, //tekst z inputa
      important,//wartość z inputa
      active: true,
      finishDate: null
    }
    this.counter++
    console.log(task, this.counter);

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))

    return true
  }

  render() {
    return (
      <div className="App">
        <h1 style={{ fontSize: '50px', fontFamily: 'Palatino Linotype' }}>TODO APP</h1>
        <AddTask add={this.addTask} />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;
