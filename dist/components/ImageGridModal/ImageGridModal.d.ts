import React from "react";
import './ImageGridModal.css';
import './components/modal.css';
import { columnSize, imageProps } from "../app.types";
declare const ImageGridLightBox: React.FC<{
    mainSrc: imageProps[];
    colSize: columnSize;
}>;
export default ImageGridLightBox;
