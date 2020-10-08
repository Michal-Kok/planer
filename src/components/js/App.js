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
    }))
  }

  setLocalStorage = (task, status) => {
    const { active, completed, failed } = this.state.tasks[0];
    switch (status) {
      case 'active':
        active.push(task);
        this.setState({
          tasks: [{
            active,
          }],
        });
        break;
      case 'completed':
        completed.push(task);
        this.setState({
          tasks: [{
            completed,
          }],
        });
        break;
      case 'failed':
        failed.push(task);
        this.setState({
          tasks: [{
            failed,
          }],
        });
        break;
      default:
        break;
    }

    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
  }



  updateTask = () => {
    console.log();
  }

  showPopUp = () => {
    const key = this.state.popUpStatus.insidePopUp;

    switch (key) {
      case 'add':
        return (
          <div className='popup'>
            <button className="close-button"><span className="icon"><i className="far fa-times-circle"></i></span></button>
            < NewTaskForm setLocalStorage={this.setLocalStorage} />
          </div>
        );

      case 'active':
        return (
          <div className='popup'>
            <button className="close-button"><span className="icon"><i className="far fa-times-circle"></i></span></button>
            <ListOfTasks option='active' tasks={this.state.tasks} />
          </div>
        );

      default:
        const err = new Error('sth wrong with popup');
        console.log(err);
    }
  }

  activatePopup = (key) => {
    this.setState({
      popUpStatus:
      {
        isActive: true,
        insidePopUp: key,
      }
    });
  }

  uptadeTask = () => {

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
    return (
      <>
        <section className='first-view'>
          <div className='title-div'>
            <h1 className='title-text' >Plan your time here. <span className='icon'><i className="far fa-sticky-note"></i></span></h1>
            <h3 className='title-text'>All you need is to write down your tasks</h3>
            <button className="burger" onClick={this.handleBurgerClick}>
              <span className='hamburger-box'><span className='hamburger-inner'></span></span>
            </button>
          </div>
          {this.state.navBarStatus && <NavBar activatePopUp={this.activatePopup} popUpStatus={this.state.popUpStatus} />}
        </section>
        < EndedTasks updateTask={this.updateTask} tasks={this.state.tasks} getLocalStorage={this.getLocalStorage} />
        {this.state.popUpStatus.isActive && this.showPopUp()}
      </>
    );
  }
}

export default App;


