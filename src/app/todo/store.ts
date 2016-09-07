import {StoreModule} from "@ngrx/store";
import todos from "./reducers";

export default StoreModule.provideStore(
    {todos},
    {todos: []}
);