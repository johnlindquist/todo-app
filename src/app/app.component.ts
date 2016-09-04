import {Component, Inject} from "@angular/core";
@Component({
    selector: 'app',
    styles:[`
.completed{
    text-decoration: line-through;
}
`],
    template: `
<div *ngFor="let todo of todos$ | async">
    <div [ngClass]="{'completed': todo.completed}">
        {{todo.title}}
    </div>
</div>
`
})
export class AppComponent{
    todos$;

    constructor(@Inject('TodoService') private todoService){
        this.todos$ = todoService.todos$;
    }
}
