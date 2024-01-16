import React from "react";
import "./Box.css"

function Box({ color, width, height, id, removeBox }) {
    const styles = {
        backgroundColor: color,
        width: width + 'px',
        height: height + 'px'
    }

    const handleClick = (e) => {
        const id = e.target.id;
        removeBox(id);
    }

    return (
        <div
            id={id}
            style={styles}
            onClick={handleClick}
            className="Box">
        </div>
    )
};

export default Box;