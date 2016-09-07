export type TodoState = {
    todos:TodoModel[]
}

export type TodoModel = {
    title: string,
    completed: boolean
}