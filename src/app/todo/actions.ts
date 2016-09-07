export const CREATE_TODO = 'todo.CREATE_TODO';
export const createTodo = title => ({
    type: CREATE_TODO,
    payload: title
});

export const COMPLETE_TODO = 'todo.COMPLETE_TODO';
export const completeTodo = todo => ({
    type: COMPLETE_TODO,
    payload: todo
});


export const GET_TODOS = 'todo.LOAD';
export const getTodos = () => ({
    type: GET_TODOS
});

export const GET_TODO = 'todo.GET_TODO';
export const getTodo = todo => ({
    type: GET_TODO,
    payload: todo
});

export const GET_TODOS_SUCCESS = 'todo.GET_TODOS_SUCCESS';
export const getTodosSuccess = results => ({
    type: GET_TODOS_SUCCESS,
    payload: results
});

export const PUT_TODO = 'todo.PUT_TODO';
export const putTodo = todo => ({
    type: PUT_TODO,
    payload: todo
});

export const UPDATE_LOCAL_TODO = 'todo.UPDATE_LOCAL_TODO';
export const updateLocalTodo = todo => ({
    type: UPDATE_LOCAL_TODO,
    payload: todo
});