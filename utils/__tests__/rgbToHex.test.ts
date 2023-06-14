import { rgbToHex } from "../rgbToHex";

describe("rgbToHex", () => {
  test("converts an array of RGB values to a hex color string", () => {
    const rgbArray = [255, 255, 255];
    const expectedHex = "#ffffff";

    const result = rgbToHex(rgbArray);

    expect(result).toEqual(expectedHex);
  });

  test("pads single-digit hex values with a leading zero", () => {
    const rgbArray = [15, 15, 15];
    const expectedHex = "#0f0f0f";

    const result = rgbToHex(rgbArray);

    expect(result).toEqual(expectedHex);
  });
});
