import Tree, { TreeNode } from "rc-tree";
import "rc-tree/assets/index.css";

const treeData = [
  { title: "soil properties", key: "0-0", children: [
      { title: "soil chemical properties", key: "0-0-0" , children: [
          { title: "soil pH", key: "0-0-0-0" , children:[
            { title: "pH of a 1:5 soil/water suspension", key: "0-0-0-0-0" },
            { title: "pH of a 1:5 soil/water suspension", key: "0-0-0-0-1" }
          ]},
          { title: "carbon", key: "0-0-0-1" }  
      ]},
      { title: "soil physical properties", key: "0-0-1" }
    ] 
  },
  { title: "soil functions", key: "0-1"
  }
];

export function treeView() {
  return (
    <Tree
      treeData={treeData}
      checkable={false}                // enable checkboxes
      defaultExpandAll={true}        // expand all nodes by default
      showIcon = {false}               // hide icons
    />
  );
}