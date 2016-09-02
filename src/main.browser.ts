//the code in this file is just test to make sure everything is working
import {Component, NgModule, Injectable, Inject} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {HttpModule, Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class TodoService{
    constructor(
        private http:Http,
        @Inject('API') private API
    ){}

    get todos$(){
        return this.http
            .get(this.API)
            .map(res => res.json())
    }
}

@Component({
    selector: 'app',
    template: `
<div *ngFor="let todo of todos$ | async">
    <div 
        [style.text-decoration]="
            todo.completed 
                ?'line-through'
                : 'none'"
    >
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

@NgModule({
    imports:[BrowserModule, ServicesModule.forRoot()],
    declarations:[AppComponent],
    bootstrap:[AppComponent]
})
export class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);