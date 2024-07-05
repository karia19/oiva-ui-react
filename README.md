
## Responsive Image Grid Modal for React

**Description**

`oiva-ui-react` is a React component that provides a responsive image grid modal. It displays images in a configurable grid layout (3 or 4 columns) and allows for modal viewing of individual images when clicked. The layout adapts automatically to different screen sizes, ensuring a seamless user experience across devices. This update includes the ability to display the image name within the modal.

**Key Features**

- Responsive image grid layout (2, 3 or 4 columns)
- Modal view for individual images with image name display
- Customizable column size (2, 3 or 4)
- Easy integration with React projects

**Installation**

Install the library using npm or yarn:

```bash
npm install oiva-ui-react
```

or

```bash
yarn add oiva-ui-react
```

**Usage**

Import the `ImageGridModal` component and use it in your React application:

```javascript
import React from 'react';
import { ImageGridModal } from 'oiva-ui-react';

const testImages = [
  { id: 1, url: 'https://picsum.photos/id/134/1200/1000', name: 'Image 1', alt: 'Image 1 description' },
  { id: 2, url: 'https://picsum.photos/id/42/1100/800', name: 'Image 2', alt: 'Image 2 description' },
  // ... (more images)
];

function MyComponent() {
  return (
    <ImageGridModal
      colSize={3} // Number of columns (2, 3 or 4)
      mainSrc={testImages}
      showModal={true} // Set to true to show the modal
    />
  );
}
```

**Props**

| Prop            | Type      | Description                                        | Default |
|-----------------|-----------|-----------------------------------------------------|---------|
| colSize          | number     | Number of columns in the grid layout (2,3 or 4)         | 3      |
| mainSrc          | array      | Array of image objects with properties:               |         |
|                  |           | - `id` (unique identifier)                          |         |
|                  |           | - `url` (image URL)                                 |         |
|                  |           | - `name` (optional: image name)                     |         |
|                  |           | - `alt` (alternative text for accessibility)         |         |
| showModal        | boolean   | Whether to show the modal view initially (optional) | true    |

**Image Object Example**

```javascript
const testImages = [
  { id: 1, url: 'https://picsum.photos/id/134/1200/1000', name: 'Image 1', alt: 'Image 1 description' },
  // ... (more images)
];
```

**Development**

1. Clone the repository: `git clone https://github.com/your-username/oiva-ui-react.git`
2. Install dependencies: `npm install` or `yarn install`
3. Start the development server: `npm start` or `yarn start` (This will run the tests and build the library for development)
4. Make changes to the code in the `src` directory.
5. The development server will automatically recompile the library when you save changes.

**Contributing**

We welcome contributions to this project! Please see the `CONTRIBUTING.md` file for guidelines on how to contribute.

**License**

This project is licensed under the MIT License. See the `LICENSE` file for details.
