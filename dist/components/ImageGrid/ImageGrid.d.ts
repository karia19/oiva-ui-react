import React from "react";
import './ImageGrid.css';
export type columnSize = number | 3;
export type imageProps = {
    id: number;
    url: string;
    alt: string;
    name: string;
};
declare const ImageGrid: React.FC<{
    mainSrc: imageProps[];
    colSize: columnSize;
}>;
export default ImageGrid;
