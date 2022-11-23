import React from "react";
import { ReactDOM } from "react-dom/client";



const root = ReactDOM.createRoot(document.getElementById('context-api-root'));

root.render(
    <React.StrictMode>
        <ContextApiTutorial></ContextApiTutorial>
    </React.StrictMode>
)

export function ContextApiTutorial() {
    return (
        <div>
            <h1>Context API Tutorial</h1>
        </div>
    )
}

// props.children: Used when children of parent can change or are unknown