import React from "react";
import './ImageGrid.css';
import { columnSize, imageProps } from "../app.types";
declare const ImageGrid: React.FC<{
    mainSrc: imageProps[];
    colSize: columnSize;
}>;
export default ImageGrid;
