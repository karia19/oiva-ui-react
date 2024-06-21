import React, { useState, useEffect } from 'react';

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

var css_248z = ".image-component {\n    padding-top: 60px;\n    padding-bottom: 100px;\n} \n.row1 {\n    display: -ms-flexbox; /* IE10 */\n    display: flex;\n    -ms-flex-wrap: wrap; /* IE10 */\n    flex-wrap: wrap;\n\n}\n  \n  /* Create four equal columns that sits next to each other */\n.column {\n    -ms-flex: 30%; /* IE10 */\n    flex: 25%;\n    max-width: 100%;\n    padding: 0 10px;\n}\n  \n.column img {\n    margin-top: 15px;\n    vertical-align: middle;\n    width: 100%;\n}\n  \n/* Responsive layout - makes a two column-layout instead of four columns */\n@media screen and (max-width: 800px) {\n    .column {\n      -ms-flex: 50%;\n      flex: 50%;\n      max-width: 50%;\n    }\n}\n  \n/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n    .column {\n      -ms-flex: 100%;\n      flex: 100%;\n      max-width: 100%;\n    }\n}\n\n\n \n\n  ";
styleInject(css_248z);

var TreeColumnImageGrid = function (_a) {
    var firstRow = _a.firstRow, secondRow = _a.secondRow, thirdRow = _a.thirdRow;
    return (React.createElement("div", { className: "image-component" },
        React.createElement("div", { className: "row1" },
            React.createElement("div", { className: "column", style: { cursor: "pointer" } }, firstRow.map(function (x) {
                return React.createElement("img", { key: x.id, src: x.url, alt: x.alt });
            })),
            React.createElement("div", { className: "column", style: { cursor: "pointer" } }, secondRow.map(function (x) {
                return React.createElement("img", { key: x.id, src: x.url, alt: x.alt });
            })),
            React.createElement("div", { className: "column", style: { cursor: "pointer" } }, thirdRow.map(function (x) {
                return React.createElement("img", { key: x.id, src: x.url, alt: x.alt });
            })))));
};
var ImageGrid = function (_a) {
    var mainSrc = _a.mainSrc, colSize = _a.colSize;
    if (!mainSrc || mainSrc.length === 0) {
        return React.createElement("div", null, "No images to display"); // Example handling
    }
    console.log(mainSrc);
    var _b = useState([]), underFive = _b[0], setUnderFive = _b[1];
    var _c = useState([]), overFive = _c[0], setOverFive = _c[1];
    var _d = useState([]), rest = _d[0], setRest = _d[1];
    useEffect(function () {
        var imageSize = Math.floor(mainSrc.length / colSize);
        setUnderFive(mainSrc.filter(function (x) { return x.id <= imageSize; }));
        setOverFive(mainSrc.filter(function (x) { return x.id > imageSize && x.id <= imageSize * 2; }));
        setRest(mainSrc.filter(function (x) { return x.id > imageSize * 2; }));
        console.log("this is from usestate", mainSrc, colSize);
    }, [mainSrc, colSize]);
    return (React.createElement("div", null,
        React.createElement("p", null, "This is image grid"),
        React.createElement(TreeColumnImageGrid, { firstRow: underFive, secondRow: overFive, thirdRow: rest })));
};

export { Button, ImageGrid };
//# sourceMappingURL=index.js.map
