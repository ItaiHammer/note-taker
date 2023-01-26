import React, { useRef, useState } from 'react';

// files
import './Switch.css';

export default function (attributes) {
    const [state, setState] = useState(false);
    const moveable = useRef();

    return (
        <button onClick={() => setState(!state)} className="switch">
            <div
                ref={moveable}
                className={
                    state
                        ? 'switch-moveable switch-moveable-on'
                        : 'switch-moveable switch-moveable-off'
                }
            ></div>
        </button>
    );
}
