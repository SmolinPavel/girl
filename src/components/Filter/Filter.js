import React from 'react';
import { MuiThemeProvider } from 'material-ui';

import './Filter.css';
import ShowDoneFilter from '../ShowDoneFilter/ShowDoneFilter';
import SearchFilter from '../SearchFilter/SearchFilter';

export default class Filter extends React.Component {
    render() {
        return (
            <div className="filter">
                <div className="check">
                    <MuiThemeProvider>
                        <ShowDoneFilter/>
                    </MuiThemeProvider>
                </div>
                <SearchFilter/>
            </div>
        );
    }
}
