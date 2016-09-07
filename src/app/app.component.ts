import {Component} from "@angular/core";
import {Store} from "@ngrx/store";
import "rxjs/add/operator/let";
import {getTodos, putTodo, createTodo, selectTodos} from "./todo";

@Component({
    selector: 'app',
    styles:[`
.completed{
    text-decoration: line-through;
}
`],
    template: `
<input type="text" #input="ngModel" ngModel required>
<div *ngFor="let todo of todos$ | async">
    <div 
    [ngClass]="{'completed': todo.completed}"
    (click)="update(todo)"
    >
        {{todo.title}}
    </div>
</div>

<button [disabled]="input.invalid" (click)="add(input.value)">Add Todo</button>
`
})
export class AppComponent{
    todos$;

    constructor(private store:Store<{todos:any[]}>){
        this.todos$ = store.let(selectTodos());
    }

    ngOnInit(){
        this.store.dispatch(getTodos());
    }

    update(todo){
        this.store.dispatch(putTodo(todo));
    }

    add(title){
        this.store.dispatch(createTodo(title));
    }
}
