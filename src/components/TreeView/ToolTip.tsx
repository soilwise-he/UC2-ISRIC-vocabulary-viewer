import React from 'react';
import { Tooltip } from 'react-tooltip';
export const ConceptDetail: React.FC = () => {
    return (
        <a
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Hello world!"
            data-tooltip-place="top"
        >
            check
        </a>

    );
}
