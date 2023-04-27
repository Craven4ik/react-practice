import {toggleUpdateButton} from "./actions";

const initialState = {
    updateButton: false,
}
const toggleReducer = (state = initialState, action) => {
    switch (action.type) {
        case toggleUpdateButton.type:
            return {
                ...state,
                updateButton: !state.updateButton
            }
        default:
            return state
    }
}

export default toggleReducer