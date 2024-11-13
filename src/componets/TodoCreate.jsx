import { useState } from "react";

const TodoCreate = ({ createTodo }) => {

    const [title, setTitle] = useState('');

    const handleSubmitAddTodo = (e) => {
        e.preventDefault();

        if (!title.trim()) {
            return setTitle("");
        }
        createTodo(title);
        setTitle("");
    }

    return (
        <form onSubmit={handleSubmitAddTodo} className="transition-all duration-200 dark:bg-gray-800 flex gap-4 bg-white rounded-md overflow-hidden py-3 items-center px-4 ">
            <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
            <input
                className="w-full text-gray-500 dark:text-gray-200 outline-none dark:bg-gray-800 transition-all duration-200"
                type="text"
                placeholder="Crear nueva tarea"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>

    );
}

export default TodoCreate;