import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './CategoryItem.css';
import {
    deleteCategory,
    activateCategory,
    showCategoryTaskList,
    calculateCompletedCategories
} from '../../actions';

class CategoryItem extends Component {
    onDeleteBtnClick = () => {
        const { categoryItem: { id: categoryId }, dispatch } = this.props;

        dispatch(deleteCategory(categoryId));
        dispatch(calculateCompletedCategories());
    }

    onCategoryClick = id => {
        const { dispatch } = this.props;
        dispatch(activateCategory(id));
        dispatch(showCategoryTaskList(id));
    }

    render() {
        const { active, categoryItem } = this.props;
        const { title, id } = categoryItem;

        return (
            <div className={`category-item ${active ? 'active-category' : ''}`}>
                <div className='category-name-and-edit' onClick={this.onCategoryClick(id)}>
                    <Link to={`/categories/${id}`} data-title={title} className='category-name'>{title}</Link>
                    <button className='category-options-btn'>
                        <i onClick={this.onEditBtnClick} className='fa fa-edit'></i>
                    </button>
                </div>
                <div className='category-delete-add'>
                    <button onClick={this.onDeleteBtnClick} className='category-options-btn'>
                        <i className='fa fa-trash-o'></i>
                    </button>
                    <button className='category-options-btn'>
                        <i className='fa fa-plus'></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default connect()(CategoryItem);
