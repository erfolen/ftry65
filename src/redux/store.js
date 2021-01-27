import {createStore, combineReducers} from "redux";
import { reducer as formReducer} from "redux-form";
import createForm from "./create-form"

let reducers = combineReducers({
      createForm,
    form: formReducer
});

let store = createStore(reducers);

export default store;