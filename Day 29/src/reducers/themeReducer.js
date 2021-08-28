const themeReducer = (state = false, action) => {
    if (action.type === "TOGGLE_THEME")
        return !state;
    return state;
}

export default themeReducer;