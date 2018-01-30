import React from 'react';
import { connect } from 'react-redux';

import './TaskAdding.css';
import { addTask } from '../../actions';

class TaskAdding extends React.Component {
    onAddButtonClick = () => {
        if (!this.taskTitle.value) {
            return;
        }

        this.props.dispatch(addTask(this.taskTitle.value, this.props.activeCategoryId));

        this.taskTitle.value = '';
    }

    render() {
        return (
            <div className="task-adding">
                <input ref={(input) => { this.taskTitle = input; }}
                       className="input-task-name"
                       placeholder="Text input with button"
                />
                <button onClick={this.onAddButtonClick} className="add-btn">Add</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeCategoryId: state.categories.activeCategoryId,
    };
}

export default connect(mapStateToProps)(TaskAdding);
