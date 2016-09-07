import {Injectable} from "@angular/core";
import {Actions, Effect, EffectsModule} from "@ngrx/effects";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import {TodoService} from "./services";
import {GET_TODOS, getTodosSuccess, CREATE_TODO, getTodos, PUT_TODO, updateLocalTodo} from "./";

@Injectable()
class HttpEffects{
    constructor(
        private actions$:Actions,
        private todoService:TodoService
    ){}

    @Effect() loadAll$ = this.actions$
        .ofType(GET_TODOS)
        .switchMap(()=> this.todoService.getTodos())
        .map(res => getTodosSuccess(res.json()));


    @Effect() add$ = this.actions$
        .ofType(CREATE_TODO)
        .switchMap(({payload}) => this.todoService.postTodo(payload))
        .map(res => getTodos());


    @Effect() update$ = this.actions$
        .ofType(PUT_TODO)
        .switchMap(({payload}) => this.todoService.putTodo(payload))
        .map(res => {
            const todo = res.json();
            return updateLocalTodo(todo);
        });
}


export default EffectsModule.run(HttpEffects);