import React from "react";
import './modal.css'
import { imageProps } from "../../app.types";

const Modal: React.FC<{image: imageProps}> = (image) => {
  

    return(
        <div>
            <div className="modal-text" id="caption">
                <p>{image.image.name}</p>
            </div>
            <div className="modal-content">
                <img alt={image.image.alt} src={image.image.url}/>
            </div>
        </div>
    )
}

export default Modal;