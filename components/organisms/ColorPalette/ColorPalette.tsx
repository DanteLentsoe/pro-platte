import { useState } from "react";

interface Props {
  baseColor: string;
}

export const ColorPalette = ({ baseColor }: Props) => {
  const [palette, setPalette] = useState<string[]>([]);
  const [complementary, setComplementary] = useState<string | null>(null);

  const generatePalette = (): void => {
    const hex = baseColor?.replace("#", "");
    const r = parseInt(hex?.substring(0, 2), 16);
    const g = parseInt(hex?.substring(2, 4), 16);
    const b = parseInt(hex?.substring(4, 6), 16);

    const newPalette: string[] = [];

    // Generate shades of the base color
    for (let i = 1; i <= 10; i++) {
      const shade = `#${Math.floor(r * i * 0.1)
        .toString(16)
        .padStart(2, "0")}${Math.floor(g * i * 0.1)
        .toString(16)
        .padStart(2, "0")}${Math.floor(b * i * 0.1)
        .toString(16)
        .padStart(2, "0")}`;
      newPalette.push(shade);
    }

    // Calculate complementary color
    const complementaryColor =
      "#" +
      (0xffffff ^ parseInt(hex, 16))
        .toString(16)
        .padStart(6, "0")
        .toUpperCase();

    setPalette(newPalette);
    setComplementary(complementaryColor);
  };

  const handleColorClick = (color: string): void => {
    console.log(`Selected color: ${color}`);
    // You can replace this with any other functionality to use the selected color
  };

  return (
    <div>
      <input
        type="color"
        value={baseColor}
        onChange={(e) => setPalette([])}
        placeholder="Change Color Palette"
      />
      <button onClick={generatePalette}>Generate Palette</button>
      {palette.length > 0 && (
        <>
          <h3>Palette</h3>
          <div style={{ display: "flex" }}>
            {palette.map((color) => (
              <div
                key={color}
                onClick={() => handleColorClick(color)}
                style={{
                  backgroundColor: color,
                  width: "50px",
                  height: "50px",
                  cursor: "pointer",
                  margin: "0.5rem",
                }}
              />
            ))}
          </div>
          <h3>Complementary Color</h3>
          <div
            style={{
              backgroundColor: complementary as string,
              width: "50px",
              height: "50px",
              margin: "0.5rem",
            }}
          />
          <h3>Recommendations</h3>
          <ul>
            <li>
              Use the base color as a background color, and the lighter shades
              as text or accent colors
            </li>
            <li>
              Use the darker shades for backgrounds or borders, and the
              complementary color as an accent color
            </li>
          </ul>
        </>
      )}
    </div>
  );
};
