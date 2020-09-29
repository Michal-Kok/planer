import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/js/all.js';
import './App.css';
import NavBar from './NavBar';
import EndedTasks from './EndedTasks';

class App extends Component {

  state = {
    completedTasks: false,
    failedTasks: false,
    navBarStatus: false,
  }

  tasks = {
    completed: ['umyć naczynka'],
    failed: ['zjeść rybeczkę'],
  }

  handleBurgerClick = () => {
    this.setState((prevState) => ({
      navBarStatus: !prevState.navBarStatus,
    }))
  }

  updateTask = (e) => {
    console.log(e.target);
  }

  showPopup = (key) => {
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
        < EndedTasks updateTask={this.updateTask} tasks={this.tasks} />
      </>
    );
  }
}

export default App;


