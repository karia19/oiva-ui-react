import React from "react";
import './ImageGridModal.css';
import './components/modal.css';
import { columnSize, imageProps, showModal } from "../app.types";
declare const ImageGridLightBox: React.FC<{
    mainSrc: imageProps[];
    colSize: columnSize;
    showModal: showModal;
}>;
export default ImageGridLightBox;
