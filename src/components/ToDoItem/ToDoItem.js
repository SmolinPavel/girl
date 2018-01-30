import React from 'react';
import { MuiThemeProvider, Checkbox} from 'material-ui';
import { connect } from 'react-redux';

import './ToDoItem.css';
import { updateTask, calculateCompletedCategories } from '../../actions';

class ToDoItem extends React.Component {
    onItemDone = (event, checked) => {
        const taskId = this.props.taskItem.id;

        this.props.dispatch(updateTask(taskId, checked));
        this.props.dispatch(calculateCompletedCategories());
    }

    render() {
        const { title } = this.props.taskItem;

        return (
            <div>
                <div className="to-do-item">
                    <div>
                        <MuiThemeProvider>
                            <Checkbox onCheck={this.onItemDone} />
                        </MuiThemeProvider>
                    </div>
                    <div data-title={title} className="task-name">{title}</div>
                    <button className="edit-task-btn">
                        <i className="fa fa-edit"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default connect()(ToDoItem);
