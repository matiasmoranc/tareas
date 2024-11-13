import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import { useEffect, useState } from "react";
import TodoComputed from "./componets/TodoComputer";
import TodoCreate from "./componets/TodoCreate";
import TodoList from "./componets/TodoList";
import TodoFilter from "./componets/TodosFilter";
import Header from "./componets/header";


const initialStateTodos = JSON.parse(localStorage.getItem("todos") || []);

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

const App = () => {

  const [todos, setTodos] = useState(initialStateTodos);

  useEffect((title) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    }

    setTodos([...todos, newTodo]);
  }

  const updateTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, complete: !todo.complete } : todo));
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const clearComplete = () => {
    setTodos(todos.filter((todo) => !todo.complete));
  }

  const [filter, setFilter] = useState('all');

  const changeFilter = (filter) => setFilter(filter);

  const filterTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.complete);
      case "complete":
        return todos.filter((todo) => todo.complete);
    }
  }

  const computedItemsLeft = todos.filter((todo) => !todo.complete).length;

  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    )
      return;

    setTodos((prevTasks) =>
      reorder(prevTasks, source.index, destination.index)
    );
  }

  return (
    <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain dark:bg-gray-900
    dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] dark:md:bg-[url('./assets/images/bg-desktop-dark.jpg')] transition-all duration-500 ">
      <Header />

      <main className="container mx-auto mt-8 px-4 md:max-w-xl">
        <TodoCreate createTodo={createTodo} />

        <DragDropContext onDragEnd={handleDragEnd}>
          <TodoList todos={filterTodos()} removeTodo={removeTodo} updateTodo={updateTodo} />
        </DragDropContext>

        <TodoComputed computedItemsLeft={computedItemsLeft} clearComplete={clearComplete} />

        <TodoFilter changeFilter={changeFilter} filter={filter} />

      </main>

      <footer className="text-center mt-8 dark:text-gray-400">
        Drag and drop to reorder list
      </footer>
    </div>
  )
}

export default App;