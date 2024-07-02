import React from "react";
import './modal.css';
export type imageProps = {
    id: number;
    url: string;
    alt: string;
    name: string;
};
declare const Modal: React.FC<{
    image: imageProps;
}>;
export default Modal;
