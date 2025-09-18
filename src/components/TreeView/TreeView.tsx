import Tree from "rc-tree";
import "rc-tree/assets/index.css";
import React, { useState } from "react";
import { Tooltip } from 'react-tooltip';

interface TreeNode {
  title: string;
  key: string;
  children?: TreeNode[];
}

const treeData: TreeNode[] = [
  { 
    title: "soil properties", 
    key: "0-0", 
    children: [
      { 
        title: "soil chemical properties", 
        key: "0-0-0",
        children: [
          { 
            title: "soil pH", 
            key: "0-0-0-0",
            children:[
              { title: "pHCaCl2", key: "0-0-0-0-0"},
              { title: "pHCaCl2_ratio1-1", key: "0-0-0-0-1"},
              { title: "pHCaCl2_ratio1-10", key: "0-0-0-0-2" },
              { title: "pHCaCl2_ratio1-2", key: "0-0-0-0-3"},
              { title: "pHCaCl2_ratio1-2.5", key: "0-0-0-0-4" },
              { title: "pHCaCl2_ratio1-5", key: "0-0-0-0-5" },
              { title: "pHCaCl2_sat", key: "0-0-0-0-6" },
              { title: "pHH2O", key: "0-0-0-0-7"},
              { title: "pHH2O_ratio1-1", key: "0-0-0-0-8" },
              { title: "pHH2O_ratio1-10", key: "0-0-0-0-9" },
              { title: "pHH2O_ratio1-2", key: "0-0-0-0-10"},
              { title: "pHH2O_ratio1-2.5", key: "0-0-0-0-11"},
              { title: "pHH2O_ratio1-5", key: "0-0-0-0-12"},
              { title: "pHH2O_sat", key: "0-0-0-0-13" }
            ]
          },
          { title: "carbon", key: "0-0-0-1"}  
        ]
      },
      { title: "soil physical properties", key: "0-0-1" }
    ] 
  },
];

export const TreeView: React.FC = () => {
  const [popupInfo, setPopupInfo] = useState('');
  const handleSelect = () => {
  setPopupInfo('something');
};

  return (
    <div>
      <Tree
        treeData={treeData}
        checkable={false}                // enable checkboxes
        defaultExpandAll={true}        // expand all nodes by default
        showIcon={false}
        onSelect={handleSelect}
      />

      {popupInfo && (
        <div data-tooltip-id="my-tooltip" data-tooltip-content="Hello to you too!" data-tooltip-place="bottom">
          <div >
            <h3>pHCaCl2</h3>
            <p><strong>IRI:</strong> <a href="http://w3id.org/glosis/model/procedure/pHProcedure-pHCaCl2" target="_blank">http://w3id.org/glosis/model/procedure/pHProcedure-pHCaCl2</a></p>
            <p><strong>Definition:</strong> pHCaCl2 (soil reaction) in a soil/CaCl2 solution (0.01-1 M)</p>
            <p><strong>Source:</strong> GloSIS</p>
          </div>
        </div>
      )}
    </div>
  );
}