import React, { Component } from 'react';
import TaskWindow from './TaskWindow';
import './EndedTasks.css';

class EndedTasks extends Component {
    state = {
        taskWindowStatus: false,
    }

    buttonConent = {
        opened: 'Do not waste my time!',
        closed: 'I want to do something!'
    }

    handleClick = () => {
        this.setState(prevState => ({
            taskWindowStatus: !prevState.taskWindowStatus,
        }))
    }


    render() {
        const { opened, closed } = this.buttonConent;
        return (
            <section className="ended-tasks">
                <button className='text-button show-task-window' onClick={this.handleClick} >{this.state.taskWindowStatus ? opened : closed}</button>
                { this.state.taskWindowStatus && < TaskWindow updateTask={this.props.updateTask} tasks={this.props.tasks} />}
            </section>
        );
    }
}

export default EndedTasks;