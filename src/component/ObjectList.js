import React, { useEffect } from "react";
import "./ObjectList.css"
import * as blockUtil from "./ObjectUtil"

const ObjectList = () => {

    useEffect(() => {
        const container = document.getElementById("top-gameboard-container")
        const boundary = container.getBoundingClientRect()
        return (
        console.log(boundary)
        )
        }
    )
    

    return (
        <div id="object-list" className="alert alert-light rounded-3 border border-primary">
            <div className="object">
                {blockUtil.displayBlock()}
            </div>
            <div className="object">
                {blockUtil.displayBlock()}
            </div>
            <div className="object">
                {blockUtil.displayBlock()}
            </div>
        </div>
    )
}

export default ObjectList