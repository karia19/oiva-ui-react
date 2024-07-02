import React, { useState, useEffect } from "react";
import './ImageGridModal.css';
import Modal from "./components/modal";
import './components/modal.css';
import Arrow from "./components/Arrows";
import { columnSize, imageProps } from "../app.types";
import { findNextImageById, findPastImageById } from "./utils";

const ImageGridLightBox:React.FC<{ mainSrc: imageProps[]; colSize: columnSize}>  = ( {mainSrc, colSize }) => {
    const [columnCss, setColumnCss] = useState('column')
    const [selectedImage, setSelectedImage] = useState<imageProps | null>(null);


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
            rows.push(mainSrc.slice(startIndex, endIndex));
            startIndex = endIndex
            endIndex += rowSize
        }
        
        console.log(rows)
        return rows;
        }, [mainSrc, colSize]);
        
    const handleImageClick = (image: imageProps) => {
        console.log("image", image)
        setSelectedImage(image)
    }
    const handleModalClose = () => {
        setSelectedImage(null)
    }
    const moveLeftArrow = () => {
        const res = findPastImageById(imageRows, selectedImage.id)
        setSelectedImage(res)
    }
    const moveRightArrow = () => {
        const res = findNextImageById(imageRows, selectedImage.id)
        setSelectedImage(res)
    }

    const ImageItems: React.FC<{ images: imageProps[] }> = ({ images }) => {
        return (
          <div key={images.length} className={columnCss} > 
            {images.map((image) => (
              <img key={image.id} 
                src={image.url} 
                alt={image.name}
                onClick={() => handleImageClick(image)}
              />
            ))}
            {selectedImage && (
                <div id="myModal" className={`modal`}>
                    <span className="close" onClick={() => handleModalClose()}>&times;</span>

                    <Arrow direction="left" onClick={() => moveLeftArrow()} />
                    <Arrow direction="right" onClick={() => moveRightArrow()} />
                    <Modal image={selectedImage} />                        
                </div>
            
            )}
          </div>
        );
    };

    
        
    return (  
        <div className="image-component">
            <div className="row1">
                {imageRows.map((row, rowIndex) => (
                    <ImageItems 
                        key={rowIndex} 
                        images={row} 
                    />
                ))}            
            </div>
        </div>
    )
}

export default ImageGridLightBox;