import CrossIcon from "./componets/icons/CrossIcon";
import MonIcon from "./componets/icons/MonIcon";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-bold tracking-[0.3em]">Tareas</h1>
          <button>
            <MonIcon fill="#fff"></MonIcon>
          </button>
        </div>
        <form className="flex gap-4 bg-white rounded-md overflow-hidden py-3 items-center px-4 mt-8">
          <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
          <input
            className="w-full text-gray-500 outline-none"
            type="text"
            placeholder="Crear nueva tarea" />
        </form>
      </header>

      <main className="container mx-auto mt-8 px-4">
        <div className="bg-white rounded-md [&>article]:p-4">
          <article className="flex gap-4 border-b border-b-gray-400">
            <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
            <p className="text-gray-600 flex-grow">Complete online Javascript curse</p>
            <button>
              <CrossIcon></CrossIcon>
            </button>
          </article>
          <article className="flex gap-4 border-b border-b-gray-400">
            <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
            <p className="text-gray-600 flex-grow">Complete online Javascript curse</p>
            <button>
              <CrossIcon></CrossIcon>
            </button>
          </article>
          <article className="flex gap-4 border-b border-b-gray-400">
            <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
            <p className="text-gray-600 flex-grow">Complete online Javascript curse</p>
            <button>
              <CrossIcon></CrossIcon>
            </button>
          </article>

          <section className="py-4 px-4 flex justify-between">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear Completed</button>
          </section>
        </div>
      </main>

      <section className="container mx-auto px-4 mt-8">
        <div className="bg-white p-4 rounded-md flex justify-center gap-4">
          <button className="text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Complete</button>
        </div>
      </section>

      <p className="text-center mt-8">Drag and drop to reorder list</p>
    </div>
  )
}

export default App;