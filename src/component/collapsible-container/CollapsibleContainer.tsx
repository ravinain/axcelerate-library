import React, { useState } from "react";
import { CollapsibleContainerProps } from "../../@types/component/collapsible-container/CollapsibleContainer";

import "./CollapsibleContainer.scss";

const CollapsibleContainer = (props: CollapsibleContainerProps) => {
    const {children, label, open} = props;
    const [isOpen, setIsOpen] = useState(!!open);

    const toggleContainer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapsible-container">
            <div className="header">
                <button type="button" onClick={toggleContainer}>{label}</button>
                <span className={`toggle-icon ${isOpen? "open" : "closed"}`}></span>
            </div>
            {
                isOpen &&
                <div className="content">
                    {children}
                </div>
            }
            
        </div>
    )

};

export default CollapsibleContainer;