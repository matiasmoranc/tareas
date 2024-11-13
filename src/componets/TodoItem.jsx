import React from "react";
import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";

const TodoItem = React.forwardRef(({ todo, removeTodo, updateTodo, ...props }, ref) => {

    const { id, title, complete } = todo;

    return (
        <article {...props} ref={ref} className="flex gap-4 border-b dark:border-b-gray-400 dark:bg-gray-800 transition-all duration-200">
            <button className={`transition-all duration-200 rounded-full  flex-none border-2 w-5 h-5 ${complete ? "flex justify-center items-center bg-gradient-to-r from-indigo-500 to-pink-500" : "   inline-block"}`}
                onClick={() => updateTodo(id)}
            >
                {
                    complete && <IconCheck />
                }

            </button>
            <p className={`text-gray-600 flex-grow ${complete && "line-through"} dark:text-gray-300`}>
                {title}
            </p>
            <button onClick={() => removeTodo(id)}>
                <IconCross />
            </button>
        </article>

    );
})

export default TodoItem;