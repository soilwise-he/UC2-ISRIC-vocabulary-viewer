import React from "react";
import { treeView } from "./components/TreeView/TreeView";
import Demo from "./components/TreeView/example";


const App: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Soil Procedures Viewer</h1>
      {treeView()} 

    </div>
  );
};


export default App;

