import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import Filter from '../Filter/Filter';
import ProgressBar from '../ProgressBar/ProgressBar';
import Categories from '../Categories/Categories';
import Tasks from "../Tasks/Tasks";

const App = ({ activeCategoryId, match }) => {
    const activeCategoryIdToShow = match.params.categoryId ? match.params.categoryId : activeCategoryId;

    return (
        <div className="App wrapper">
            <div className="app-logo-filter">
                <h1>To-Do-List</h1>
                <Filter />
            </div>
            <ProgressBar />
            <div className="categories-tasks">
                <Categories activeCategoryId={activeCategoryIdToShow} />
                {
                    activeCategoryIdToShow && <Tasks />
                }
            </div>
        </div>
    );
};

const mapStateToProps = ({ categories }) => ({
    activeCategoryId: categories.activeCategoryId,
});

export default connect(mapStateToProps)(App);
