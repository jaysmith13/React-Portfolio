import React from "react";
import {useNavigate} from "react-router-dom";

function Image({id, name, image}){
    const navigate = useNavigate();
    return(
        <div 
        className="Image"
        onClick={() => {
            navigate("/image/" + id);
        }}
        >
            <div style={{ backgroundImage: `url(${image})`}} className="bgImage"/>
        </div>
    )
}
export default Image;