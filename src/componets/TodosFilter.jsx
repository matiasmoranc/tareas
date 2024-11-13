
const TodoFilter = ({ changeFilter, filter }) => {
    return (
        <section className="container mx-auto  mt-8">
            <div className=" transition-all duration-200 bg-white p-4 rounded-md flex justify-center gap-4 dark:bg-gray-800">
                <button className={`${filter === 'all' ? 'text-blue-600 hover:text-blue-500' : 'text-gray-400 hover:text-blue-500'}`} onClick={() => changeFilter('all')}>All</button>
                <button className={`${filter === 'active' ? 'text-blue-600 hover:text-blue-500' : 'text-gray-400 hover:text-blue-500'}`} onClick={() => changeFilter('active')}>Active</button>
                <button className={`${filter === 'complete' ? 'text-blue-600 hover:text-blue-500' : 'text-gray-400 hover:text-blue-500'}`} onClick={() => changeFilter('complete')}>Complete</button>
            </div>
        </section>

    );
}

export default TodoFilter;