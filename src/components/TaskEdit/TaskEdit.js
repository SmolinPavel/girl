import React from 'react';
import { MuiThemeProvider } from 'material-ui';
import { Checkbox } from 'material-ui';

import './TaskEdit.css';
import SaveChangesBtn from '../SaveChangesBtn/SaveChangesBtn';
import CancelBtn from '../CancelBtn/CancelBtn';

export default class TaskEdit extends React.Component {
    render() {
        return (
            <div className="task-edit">
                <div className='buttons'>
                    <SaveChangesBtn />
                    <CancelBtn />
                </div>
                <input className="edit-task-title"/>
                <div>
                    <MuiThemeProvider>
                        <Checkbox label="Done"/>
                    </MuiThemeProvider>
                </div>
                <textarea placeholder="Add task description"
                          className="task-description"
                          maxLength="1000" >
                </textarea>
            </div>

        );
    }
}
