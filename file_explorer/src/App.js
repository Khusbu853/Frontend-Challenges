import { useState } from "react";
import Folder from "./component/Folder";
import useTraverseTree from "./hooks/useTraverseTree";
import "./App.css";
import explorer from "./utils/explorer_data";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode, deleteNode, updateNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  const handleDeleteNode = (id) => {
    deleteNode(explorerData, id);
    const newTree = deleteNode(explorerData, id);

    setExplorerData(newTree);
  }


  const handleUpdateNode = (folderId, item) => {
    const updateTree = updateNode(explorerData, folderId, item)

    setExplorerData(updateTree)
  }

  

  return (
    <div className="App">
      <Folder 
      handleInsertNode={handleInsertNode}
      handleUpdateNode={handleUpdateNode}
      handleDeleteNode={handleDeleteNode}
       explorer={explorerData} />
    </div>
  );
}

