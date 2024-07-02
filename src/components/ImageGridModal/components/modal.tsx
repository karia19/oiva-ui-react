import React from "react";
import './modal.css'
import { imageProps } from "../../app.types";

const Modal: React.FC<{image: imageProps}> = (image) => {
  

    return(
        <div>
            <div className="modal-text" id="caption">
                <p>{image.image.name}</p>
            </div>
            
            <img className="modal-content" alt={image.image.alt} src={image.image.url}/>
        </div>
    )
}

export default Modal;