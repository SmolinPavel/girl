import React from 'react';

import './ShowDoneFilter.css';
import { Checkbox } from 'material-ui';

export default class ShowDoneFilter extends React.Component {
    render() {
        return <Checkbox label='Show Done'/>;
    }
}
