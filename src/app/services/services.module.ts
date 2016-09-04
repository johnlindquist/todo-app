import {TodoService} from "./todo.service";
import {HttpModule} from "@angular/http";
import {NgModule} from "@angular/core";
@NgModule({
    imports:[HttpModule]
})
export class ServicesModule{
    static forRoot(){
        return {
            ngModule: ServicesModule,
            providers:[
                {provide: 'TodoService', useClass:TodoService},
                {provide:'API', useValue:`http://localhost:4000/todos`}
            ]
        }
    }
}
