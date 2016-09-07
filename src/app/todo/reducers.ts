import {
    GET_TODOS_SUCCESS,
    UPDATE_LOCAL_TODO
} from "./";

export default (state, {type, payload}) => {
    switch (type) {
        case GET_TODOS_SUCCESS:
            return payload;

        case UPDATE_LOCAL_TODO:
            console.log(payload, state);

            return state.map(
                todo =>
                    todo.id === payload.id
                        ? payload
                        : todo
            );

        default:
            return state;
    }
};