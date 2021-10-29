// Library Code
const createStore = (reducer) => {
    // The Store should have four parts:

    // 1. The state
    // 2. Get the state
    // 3. Listen for changes on the state
    // 4. Update the state

    let state;
    let listeners = [];
    const getState = () => state;

    const subscribe = (listener) => {
        listeners.push(listener);

        return () => {
            listeners = listeners.filter((l) => l !== listener);
        };
    };

    const dispatch = (action) => {
        state = reducer(state, action);

        listeners.forEach((listener) => listener());
    };

    return {
        getState,
        subscribe,
        dispatch,
    };
};

// AppCode

// Action Types
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const ADD_GOAL = 'ADD_GOAL';
const REMOVE_GOAL = 'REMOVE_GOAL';

// Action Creators
const addTodoAction = (todo) => {
    return {
        type: ADD_TODO,
        todo,
    };
};

const removeTodoAction = (id) => {
    return {
        type: REMOVE_TODO,
        id,
    };
};

const toggleTodoAction = (id) => {
    return {
        type: TOGGLE_TODO,
        id,
    };
};

const addGoalAction = (goal) => {
    return {
        type: ADD_GOAL,
        goal,
    };
};

const removeGoalAction = (id) => {
    return {
        type: REMOVE_GOAL,
        id,
    };
};

const todos = (state = [], action) => {
    if (action.type === ADD_TODO) {
        return state.concat([action.todo]);
    } else if (action.type === REMOVE_TODO) {
        return state.filter((todo) => todo.id !== action.id);
    } else if (action.type === TOGGLE_TODO) {
        return state.map((todo) => {
            if (todo.id === action.id) {
                return Object.assign({}, todo, {
                    complete: !todo.complete,
                });
            } else {
                return todo;
            }
        });
    } else {
        return state;
    }
};

const goals = (state = [], action) => {
    if (action.type === ADD_GOAL) {
        return state.concat([action.goal]);
    } else if (action.type === REMOVE_GOAL) {
        return state.filter((goal) => goal.id !== action.id);
    } else {
        return state;
    }
};

const app = (state = {}, action) => {
    return {
        todos: todos(state.todos, action),
        goals: goals(state.goals, action),
    };
};

const store = createStore(app);

store.subscribe(() => {
    const { goals, todos } = store.getState();

    document.getElementById('goals').innerHTML = '';
    document.getElementById('todos').innerHTML = '';

    goals.forEach(addGoalToDOM);
    todos.forEach(addTodoToDOM);
});

// store.dispatch(
//     addTodoAction({
//         id: 0,
//         name: 'Redux Learning',
//         complete: false,
//     })
// );

// store.dispatch(
//     addTodoAction({
//         id: 1,
//         name: 'Store Build',
//         complete: true,
//     })
// );

// store.dispatch(removeTodoAction(1));

// store.dispatch(toggleTodoAction(0));

// store.dispatch(
//     addGoalAction({
//         id: 0,
//         name: 'GYM Start',
//     })
// );

// store.dispatch(
//     addGoalAction({
//         id: 1,
//         name: 'Starting to Learn Intense JavaScript',
//     })
// );

// DOM Functions
const generateId = () => {
    return (
        Math.random().toString(36).substring(2) +
        new Date().getTime().toString(36)
    );
};

const addTodo = () => {
    const input = document.getElementById('todo');
    const name = input.value;
    input.value = '';
    store.dispatch(
        addTodoAction({
            name,
            complete: false,
            id: generateId(),
        })
    );
};

const addGoal = () => {
    const input = document.getElementById('goal');
    const name = input.value;
    input.value = '';
    store.dispatch(
        addGoalAction({
            name,
            id: generateId(),
        })
    );
};

document.getElementById('todoBtn').addEventListener('click', addTodo);
document.getElementById('goalBtn').addEventListener('click', addGoal);

const createRemoveButton = (onClick) => {
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'X';

    removeBtn.addEventListener('click', onClick);

    return removeBtn;
};

const addTodoToDOM = (todo) => {
    const node = document.createElement('li');
    const text = document.createTextNode(todo.name);
    const removeBtn = createRemoveButton(() => {
        store.dispatch(removeTodoAction(todo.id));
    });
    node.appendChild(text);
    document.getElementById('todos').appendChild(node);
    node.appendChild(removeBtn);

    node.style.textDecoration = todo.complete ? 'line-through' : 'none';
    node.addEventListener('click', () => {
        store.dispatch(toggleTodoAction(todo.id));
    });
};

const addGoalToDOM = (goal) => {
    const node = document.createElement('li');
    const text = document.createTextNode(goal.name);
    const removeBtn = createRemoveButton(() => {
        store.dispatch(removeGoalAction(goal.id));
    });
    node.appendChild(text);
    document.getElementById('goals').appendChild(node);
    node.appendChild(removeBtn);
};
/* UPDATING THE STATE 
    ---- #RULE NO 1: Only an event can change the state of the store.

    ---- #RULE NO 2: The function that returns the new state should be pure function.
            PURE FUNCTION: Returns the same result if the same arguments are passed in
            PURE FUNCTION: Depends solely on the arguments passed in to them
            PURE FUNCTION: Does not produce side effects such as API requests and I/O operations
            PURE FUNCTION: They are predictable
            ```
            /* `square()` is a pure function /
                const square = x => x * x;
            ```
        ----- FUNCTIONALITY FOR THE STORE METHODS
    1. getState() - Gets the current state of the store
    2. subscribe(listener) - takes in function that will be called whenever the state changes
    3. the state tree - the application's state tree
    4. dispatch(action) - takes in an action and updates the state of the store;

*/
