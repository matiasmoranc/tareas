
const TodoComputed = ({ computedItemsLeft, clearComplete }) => {
    return (
        <section className="dark:bg-gray-800 py-4 px-4 rounded-b-md flex justify-between bg-white transition-all duration-200">
            <span className="text-gray-400">{computedItemsLeft}</span>
            <button className="text-gray-400" onClick={clearComplete}>Clear Completed</button>
        </section>

    );
}

export default TodoComputed;