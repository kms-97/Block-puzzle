import React, { useEffect } from "react";
import "./ObjectList.css"

const ObjectList = () => {

    useEffect(() => {
        const container = document.getElementById("object-list")
        const boundary = container.getBoundingClientRect()
        return (
        console.log(boundary)
        )
        }
    )
    

    return (
        <div id="object-list" className="alert alert-light rounded-3 border border-primary">
            <div className="object"/>
            <div className="object"/>
            <div className="object"/>
        </div>
    )
}

export default ObjectList