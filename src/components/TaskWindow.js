import React, { Component } from 'react';
import './TaskWindow.css';

class TaskWindow extends Component {
    state = {
        tasks: this.props.tasks,
        option: 'completed',
    }

    handleClick = (e) => {
        this.setState({
            option: e.target.name,
        })
    }

    showTasks = () => {
        const { completed, failed } = this.state.tasks;
        const updateTask = this.props.updateTask;
        let tasks = [];
        let index = 0;
        switch (this.state.option) {
            case 'completed':
                tasks = completed.map((task) => {
                    return (
                        <li key={index++}>{task}<span index={index} onClick={updateTask}>Crashed</span><span index={index} onClick={updateTask}>Done</span></li>
                    )
                });
                return tasks;

            case 'failed':
                index = 0;
                tasks = failed.map((task) => {
                    return (
                        <li key={index++}>{task}<span index={index} onClick={updateTask}>Crashed</span><span index={index} onClick={updateTask}>Done</span></li>
                    );
                });
                return tasks;

            case 'all':
                index = 0;
                const allTasks = completed.concat(failed);
                tasks = allTasks.map((task) => {
                    return (
                        <li key={index++}>{task}<span index={index} onClick={updateTask}>Crashed</span><span index={index} onClick={updateTask}>Done</span></li>
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