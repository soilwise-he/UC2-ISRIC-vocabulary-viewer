import React from "react";
import Tree from "rc-tree";
import "rc-tree/assets/index.css";

const treeData = [
  { title: "soil properties", key: "0-0", children: [
      { title: "soil chemical properties", key: "0-0-0" , children: [
          { title: "soil pH", key: "0-0-0-0" , children:[
            { title: "pH of a 1:5 soil/water suspension", key: "0-0-0-0-0" },
            { title: "pH of a 1:5 soil/water suspension", key: "0-0-0-0-1" }
          ]},
          { title: "Carbon", key: "0-0-0-1" }  
      ]},
      { title: "soil physical properties", key: "0-0-1" }
    ] 
  },
  { title: "Parent 2", key: "0-1", children: [
      { title: "Child 3", key: "0-1-0" }
    ] 
  }
];

const App: React.FC = () => {


  return (
    <div style={{ padding: "20px" }}>
      <h1>React Tree Props Demo</h1>

      <Tree
        treeData={treeData}
        checkable={false}                // enable checkboxes
        defaultExpandAll={true}        // expand all nodes by default
        showIcon = {true}               // hide icons
      />
    </div>
  );
};

export default App;

