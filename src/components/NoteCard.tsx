import Draggable from "react-draggable";

interface NoteCardProps {
  card: NoteCard;
  handleInputChange: (id: string, newContent: string) => void;
}

const NoteCard = ({ card, handleInputChange }: NoteCardProps) => {
  return (
    <Draggable bounds="body" cancel="input">
      <div className="flex items-center justify-center p-4 m-4 rounded-lg shadow w-fit h-fit bg-neutral-600 shadow-black min-h-32 min-w-60">
        <input
          className="text-center border-none bg-neutral-600"
          type="text"
          value={card.content}
          onChange={(e) => handleInputChange(card.id, e.target.value)}
        />
      </div>
    </Draggable>
  );
};

export default NoteCard;
