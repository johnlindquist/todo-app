import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
@Injectable()
export class TodoService{
    constructor(private http:Http){}

    getTodos = ()=>
        this.http.get(`http://localhost:4000/todos`);

    postTodo = (payload) =>
        this.http.post(`http://localhost:4000/todos`,
            {
                title:payload,
                completed: false
            }
        );

    putTodo = (payload)=>
        this.http.put(`http://localhost:4000/todos/${payload.id}`,
            {
                title: payload.title,
                completed: !payload.completed
            }
        );
}