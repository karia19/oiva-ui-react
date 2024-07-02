import { imageProps } from "../app.types";


export function findNextImageById(rows: imageProps[][], currentImageId: number): imageProps | null {
    const rowIndex = rows.findIndex(row => row.some(image => image.id === currentImageId));
    if (rowIndex !== -1) {
      const currentIndex = rows[rowIndex].findIndex(image => image.id === currentImageId);
  
      if (currentIndex !== -1) {
        const nextIndex = currentIndex + 1;
        if (nextIndex < rows[rowIndex].length) {
          return rows[rowIndex][nextIndex];
        } else {
          for (let i = rowIndex + 1; i < rows.length; i++) {
            if (rows[i].length > 0) {
              return rows[i][0]; 
            }
          }
          return null;
        }
      } else {
        console.error('Current image not found within the specified row');
        return null;
      }
    } else {
      console.error('Current image not found in the entire array');
      return null;
    }
    
}
export function findPastImageById(rows: imageProps[][], currentImageId: number): imageProps | null {
    const rowIndex = rows.findIndex(row => row.some(image => image.id === currentImageId));
  
    if (rowIndex !== -1) {
      const currentIndex = rows[rowIndex].findIndex(image => image.id === currentImageId);
  
      if (currentIndex !== -1) {
        // Check if there's a previous image in the current row
        const previousIndex = currentIndex - 1;
  
        // Handle cases for finding the previous image
        if (previousIndex >= 0) {
          return rows[rowIndex][previousIndex]; // Return the previous image in the same row
        } else {
          // If no previous image in the current row, iterate backwards through rows
          for (let i = rowIndex - 1; i >= 0; i--) {
            if (rows[i].length > 0) {
              return rows[i][rows[i].length - 1]; // Return the last image in the previous row
            }
          }
        }
      } else {
        console.error('Current image not found within the specified row');
        return null;
      }
    } else {
      console.error('Current image not found in the entire array');
      return null;
    }
  
    // If no past image found (current image is ID 1)
    console.log('No past image found (current image is ID 1)');
    return null;
  }
  