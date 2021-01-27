import { createStore } from "redux";
import reducer from "./reducers/index";

const initialState = {
  todos: [
    {
      id: 0,
      name: "Ir al gimnasio",
      complete: true,
    },
    {
      id: 1,
      name: "Hacer la compra",
      complete: true,
    },
  ],
};

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
