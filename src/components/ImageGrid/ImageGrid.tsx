import React, { useState, useEffect } from "react";
import './ImageGrid.css';

export type columnSize = number | 3;
export type imageProps = {
    id: number;
    url: string;
    alt: string;
    name: string;
};
const TwoColumnImageGrid: React.FC<{ firstRow: imageProps[]; secondRow: imageProps[]; }> = ({firstRow, secondRow}) => (
    <div className="image-component">
        <div className="w3-row" id="myGrid"></div>
        <div className="row1">
        <div className="column" style={{ cursor: "pointer" }}>
            {firstRow.map((x:any) => (
            <img key={x.id} src={x.url} alt={x.name} />
            ))}
        </div>
        <div className="column" style={{ cursor: "pointer" }}>
            {secondRow.map((x:any) => (
            <img key={x.id} src={x.url} alt={x.name} />
            ))}
        </div>
        </div>
    </div>    
);
const TreeColumnImageGrid:React.FC<{ firstRow: imageProps[]; secondRow: imageProps[]; thirdRow: imageProps[]; }> = ({firstRow, secondRow, thirdRow}) => (
    <div className="image-component">
        <div className="row1">
            <div className="column" style={{ cursor: "pointer" }} >
                {firstRow.map(x => 
                    <img key={x.id} src={x.url}  alt={x.alt}  />
                )}
            </div>

            <div className="column" style={{ cursor: "pointer" }} >
                {secondRow.map(x => 
                    <img key={x.id} src={x.url}  alt={x.alt} />
                )}
            </div>

            <div className="column" style={{ cursor: "pointer" }} >
                {thirdRow.map(x => 
                    <img key={x.id} src={x.url} alt={x.alt}  />
                )}
            </div>
        </div> 
    </div>

)


const ImageGrid:React.FC<{ mainSrc: imageProps[]; colSize: columnSize}>  = ( {mainSrc, colSize }) => {
    if (!mainSrc || mainSrc.length === 0) {
        return <div>No images to display</div>; // Example handling
    }
    const [underFive, setUnderFive] = useState<imageProps[]>([]);
    const [overFive, setOverFive] = useState<imageProps[]>([]);
    const [rest, setRest] = useState<imageProps[]>([]);

    useEffect(() => {
        const imageSize:number = Math.floor(mainSrc.length / colSize);
        setUnderFive(mainSrc.filter((x:any) => x.id <= imageSize));
        setOverFive(mainSrc.filter((x:any) => x.id > imageSize && x.id <= imageSize * 2));
        setRest(mainSrc.filter((x:any) => x.id > imageSize * 2));
    }, [mainSrc, colSize]);

    return(
        <div>
            <p>This is image grid</p>
            <TreeColumnImageGrid 
                firstRow={underFive}
                secondRow={overFive}
                thirdRow={rest}
            />
        </div>
    )
}

export default ImageGrid;