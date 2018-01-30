export const SHOW_CATEGORY_TASK_LIST = 'SHOW_CATEGORY_TASK_LIST';
export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

export const showCategoryTaskList = (categoryId) => {
    return {
        type: SHOW_CATEGORY_TASK_LIST,
        categoryId,
    };
};

export const addTask = (taskTitle, categoryId) => {
    return {
        type: ADD_TASK,
        taskTitle,
        categoryId,
    };
};

export const updateTask = (taskId, checked) => {
    return {
        type: UPDATE_TASK,
        taskId,
        checked,
    };
};
