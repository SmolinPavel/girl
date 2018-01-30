import React from 'react';
import { connect } from 'react-redux';

import './CategoryAdding.css';
import { addCategory, calculateCompletedCategories } from '../../actions';

class CategoryAdding extends React.Component {
    componentWillMount() {
        this.props.dispatch(calculateCompletedCategories());
    }

    onAddButtonClick = () => {
        if (!this.categoryTitle.value) {
            return;
        }

        this.props.dispatch(addCategory(this.categoryTitle.value));
        this.props.dispatch(calculateCompletedCategories());
        this.categoryTitle.value = '';
    }

    render() {
        return (
            <div className="category-adding">
                <input ref={(input) => { this.categoryTitle = input; }}
                       className="input-category-name"
                       placeholder="Enter category title"
                />
                <button onClick={this.onAddButtonClick} className="add-btn">Add</button>
            </div>
        );
    }
}

export default connect()(CategoryAdding);
