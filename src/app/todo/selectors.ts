import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import {TodoState} from "./models";

export function selectTodos() {
    return (state$: Observable<TodoState>) =>
        state$.map(s => s.todos);
}