import { useCallback } from "react";
import ReactFlow, {
  Connection,
  Edge,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";

import "reactflow/dist/style.css";
import TextInputNode from "./customNodes/TextInputNode";

const nodeStyle =
  "border-none bg-neutral-600 text-white shadow-sm shadow-black rounded-lg";

const nodeTypes = { textInput: TextInputNode };

const App = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const generateId = () => `${Math.random().toString(36).slice(2, 9)}`;

  const addNode = () => {
    const newNodes = [
      ...nodes,
      {
        id: generateId(),
        type: "textInput",
        position: { x: 0, y: 0 },
        data: { label: "Edit text" },
        className: nodeStyle,
      },
    ];
    setNodes(newNodes);
  };

  return (
    <div className="w-screen h-screen border-2 rounded-xl">
      <button
        className="absolute z-10 px-4 py-2 m-4 text-5xl rounded-full shadow shadow-black bg-neutral-600 hover:bg-neutral-500"
        onClick={addNode}
      >
        +
      </button>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        proOptions={{ hideAttribution: true }}
      ></ReactFlow>
    </div>
  );
};

export default App;
