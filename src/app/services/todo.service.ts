import {Injectable, Inject} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/startWith";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/of";

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

