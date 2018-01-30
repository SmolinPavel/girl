import React from 'react';
import { connect } from 'react-redux';

import './CategoriesTree.css';
import CategoryItem from '../CategoryItem/CategoryItem';

class CategoriesTree extends React.Component {
    render() {
        const { categories } = this.props;

        return (
            <div className="categories-tree">
                {
                    categories.map((categoryItem) => {
                        return (
                            <CategoryItem categoryItem={categoryItem}
                                          key={Math.random()}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories.categoryList,
    }
};

export default connect(mapStateToProps)(CategoriesTree)
