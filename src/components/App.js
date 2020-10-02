import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/js/all.js';
import './App.css';
import NavBar from './NavBar';
import EndedTasks from './EndedTasks';
import TaskWindow from './TaskWindow';
import NewTaskForm from './NewTaskForm';

class App extends Component {

  state = {
    navBarStatus: false,
    tasks: {
      completed: ['umyć naczynka'],
      failed: ['zjeść rybeczkę', 'zrobić obiad', 'pouczyć sie javy'],
    }
  }

  handleBurgerClick = () => {
    this.setState((prevState) => ({
      navBarStatus: !prevState.navBarStatus,
    }))
  }

  updateTask = (index) => {
    console.log(index);
  }

  showPopup = (key) => {
    console.log(key);

    switch (key) {
      case 'add':
        return (
          <div className='popup'>
            < NewTaskForm />
          </div>
        );

      case 'completed':
        return (
          <div className='popup'>
            < TaskWindow updateTask={this.updateTask} tasks={this.state.tasks} option='completed' />
          </div>
        );

      case 'failed':
        return (
          < TaskWindow updateTask={this.updateTask} tasks={this.state.tasks} option='failed' />
        )
      default:
        break;
    }

    return (
      <div className='popup'>

      </div>
    )
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
          {this.state.navBarStatus && <NavBar showPopUp={this.showPopup} />}
        </section>
        < EndedTasks updateTask={this.updateTask} tasks={this.state.tasks} />
      </>
    );
  }
}

export default App;


