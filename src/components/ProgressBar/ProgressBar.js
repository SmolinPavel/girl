
import React from 'react';
import { connect } from 'react-redux';

import './ProgressBar.css';
import Progress from 'react-progressbar';

class ProgressBar extends React.Component {
    render () {
        return (
            <div className="progress-line-bg">
                <Progress color={'#00BCD4'} completed={this.props.completedCategories} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        completedCategories: state.categories.completedCategories,
    };

}

export default connect(mapStateToProps)(ProgressBar);
