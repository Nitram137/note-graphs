import { useCallback, useEffect, useRef, useState } from "react";
import { Handle, NodeProps, Position } from "reactflow";

function TextInputNode({ isConnectable }: NodeProps) {
  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "0px";
      const scrollHeight = textAreaRef.current.scrollHeight;
      textAreaRef.current.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, value]);

  const onChange = useCallback(
    (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
      const val = evt.target?.value;

      setValue(val);
    },
    [],
  );

  return (
    <div className="p-2">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <textarea
        className="w-32 overflow-hidden text-xs text-center border-none nodrag bg-neutral-600"
        id="text"
        name="text"
        ref={textAreaRef}
        rows={1}
        onChange={onChange}
        placeholder="new note"
        value={value}
      ></textarea>
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default TextInputNode;
