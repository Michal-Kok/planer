import gsap from 'gsap/gsap-core';
import React from 'react';
import { ReactComponent as Emptiness } from './emptiness.svg'
const ListOfTasks = (props) => {

    const { completed, failed, active } = props.tasks[0];
    let tasks = [];
    const deleteTask = props.deleteTask;
    const finishedTask = props.finishedTask;
    switch (props.option) {
        case 'active':
            tasks = active.map((task, index) => {
                return (
                    <li key={index}><span>{task.content}</span> <div className='tasks-button-container'><button className='tasks-actionButton' onClick={() => finishedTask(index, active, 'success')}>Done</button> <button className='tasks-actionButton' onClick={() => finishedTask(index, active, 'failour')}>Missed</button> <button className='tasks-actionButton' onClick={() => deleteTask(index, active, 'active')}>Delete</button></div></li>
                );
            });
            console.log(tasks);
            if (tasks.length) {
                return (<div className='tasks'><ul>{tasks}</ul></div>);
            } else return (<div className='emptyList'>There are not tasks here at all.<div className='emptyList-SVGContainer'><Emptiness /></div></div>);
        case 'completed':
            tasks = completed.map((task, index) => {
                return (
                    <li key={index}><span>{task.content}</span><div className='tasks-button-container'><button className='tasks-actionButton' onClick={() => deleteTask(index, completed, 'completed')}>Delete</button></div></li>
                );
            });
            if (tasks.length) {
                return (<div className='tasks'><ul>{tasks}</ul></div>);
            } else return (<div className='emptyList'>There are not tasks here at all.<div className='emptyList-SVGContainer'><Emptiness /></div></div>);

        case 'failed':
            tasks = failed.map((task, index) => {
                return (
                    <li key={index}><span>{task.content}</span><div className='tasks-button-container'><button className='tasks-actionButton' onClick={() => deleteTask(index, failed, 'failed')}>Delete</button></div></li>
                );
            });
            if (tasks.length) {
                return (<div className='tasks'><ul>{tasks}</ul></div>);
            } else return (<div className='emptyList'>There are not tasks here at all.<div className='emptyList-SVGContainer'><Emptiness /></div></div>);

        case 'all':
            const allTasks = completed.concat(failed);
            tasks = allTasks.map((task, index) => {
                return (
                    <li key={index}><span>{task.content}</span></li>
                );
            })
            if (tasks.length) {
                return (<div className='tasks'><ul>{tasks}</ul></div>);
            } else return (<div className='emptyList'>There are not tasks here at all.<div className='emptyList-SVGContainer'><Emptiness /></div></div>);
        default:
            const err = new Error('Problem with showing tasks');
            console.error(err);
    }
}
// return (<nav className='tasks'><ul>{this.showTasks()}</ul></nav>);


export default ListOfTasks;