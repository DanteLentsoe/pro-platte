/**
 * Convert an array of RGB values to a hex color string.
 * @param rgbArray - An array of three numbers representing an RGB color.
 * @returns A string representing the color in hex format.
 */
export const rgbToHex = (rgbArray: number[]): string => {
  return (
    "#" +
    rgbArray
      .map((value) => {
        const hex = value.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
};
