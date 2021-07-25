import { combineReducers } from "redux";
import authreducer from "./auth.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
    auth: authreducer,
    user: userReducer,
});

export default rootReducer;