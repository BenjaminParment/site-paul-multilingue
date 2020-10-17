import "./Tabs.scss";

import React, { useState } from "react";

import { SingleProgram } from "components/single-program/SingleProgram";

interface TabsProps {
    tabs: string[];
}

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [openedTab, toggleOpen] = useState(tabs[0]);

    return (
        <>
            <div className="tabs-parent-container">
                {tabs.map(tab => (
                    <button key="tab" onClick={() => toggleOpen(tab)} className={`tab ${openedTab === tab && "open"}`}>
                        {tab}
                    </button>
                ))}
            </div>
            <SingleProgram program={openedTab} />
        </>
    );
};
