import {NgModule} from "@angular/core";
import {TodoService} from "./services";
import effects from "./effects";
import store from "./store";
import {HttpModule} from "@angular/http";

export * from './actions';
export * from './selectors';

@NgModule({
    imports:[store, effects, HttpModule],
    providers: [TodoService]
})
export class TodoModule{}