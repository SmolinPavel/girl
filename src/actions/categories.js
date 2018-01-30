export const ADD_CATEGORY = 'ADD_CATEGORY';
export const ACTIVATE_CATEGORY = 'ACTIVATE_CATEGORY';
export const CALCULATE_COMPLETED_CATEGORIES = 'CALCULATE_COMPLETED_CATEGORIES';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';

export const addCategory = (categoryTitle) => {
    return {
        type: ADD_CATEGORY,
        categoryTitle,
    };
};

export const activateCategory = (categoryId) => {
    return {
        type: ACTIVATE_CATEGORY,
        categoryId,
    };
};

export const calculateCompletedCategories = () => {
    return {
        type: CALCULATE_COMPLETED_CATEGORIES,
    };
};

export const deleteCategory = (categoryId) => {
    return {
        type: DELETE_CATEGORY,
        categoryId,
    };
};
