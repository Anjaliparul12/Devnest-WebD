const placeReducer = (state = "Lucknow", action) => {
    if (action.type === "UPDATE_PLACE") {
        return action.payload;
    }
    return state;
}

export default placeReducer;