import React, { Component } from 'react';
import ListOfTasks from './ListOfTasks';
import './css/TaskWindow.css';
import { Scrollbars } from 'react-custom-scrollbars'

class TaskWindow extends Component {
    state = {
        tasks: this.props.tasks,
        option: this.props.option,
    }

    handleClick = (e) => {
        this.setState({
            option: e.target.name,
        })
    }

    render() {
        return (
            <div className='task-window-div'>
                <div className="button-container">
                    <button className='text-button task-window-button' onClick={this.handleClick} name='completed'>Completed tasks</button>
                    <button className='text-button task-window-button' onClick={this.handleClick} name='failed'>Failed Tasks</button>
                    <button className='text-button task-window-button' onClick={this.handleClick} name='all'>All tasks</button>
                </div>
                <div className='listOfTask-container'>
                    <ListOfTasks option={this.state.option} tasks={this.state.tasks} finishedTask={this.props.finishedTask} deleteTask={this.props.deleteTask} />
                </div>
            </div>);
    }
}

export default TaskWindow;