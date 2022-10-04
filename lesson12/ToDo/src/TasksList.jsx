import React from 'react';
import InputElement from './InputElement';
import Task from './Task';
import { createTasks, deleteTask, fetchTasksList, updateTasks } from './tasksGateWays';
import Spinner from './Spinner';

class TasksList extends React.Component {
  state = {
    tasks: [],
    update: true,
  };
  componentDidMount() {
    this.fetchTask();
  }

  fetchTask = () => {
    fetchTasksList().then(data =>
      this.setState({
        tasks: data,
        update: true,
      }),
    );
  };

  handleChangeStatus = id => {
    this.setState({
      update: false,
    });
    const { done, text } = this.state.tasks.find(task => task.id === id);
    const updatedTask = { text, done: !done };

    updateTasks(id, updatedTask).then(() => this.fetchTask());
  };
  handleTaskDelete = id => {
    this.setState({
      update: false,
    });
    deleteTask(id).then(() => this.fetchTask());
  };
  onCreate = text => {
    this.setState({
      update: false,
    });
    const newTask = {
      text,
      done: false,
    };

    createTasks(newTask).then(() => this.fetchTask());
  };

  render() {
    if (this.state.tasks.length === 0) {
      return (
        <main className="todo-list">
          <InputElement onCreate={this.onCreate} updater={this.state.update} />
          <Spinner size={50} />
        </main>
      );
    } else {
      const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
      return (
        <main className="todo-list">
          <InputElement onCreate={this.onCreate} updater={this.state.update} />
          <ul className="list">
            {sortedList.map(task => (
              <Task
                key={task.id}
                {...task}
                onChange={this.handleChangeStatus}
                onDelete={this.handleTaskDelete}
              />
            ))}
          </ul>
        </main>
      );
    }
  }
}
export default TasksList;
