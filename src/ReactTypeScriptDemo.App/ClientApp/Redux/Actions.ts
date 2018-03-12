import AddItemAction from "./ActionTypes";
import Item from "../Models/Item";
import TypeKeys from "./TypeKeys";

const addItem = (item: Item): AddItemAction => ({
    type: TypeKeys.ADD_ITEM,
    item: item
});

export { addItem };