export const initialState = {
    todos: [{
        title: "Make Coffee",
        id: 4444,
        completed: true,
    },{
        title: "Eat Breakfast",
        id: 2434,
        completed: false,
    }]
}

export const reducers = (state, action) => {
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