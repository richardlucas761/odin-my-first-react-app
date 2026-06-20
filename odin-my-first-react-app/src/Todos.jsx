// a list of todos, each todo object has a task and an id
const todos = [
    { task: "Mow the yard", id: crypto.randomUUID() },
    { task: "Work on Odin Projects", id: crypto.randomUUID() },
    { task: "Feed the cat", id: crypto.randomUUID() },
];

function TodoList() {
    return (
        <div>
            <h1>Todos</h1>
            <ul>
                {todos.map((todo) => (
                    // here we are using the already generated id as the key.
                    <li key={todo.id}>{todo.id} - {todo.task}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
