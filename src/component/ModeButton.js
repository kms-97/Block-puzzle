import React from "react";

const ModeButton = ({mode, isActive, onClick}) => {
    return (
        <li>
            <button type="button" className={`btn btn-primary ${isActive?'active':''}`} data-bs-toggle="button" autoComplete="off" onClick={onClick} value={mode}>{mode}x{mode}</button>
        </li>
    )
}

export default React.memo(ModeButton)