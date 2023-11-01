const UPDATE_A = 'UPDATE_A'
export const updateA = (data) => {
    return {
        type: UPDATE_A,
        data: data,
    };
};

export const updateAsync = (data) => {
    return async (dispatch) => {
        return await dispatch({
            type: UPDATE_A,
            data: data,
        })
    }
};
