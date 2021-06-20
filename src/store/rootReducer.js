import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
//tüm stateler burada toplanır

const rootReducer = combineReducers({
  cart: cartReducer,
  //user: userReducer
});

export default rootReducer;
