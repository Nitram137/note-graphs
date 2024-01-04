import Draggable from 'react-draggable'

const NoteCard = ({content}: {content: string}) => {
  return (
    <Draggable bounds="body">
        <div
          className="flex items-center justify-center p-4 m-4 rounded-lg shadow w-fit h-fit bg-neutral-600 shadow-black min-h-32 min-w-60"
        >
          <p>{content}</p>
        </div>
    </Draggable>
  );
};

export default NoteCard;
