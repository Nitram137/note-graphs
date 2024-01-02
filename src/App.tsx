import NoteCard from "./components/NoteCard";

const App = () => {
  return (
    <div className="p-8">
      <button className="text-5xl shadow shadow-black bg-neutral-600 rounded-full px-4 py-2">
        +
      </button>
      <NoteCard />
    </div>
  );
};

export default App;
