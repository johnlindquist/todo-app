//the code in this file is just test to make sure everything is working
import {Component, NgModule, Injectable, Inject} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {HttpModule, Http} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/startWith";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/of";
import {Observable} from "rxjs/Observable";

@Injectable()
export class TodoService{
    failStream$ = Observable.of([
        {title: "Services are down", completed:false}
    ]);

    constructor(
        private http:Http,
        @Inject('API') private API
    ){}

    get todos$(){
        return this.http
            .get(this.API)
            .map(res => res.json())
            .startWith([])
            .catch(err => this.failStream$);
    }
}


@NgModule({
    imports:[HttpModule]
})
export class ServicesModule{
    static forRoot(){
        return {
            ngModule: ServicesModule,
            providers:[
                TodoService,
                {provide:'API', useValue:`http://localhost:4000/todos`}
            ]
        }
    }
}

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

    constructor(private todoService:TodoService){
        this.todos$ = todoService.todos$;
    }
}

@NgModule({
    imports:[BrowserModule, ServicesModule.forRoot()],
    declarations:[AppComponent],
    bootstrap:[AppComponent]
})
export class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);