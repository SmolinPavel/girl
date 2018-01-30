import React from 'react';

import './Tasks.css';
import TaskAdding from '../TaskAdding/TaskAdding';
import TasksList from '../TasksList/TasksList';

export default class Tasks extends React.Component {
    render() {
        return (
            <div className="tasks">
                <TaskAdding />
                <TasksList />
            </div>
        );
    }
}
