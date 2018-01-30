import React from 'react';
import { connect } from 'react-redux';

import './TasksList.css';
import ToDoItem from '../ToDoItem/ToDoItem';

class TasksList extends React.Component {
    render() {
        const { taskList } = this.props;

        return (
            <div className="tasks-list">
                {
                    taskList.map((taskItem) => {
                        return (
                            <ToDoItem key={taskItem.id}
                                      checkCategoryDone={this.checkCategoryDone}
                                      taskItem={taskItem}
                            />
                        );
                    })
                }
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        taskList: state.categories.activeCategoryTasks,
    };
}

export default connect(mapStateToProps)(TasksList);
