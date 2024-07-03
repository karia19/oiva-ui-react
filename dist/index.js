import React, { useState } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = ".image-component {\n    padding-top: 60px;\n    padding-bottom: 100px;\n} \n.row1 {\n    display: -ms-flexbox; /* IE10 */\n    display: flex;\n    -ms-flex-wrap: wrap; /* IE10 */\n    flex-wrap: wrap;\n\n}\n  \n.column {\n    -ms-flex: 33.33%; /* IE10 */\n    flex: 33.33%;\n    max-width: 33.33%;\n    padding: 0 6px;\n  \n}\n.column img {\n    margin-top: 10px;\n    vertical-align: middle;\n    /*width: 100%; */\n    cursor: pointer;\n    object-fit: cover; /* Image scales to fit container while maintaining aspect ratio */\n    width: 100%; /* Or desired width */\n    height: auto;\n}  \n\n.column-4 {\n    -ms-flex: 25%; /* IE10 */\n    flex: 25%;\n    max-width: 25%;\n    padding: 0 8px;\n}\n.column-4 img {\n    margin-top: 10px;\n    cursor: pointer;\n    object-fit: cover; /* Image scales to fit container while maintaining aspect ratio */\n    width: 100%; /* Or desired width */\n    height: auto;\n}  \n  \n \n\n/* Responsive layout - makes a two column-layout instead of four columns */\n@media screen and (max-width: 800px) {\n    .column {\n      -ms-flex: 50%;\n      flex: 50%;\n      max-width: 50%;\n    }\n    .column-4 {\n        -ms-flex: 33.33%;\n        flex: 33.33%;\n        max-width: 33.33%;\n    }\n}\n  \n/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n    .column {\n      -ms-flex: 100%;\n      flex: 100%;\n      max-width: 100%;\n    }\n    .column-4 {\n        -ms-flex: 100%;\n        flex: 100%;\n        max-width: 100%;\n    }\n}\n\n\n \n\n  ";
styleInject(css_248z$1);

var css_248z = ".modal {\n    /*display: none; */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 50px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100vh; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgba(0,0,0,0.45); \n  }\n\n.modal-content{\n    display: flex;  \n    justify-content:center;  \n    align-items: center;  \n    top: 0;\n    left: 50%;\n    width: 100%;\n    height: 80vh;\n}\n.modal-content img {\n    max-width: 85vh;\n    max-height: 90vh;\n    margin-top: 10vh;\n    /*object-fit: cover; */\n}\n\n.modal-content, #caption { \n    animation-name: zoom;\n    animation-duration: 0.6s;\n  }\n  \n@keyframes zoom {\n    from {transform:scale(0)} \n    to {transform:scale(1)}\n}\n\n.modal-text {\n    position: absolute; /* Absolute positioning within the modal */\n    top: 10px; /* Align to the top edge */\n    margin-left: 10px;\n    width: 80%; /* Maintain desired width */\n    max-width: 500px; /* Maintain maximum width */\n    text-align: left;\n    color: #ccc;\n    font-size: 18px;\n\n}\n.modal.active {\n    display: block; /* Show the modal when the active class is added */\n}\n\n.close {\n    position: absolute;\n    top: 0px;\n    right: 29px;\n\n    color: #f1f1f1;\n    font-size: 40px;\n    font-weight:200;\n    transition: 0.3s;\n}\n  \n.white-arrow-left {\n    position: absolute;\n    color: white;\n    top: 50%;\n    left: 4vh;\n    width: 3em;\n    height: 3em;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    cursor: pointer;\n}\n.white-arrow-right {\n    position: absolute;\n    color: white;\n    top: 50%;\n    right: 4vh;\n    width: 3em;\n    height: 3em;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    cursor: pointer;\n}\n.white-arrow-left:hover {\n    color: #bbb;\n}\n.white-arrow-right:hover {\n    color: #bbb;\n \n}\n\n.modal-content .fade-out {\n    animation: zoom-out;  /* Adjust duration and timing function as needed */\n    animation-duration: 0.6s;\n}\n@keyframes zoom-out {\n    from {transform:scale(1)} \n    to {transform:scale(0)}\n}\n\n  \n#myModal {\n    opacity: 1;  /* Set initial opacity to 1 for visible state */\n}\n    \n.close:hover,\n.close:focus {\n    color: #bbb;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n@media screen and (max-width: 768px) {\n    .modal-content {\n      width: 100% !important;\n      padding: 10px;\n    }\n    .close {\n        right: 12px;\n        top: 0px !important\n    }\n    .modal-text {\n        font-size: 18px;\n        margin-left: 10px;\n        top: 14px;\n    }\n}\n  \n@media screen and (max-width: 576px) {\n    .modal-content {\n      width: 100% !important; \n      padding: 6px;\n    }\n    .close {\n        right: 12px;\n        top: 0px !important\n    }\n    .modal-text {\n        font-size: 18px;\n        margin-left: 10px;\n        top:14px;\n    }\n}\n  ";
styleInject(css_248z);

var Modal = function (image) {
    return (React.createElement("div", null,
        React.createElement("div", { className: "modal-text", id: "caption" },
            React.createElement("p", null, image.image.name)),
        React.createElement("div", { className: "modal-content" },
            React.createElement("img", { alt: image.image.alt, src: image.image.url }))));
};

var Arrow = function (_a) {
    var direction = _a.direction, onClick = _a.onClick;
    var leftArrow = (React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "white-arrow-left clickable", onClick: onClick },
        React.createElement("path", { d: "M16 8L8 12l8 4", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })));
    var rightArrow = (React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "white-arrow-right clickable", onClick: onClick },
        React.createElement("path", { d: "M8 8L16 12l-8 4", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })));
    var arrowContent = direction === "left" ? leftArrow : rightArrow;
    return arrowContent;
};

function findNextImageById(rows, currentImageId) {
    var rowIndex = rows.findIndex(function (row) { return row.some(function (image) { return image.id === currentImageId; }); });
    if (rowIndex !== -1) {
        var currentIndex = rows[rowIndex].findIndex(function (image) { return image.id === currentImageId; });
        if (currentIndex !== -1) {
            var nextIndex = currentIndex + 1;
            if (nextIndex < rows[rowIndex].length) {
                return rows[rowIndex][nextIndex];
            }
            else {
                for (var i = rowIndex + 1; i < rows.length; i++) {
                    if (rows[i].length > 0) {
                        return rows[i][0];
                    }
                }
                return null;
            }
        }
        else {
            console.error('Current image not found within the specified row');
            return null;
        }
    }
    else {
        console.error('Current image not found in the entire array');
        return null;
    }
}
function findPastImageById(rows, currentImageId) {
    var rowIndex = rows.findIndex(function (row) { return row.some(function (image) { return image.id === currentImageId; }); });
    if (rowIndex !== -1) {
        var currentIndex = rows[rowIndex].findIndex(function (image) { return image.id === currentImageId; });
        if (currentIndex !== -1) {
            // Check if there's a previous image in the current row
            var previousIndex = currentIndex - 1;
            // Handle cases for finding the previous image
            if (previousIndex >= 0) {
                return rows[rowIndex][previousIndex]; // Return the previous image in the same row
            }
            else {
                // If no previous image in the current row, iterate backwards through rows
                for (var i = rowIndex - 1; i >= 0; i--) {
                    if (rows[i].length > 0) {
                        return rows[i][rows[i].length - 1]; // Return the last image in the previous row
                    }
                }
            }
        }
        else {
            console.error('Current image not found within the specified row');
            return null;
        }
    }
    else {
        console.error('Current image not found in the entire array');
        return null;
    }
    // If no past image found (current image is ID 1)
    console.log('No past image found (current image is ID 1)');
    return null;
}

var ImageGridLightBox = function (_a) {
    var mainSrc = _a.mainSrc, colSize = _a.colSize, showModal = _a.showModal;
    var _b = useState('column'), columnCss = _b[0], setColumnCss = _b[1];
    var _c = useState(null), selectedImage = _c[0], setSelectedImage = _c[1];
    if (!mainSrc || mainSrc.length === 0) {
        return React.createElement("div", null, "No images to display"); // Example handling
    }
    var imageRows = React.useMemo(function () {
        if (colSize >= 4) {
            setColumnCss("column-4");
        }
        var rows = [];
        var rowSize = Math.round(mainSrc.length / colSize);
        console.log(rowSize);
        var startIndex = 0;
        var endIndex = rowSize;
        for (var i = 0; i <= colSize - 1; i++) {
            rows.push(mainSrc.slice(startIndex, endIndex));
            startIndex = endIndex;
            endIndex += rowSize;
        }
        console.log(rows);
        return rows;
    }, [mainSrc, colSize]);
    var handleImageClick = function (image) {
        console.log("image", image);
        setSelectedImage(image);
    };
    var handleModalClose = function () {
        setSelectedImage(null);
    };
    var moveLeftArrow = function () {
        var res = findPastImageById(imageRows, selectedImage.id);
        setSelectedImage(res);
    };
    var moveRightArrow = function () {
        var res = findNextImageById(imageRows, selectedImage.id);
        setSelectedImage(res);
    };
    var ImageItems = function (_a) {
        var images = _a.images;
        return (React.createElement("div", { key: images.length, className: columnCss },
            images.map(function (image) { return (React.createElement("img", { key: image.id, src: image.url, alt: image.name, onClick: function () { return handleImageClick(image); } })); }),
            showModal ? (React.createElement(React.Fragment, null, selectedImage && (React.createElement("div", { id: "myModal", className: "modal" },
                React.createElement("span", { className: "close", onClick: handleModalClose }, "\u00D7"),
                React.createElement(Arrow, { direction: "left", onClick: moveLeftArrow }),
                React.createElement(Arrow, { direction: "right", onClick: moveRightArrow }),
                React.createElement(Modal, { image: selectedImage }))))) : (React.createElement("p", null))));
    };
    return (React.createElement("div", { className: "image-component" },
        React.createElement("div", { className: "row1" }, imageRows.map(function (row, rowIndex) { return (React.createElement(ImageItems, { key: rowIndex, images: row })); }))));
};

export { ImageGridLightBox as ImageGridModal };
//# sourceMappingURL=index.js.map
