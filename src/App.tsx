import { useState } from "react";
import NoteCard from "./components/NoteCard";

const App = () => {
  const [cards, setCards] = useState<NoteCard[]>([
    { id: "card-1", content: "Click on text to edit" },
  ]);

  const generateId = () => `card-${Math.random().toString(36).slice(2, 9)}`;

  const addCard = () => {
    const newCards = [...cards, { id: generateId(), content: "" }];
    setCards(newCards);
  };

  const handleInputChange = (id: string, newContent: string) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, content: newContent } : card,
      ),
    );
  };

  return (
    <div className="w-screen h-screen p-8 border-2 rounded-xl">
      <button
        className="px-4 py-2 text-5xl rounded-full shadow shadow-black bg-neutral-600 hover:bg-neutral-500"
        onClick={addCard}
      >
        +
      </button>
      <div>
        {cards.map((card) => (
          <NoteCard card={card} handleInputChange={handleInputChange} />
        ))}
      </div>
    </div>
  );
};

export default App;
