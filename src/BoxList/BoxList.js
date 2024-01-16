import { useState } from "react";
import { v4 as uuid } from 'uuid';

import Box from "../Box/Box";
import NewBoxForm from "../NewBoxForm/NewBoxForm";

import "./BoxList.css";

function BoxList() {
    const [boxes, setBoxList] = useState([]);

    const addBox = ({ color, width, height }) => {
        const newBox = { color, width, height, id: uuid() }
        setBoxList(oldBoxes => ([...oldBoxes, newBox]));
    };
 
    const removeBox = (id) => {
        setBoxList(oldBoxes => (oldBoxes.filter(box => box.id !== id)));
    };

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            <div className="BoxList" key={uuid()}>
                {boxes.map(box => <Box 
                                    color={box.color} 
                                    width={box.width} 
                                    height={box.height} 
                                    id={box.id}
                                    key={uuid()}
                                    removeBox={removeBox}
                                />)}
            </div>
        </div>
    )
};

export default BoxList;