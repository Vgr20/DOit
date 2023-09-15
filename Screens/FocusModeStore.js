import { createStore } from "redux";

const initialValue = {
    finishTime: 0
}

const rootReducer = (state=initialValue, action) => {
    switch (action.type) {
        case "New_Fin_Time":
            return {
                ...state, 
                finishTime: action.value
            };
        default:
            return state;
    }
}

const store = createStore(rootReducer);

export default store;