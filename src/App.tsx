import React from "react";
import { TreeView } from "./components/TreeView/TreeView";
import Demo from "./components/TreeView/example";


const App: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Soil Procedures Viewer</h1>
      <TreeView />
    </div>
  );
};


export default App;

