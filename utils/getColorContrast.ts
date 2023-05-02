export const getTextColor = (color: string): string => {
  // Parse the color string into RGB components
  const red = parseInt(color.substr(1, 2), 16);
  const green = parseInt(color.substr(3, 2), 16);
  const blue = parseInt(color.substr(5, 2), 16);

  // Calculate the relative luminance of the color
  const luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255;

  // Return black or white depending on the luminance
  return luminance > 0.5 ? "black" : "white";
};
