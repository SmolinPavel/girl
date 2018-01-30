import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './CategoryItem.css';
import {
    deleteCategory,
    activateCategory,
    showCategoryTaskList,
    calculateCompletedCategories
} from '../../actions';

class CategoryItem extends React.Component {
    onDeleteBtnClick = () => {
        const categoryId = this.props.categoryItem.id;

        this.props.dispatch(deleteCategory(categoryId));
        this.props.dispatch(calculateCompletedCategories());
    }

    onCategoryClick(id) {
        this.props.dispatch(activateCategory(id));
        this.props.dispatch(showCategoryTaskList(id));
    }

    render() {
        const { title, id } = this.props.categoryItem;
        const active = this.props.active;

        return (
            <div className={`category-item ${active ? 'active-category' : ''}`}>
                <div className='category-name-and-edit' onClick={this.onCategoryClick.bind(this, id)}>
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
                    {/*<button className='change-category-btn'>*/}
                        {/*<i className='fa fa-mail-reply'></i>*/}
                    {/*</button>*/}
                </div>
            </div>
        );
    }
}

export default connect()(CategoryItem);
