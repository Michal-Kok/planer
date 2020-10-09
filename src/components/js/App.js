import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/js/all.js';
import './css/App.css';
import NavBar from './NavBar';
import EndedTasks from './EndedTasks';
import ListOfTasks from './ListOfTasks';
import NewTaskForm from './NewTaskForm';

class App extends Component {

  state = {
    popUpStatus: {
      isActive: false,
      insidePopUp: '',
    },
    navBarStatus: false,
    tasks: [{
      active: [],
      completed: [],
      failed: [],
    }]
  }

  getLocalStorage = () => {
    let tasks = localStorage.getItem('tasks');
    if (tasks) {
      tasks = JSON.parse(tasks);
      console.log(tasks);
      this.setState({
        tasks,
      });
    }
  }

  handleBurgerClick = () => {
    this.setState((prevState) => ({
      navBarStatus: !prevState.navBarStatus,
    }));
  }

  setLocalStorage = (task, status) => {
    const { active, completed, failed } = this.state.tasks[0];

    switch (status) {
      case 'active':
        active.push(task);
        break;
      case 'completed':
        completed.push(task);
        break;
      case 'failed':
        failed.push(task);
        break;
      default:
        break;
    }
    this.setState({
      tasks: [{
        active,
        completed,
        failed,
      }],
    })

    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
  }

  deleteTask = (index, tasks, key) => {
    let { active, completed, failed } = this.state.tasks[0];
    tasks.splice(index, 1);

    switch (key) {
      case 'active':
        active = tasks;
        break;
      case 'completed':
        completed = tasks;
        break;
      case 'failed':
        failed = tasks;
        break;
      default:
        const err = new Error('mistake during splicing elements.');
        console.log(err);
    }
    this.setState({
      tasks: [{
        active,
        completed,
        failed,
      }]
    })
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
  }

  finishedTask = (index, tasks, status) => {
    let { active, completed, failed } = this.state.tasks[0];
    const finishedTask = tasks.splice(index, 1)[0];
    active = tasks;

    switch (status) {
      case 'success':
        completed.push(finishedTask);
        break;
      case 'failour':
        failed.push(finishedTask);
        break;
      default:
        const err = new Error('sth wrong with finishing tasks!');
        console.log(err);
    }
    this.setState({
      tasks: [{
        active,
        completed,
        failed,
      }]
    })
  }

  showPopUp = () => {
    const key = this.state.popUpStatus.insidePopUp;

    switch (key) {
      case 'add':
        return (
          <div className='popup'>
            <button onClick={this.closePopup} className="close-button"><i className="far fa-times-circle"></i></button>
            < NewTaskForm setLocalStorage={this.setLocalStorage} />
          </div>
        );

      case 'active':
        return (
          <div className='popup'>
            <button className="close-button" onClick={this.closePopup}><i className="far fa-times-circle"></i></button>
            <ListOfTasks option='active' tasks={this.state.tasks} deleteTask={this.deleteTask} finishedTask={this.finishedTask} />
          </div>
        );

      default:
        const err = new Error('sth wrong with popup');
        console.log(err);
    }
  }

  closePopup = () => {
    this.setState({
      popUpStatus: {
        isActivate: false,
      }
    })
  }

  activatePopup = (key) => {
    this.setState({
      popUpStatus: {
        isActive: true,
        insidePopUp: key,
      }
    });
  }

  addTask = (task) => {
    const active = this.state.tasks.active;
    active.push(task);
    this.setState({
      tasks: {
        active,
      }
    });
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  render() {
    const navBarStatus = this.state.navBarStatus;
    return (
      <>
        <section className='first-view'>
          <div className='title-div'>
            <h1 className='title-text' >Plan your time here. <span className='icon'><i className="far fa-sticky-note"></i></span></h1>
            <h3 className='title-text'>All you need is to write down your tasks</h3>
            <button className="burger" onClick={this.handleBurgerClick}>
              <span className={`hamburger-box ${navBarStatus ? `hamburger--active` : null}`}><span className='hamburger-inner'></span></span>
            </button>
          </div>
          {navBarStatus && <NavBar activatePopUp={this.activatePopup} popUpStatus={this.state.popUpStatus} />}
        </section >
        < EndedTasks finishedTask={this.finishedTask} deleteTask={this.deleteTask} tasks={this.state.tasks} getLocalStorage={this.getLocalStorage} />
        { this.state.popUpStatus.isActive && this.showPopUp()}
      </>
    );
  }
}

export default App;


