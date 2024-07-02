import React, { useState, useEffect } from "react";
import './ImageGrid.css';
import { columnSize, imageProps } from "../app.types";

const ImageGrid:React.FC<{ mainSrc: imageProps[]; colSize: columnSize}>  = ( {mainSrc, colSize }) => {
    const [columnCss, setColumnCss] = useState('column')

    if (!mainSrc || mainSrc.length === 0) {
        return <div>No images to display</div>; // Example handling
    }
    const imageRows = React.useMemo(() => {
        if (colSize >= 4){
            setColumnCss("column-4")
        }

        const rows: imageProps[][] = [];
        const rowSize = Math.round(mainSrc.length / colSize)
        console.log(rowSize)

        let startIndex = 0
        let endIndex = rowSize

        for (let i = 0; i <= colSize -1; i++) {
            console.log(startIndex, endIndex)
            //const endIndex = Math.min(i + colSize, mainSrc.length);
            rows.push(mainSrc.slice(startIndex, endIndex));
            startIndex = endIndex
            endIndex += rowSize

        }
        
        console.log(rows)
        return rows;
        }, [mainSrc, colSize]);
        


    const ImageItems: React.FC<{ images: imageProps[] }> = ({ images }) => {
        return (
          <div key={images.length} className={columnCss} > 
            {images.map((image) => (
              <img key={image.id} src={image.url} alt={image.name} />
            ))}
          </div>
        );
    };

    
        
    return (  
        <div className="image-component">
            <div className="row1">
                {imageRows.map((row, rowIndex) => (
                    <ImageItems key={rowIndex} images={row} />
                ))}            
            </div>
        </div>
    )
}

export default ImageGrid;