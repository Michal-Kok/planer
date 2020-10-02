import React, { Component } from 'react';
import './TaskWindow.css';

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

    updateTask = (index) => {
        this.props.updateTask(index);
    }

    showTasks = () => {
        const { completed, failed } = this.state.tasks;
        let tasks = [];
        let index = 0;
        let updateTask = this.props.updateTask;
        switch (this.state.option) {
            case 'completed':
                tasks = completed.map((task) => {
                    return (
                        <li key={index++}>{task}<span onClick={(index) => updateTask(index)}>Crashed</span><span onClick={(index) => updateTask(index)}>Done</span></li>
                    )
                });
                return tasks;

            case 'failed':
                tasks = failed.map((task) => {
                    return (
                        <li key={index++}>{task}<span onClick={(index) => updateTask(index)}>Crashed</span><span onClick={(index) => updateTask(index)}>Done</span></li>
                    );
                });
                return tasks;

            case 'all':
                const allTasks = completed.concat(failed);
                tasks = allTasks.map((task) => {
                    return (
                        <li key={index++}>{task}<span onClick={() => this.updateTask(index)}>Crashed</span><span onClick={() => this.updateTask(index)}>Done</span></li>
                    );
                })
                return tasks;
            default:
                const err = new Error('Problem with showing tasks');
                console.error(err);
        }
    }

    render() {
        return (<div className='task-window-div'>
            <div className="button-container">
                <button className='text-button task-window-button' onClick={this.handleClick} name='completed'>Completed tasks</button>
                <button className='text-button task-window-button' onClick={this.handleClick} name='failed'>Failed Tasks</button>
                <button className='text-button task-window-button' onClick={this.handleClick} name='all'>All tasks</button>
            </div>
            <nav className='tasks'><ul>{this.showTasks()}</ul></nav>
        </div>);
    }
}

export default TaskWindow;