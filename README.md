

oiva-ui-react

This is a React component library containing an ImageGrid component for displaying a collection of images in a responsive grid layout.

Installation

```bash
  npm install oiva-ui-react
```
Usage

Import the ImageGrid component from the library and provide it with two props:

mainSrc: An array of objects representing the images to be displayed. Each object should have the following properties:

id: A unique identifier for the image (number)
url: The URL of the image (string)
alt: Alternative text for the image (string) - important for accessibility
name (optional): A name for the image (string)
colSize (optional): The number of columns in the grid layout. Defaults to 3.
```bash
JavaScript
import React from 'react';
import ImageGrid from 'oiva-ui-react';

const images = [
  { id: 1, url: 'https://example.com/image1.jpg', alt: 'Image 1' },
  { id: 2, url: 'https://example.com/image2.jpg', alt: 'Image 2' },
  // ... more images
];

function MyComponent() {
  return (
    <ImageGrid mainSrc={images} colSize={4} />
  );
}
```
The ImageGrid component uses CSS classes to style the grid layout and individual images. You can customize these styles by creating your own CSS rules or overriding the default styles in your application's CSS.

The component uses the following CSS classes:

image-component: The main container for the image grid
row1: The container for each row of images (you can add additional rows with custom classes if needed)
column: The default CSS class for a 3-column layout
column-4: The CSS class applied when colSize is set to 4
Image Handling

The component handles cases where no images are provided by displaying a message indicating that there are "No images to display".

Responsiveness

The ImageGrid component is designed to be responsive and adjust the layout based on the available screen size.

Example

A basic example of using the ImageGrid component is provided in the Usage section.

Contributing

We welcome contributions to this project! Please see the CONTRIBUTING.md file for guidelines on how to contribute.

License

This project is licensed under the MIT License. See the LICENSE file for more details.
