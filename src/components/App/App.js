import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import Filter from '../Filter/Filter';
import ProgressBar from '../ProgressBar/ProgressBar';
import Categories from '../Categories/Categories';
import Tasks from "../Tasks/Tasks";

class App extends React.Component {
    render() {
        const activeCategoryId = this.props.match.params.categoryId ? this.props.match.params.categoryId : this.props.activeCategoryId;

        return (
            <div className="App wrapper">
                <div className="app-logo-filter">
                    <h1>To-Do-List</h1>
                    <Filter />
                </div>
                <ProgressBar />
                <div className="categories-tasks">
                    <Categories activeCategoryId={activeCategoryId} />
                    {
                        activeCategoryId && <Tasks />
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        activeCategoryId: state.categories.activeCategoryId,
    };
};

export default connect(mapStateToProps)(App);
