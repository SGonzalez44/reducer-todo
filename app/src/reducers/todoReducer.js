export const initialState = {
    todos: [{
        title: "Complete This App",
        id: 5678,
        completed: false,
    },{
        title: "Take Out Trash",
        id: 1234,
        completed: false,
    }]
}

export const todoReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return {
                ...state, 
                todos: [...state.todos, action.payload]
            }
        case "MARK_COMPLETE":
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed}: todo)
            }
        case "CLEAR_COMPLETE":
            return {
                ...state,
                todos: state.todos.filter(todo => !(todo.completed))
            }
        default:
            return state
    }
}