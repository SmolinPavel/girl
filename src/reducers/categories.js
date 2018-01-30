import * as actions from '../actions';
import categoriesData from '../data/categoriesData';

const defaultCategories = {
    categoryList: categoriesData,
    completedCategories: 0,
    activeCategoryTasks: [],
    activeCategoryId: null,
};

const categoriesReducer = (state = defaultCategories, action) => {
    let newCategoryList = [];

    switch (action.type) {
        case actions.ADD_CATEGORY:
            const newCategory = createCategory(action.categoryTitle);
            newCategoryList = [newCategory, ...state.categoryList];

            return { ...state, categoryList: newCategoryList };
        case actions.ACTIVATE_CATEGORY:
            const updatedCategoryList = activateCategory(action.categoryId, state.categoryList);

            return { ...state, categoryList: updatedCategoryList, activeCategoryId: action.categoryId };
        case actions.CALCULATE_COMPLETED_CATEGORIES:
            const completedCategories = calculateCompletedCategories(state.categoryList);

            return { ...state, completedCategories };
        case actions.SHOW_CATEGORY_TASK_LIST:
            const tasks = getActiveCategoriesTasks(action.categoryId, state.categoryList);

            return { ...state, activeCategoryTasks: tasks };
        case actions.ADD_TASK:
            const newCategoriesList = updateCategoryList(action.categoryId, action.taskTitle, state.categoryList);
            const newActiveTasks = getActiveCategoriesTasks(action.categoryId, state.categoryList);

            return { ...state, categoryList: newCategoriesList, activeCategoryTasks: newActiveTasks };
        case actions.UPDATE_TASK:
            newCategoryList = updateTask(action.taskId, action.checked, state.categoryList, state.activeCategoryId);

            return { ...state, categoryList: newCategoryList };
        case actions.DELETE_CATEGORY:
            newCategoryList = deleteCategory(action.categoryId, state.categoryList);
            let activeCategoryId = state.activeCategoryId;

            if (action.categoryId === state.activeCategoryId) {
                activeCategoryId = 0;
            }

            return { ...state, categoryList: newCategoryList, activeCategoryId };
        default:
            return state;
    }
}

export default categoriesReducer;

function deleteCategory(categoryId, categoryList) {
    const categoryListCopy = [...categoryList];

    const index = categoryListCopy.findIndex(category => category.id === categoryId);
    categoryListCopy.splice(index, index + 1);

    return categoryListCopy;
}

function updateTask(taskId, checked, categoryList, activeCategoryId) {
    const categoryListCopy = [ ...categoryList ];
    const category = categoryListCopy.find(category => activeCategoryId === category.id);
    let isCategoryDone = true;

    category.tasks.forEach(task => {
        if (task.id === taskId) {
            task.isDone = checked;
        }

        if (!task.isDone) {
            isCategoryDone = false;
        }
    });

    category.isDone = isCategoryDone;

    return categoryListCopy;
}

function updateCategoryList(categoryId, newTaskTitle, categoryList) {
    const categoryListCopy = [...categoryList];
    const newTask = createTask(newTaskTitle, categoryId);

    const category = categoryListCopy.find(category => categoryId === category.id);
    category.tasks && category.tasks.unshift(newTask);

    return categoryListCopy;
}

function createTask(title, categoryId) {
    return {
        title,
        id: getId(),
        categoryId,
    };
}

function getActiveCategoriesTasks(activeCategoryId, categoryList) {
    const activeCategory = categoryList.find(category => activeCategoryId === category.id)

    return activeCategory && activeCategory.tasks ? [...activeCategory.tasks] : [];
}

function calculateCompletedCategories(categoryList) {
    let completedCategories = 0;
    const allCategories = categoryList.length;

    categoryList.forEach(category => {
        if (category.isDone) {
            completedCategories++;
        }
    });

    return completedCategories * 100 / allCategories;
}

function createCategory(categoryTitle) {
    return {
        title: categoryTitle,
        id: getId(),
        taskCount: 0,
        active: false,
    }
}

function activateCategory(activeCategoryId, categories) {
    const categoriesClone = [...categories];

    categoriesClone.forEach(category => {
        if (category.id === activeCategoryId) {
            category.active = true;
        } else {
            category.active = false;
        }
    });

    return categoriesClone;
}

function getId() {
    return Math.random() * 1000;
}
