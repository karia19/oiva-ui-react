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

var css_248z$1 = ".styled-button {\n    background-color: rgb(121, 22, 182);\n    padding: 20px;\n    color: white;\n    border-radius: 7px;\n}";
styleInject(css_248z$1);

var Button = function (props) {
    return React.createElement("button", { className: "styled-button" }, props.label);
};

var css_248z = ".image-component {\n    padding-top: 60px;\n    padding-bottom: 100px;\n} \n.row1 {\n    display: -ms-flexbox; /* IE10 */\n    display: flex;\n    -ms-flex-wrap: wrap; /* IE10 */\n    flex-wrap: wrap;\n\n}\n  \n.column {\n    -ms-flex: 33.33%; /* IE10 */\n    flex: 33.33%;\n    max-width: 33.33%;\n    padding: 0 6px;\n  \n}\n.column img {\n    margin-top: 10px;\n    vertical-align: middle;\n    width: 100%;\n}  \n\n.column-4 {\n    -ms-flex: 25%; /* IE10 */\n    flex: 25%;\n    max-width: 25%;\n    padding: 0 8px;\n}\n.column-4 img {\n    margin-top: 10px;\n    vertical-align: middle;\n    width: 100%;\n}  \n\n \n\n\n/* Responsive layout - makes a two column-layout instead of four columns */\n@media screen and (max-width: 800px) {\n    .column {\n      -ms-flex: 50%;\n      flex: 50%;\n      max-width: 50%;\n    }\n    .column-4 {\n        -ms-flex: 33.33%;\n        flex: 33.33%;\n        max-width: 33.33%;\n    }\n}\n  \n/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n    .column {\n      -ms-flex: 100%;\n      flex: 100%;\n      max-width: 100%;\n    }\n    .column-4 {\n        -ms-flex: 100%;\n        flex: 100%;\n        max-width: 100%;\n    }\n}\n\n\n \n\n  ";
styleInject(css_248z);

var ImageGrid = function (_a) {
    var mainSrc = _a.mainSrc, colSize = _a.colSize;
    var _b = useState('column'), columnCss = _b[0], setColumnCss = _b[1];
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
            console.log(startIndex, endIndex);
            //const endIndex = Math.min(i + colSize, mainSrc.length);
            rows.push(mainSrc.slice(startIndex, endIndex));
            startIndex = endIndex;
            endIndex += rowSize;
        }
        console.log(rows);
        return rows;
    }, [mainSrc, colSize]);
    var ImageItems = function (_a) {
        var images = _a.images;
        return (React.createElement("div", { key: images.length, className: columnCss }, images.map(function (image) { return (React.createElement("img", { key: image.id, src: image.url, alt: image.name })); })));
    };
    return (React.createElement("div", { className: "image-component" },
        React.createElement("div", { className: "row1" }, imageRows.map(function (row, rowIndex) { return (React.createElement(ImageItems, { key: rowIndex, images: row })); }))));
};

export { Button, ImageGrid };
//# sourceMappingURL=index.js.map
