import TypeKeys from "./TypeKeys";
import Item from "../Models/Item";

interface AddItemAction {
    type: TypeKeys.ADD_ITEM,
    item: Item
}

interface RemoveItemAction {
    type: TypeKeys.REMOVE_ITEM,
    item: Item
}

interface OtherItemAction {
    type: TypeKeys.OTHER_ACTION
}

type ActionTypes =
    | AddItemAction
    | RemoveItemAction
    | OtherItemAction;

export default ActionTypes;