import State from "./State";
import ActionTypes from "./ActionTypes";
import TypeKeys from "./TypeKeys";

const initialState = {
    items: []
};

const reducer = (state: State = initialState, action: ActionTypes) => {
    switch (action.type) {
        case TypeKeys.ADD_ITEM:
            return { ...state, items: [...state.items, action.item] };
        case TypeKeys.REMOVE_ITEM:
            let itemIndex = state.items.indexOf(action.item);
            let { [itemIndex]: deletedItem, ...newItems } = state.items;
            return { ...state, items: newItems };
        default:
            return state;
    }
};

export default reducer;