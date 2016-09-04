import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {NgModule, Injectable} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "../../src/app/app.component";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";

@Injectable()
export class PlnkrTodoService{
    get todos$(){
        return Observable.of([
            {title:"Wake up", completed:false},
            {title:"Eat", completed:true},
            {title:"Code", completed:true}
        ])
    }
}

@NgModule({})
export class PlnkrServicesModule{
    static forRoot(){
        return{
            ngModule: PlnkrServicesModule,
            providers:[{
                provide: 'TodoService',
                useClass: PlnkrTodoService
            }]
        }
    }
}

@NgModule({
    imports:[BrowserModule,
        PlnkrServicesModule.forRoot()],
    declarations:[AppComponent],
    bootstrap:[AppComponent]
})
class PlnkrModule{}


platformBrowserDynamic().bootstrapModule(PlnkrModule);