import { useState, useEffect, useRef, ChangeEvent } from "react";
import ColorThief from "colorthief";
import { useLocalStorageState } from "./useLocalStorage";

export const useSelectedImage = () => {
  const [colors, setColors] = useLocalStorageState<number[][]>("colors", []);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Load selectedImage from local storage on component mount
  useEffect(() => {
    const storedSelectedImage = localStorage.getItem("selectedImage");
    if (storedSelectedImage) {
      setSelectedImage(storedSelectedImage);
    }
  }, []);

  // Save selectedImage to local storage whenever it changes
  useEffect(() => {
    if (selectedImage) {
      localStorage.setItem("selectedImage", selectedImage);
    } else {
      localStorage.removeItem("selectedImage");
    }
  }, [selectedImage]);

  const imageRef = useRef<HTMLImageElement | null>(null);

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result as string);
      const img = new Image();
      img.onload = () => {
        const colorThief = new ColorThief();
        const colorPalette = colorThief.getPalette(img, 10);
        setColors(colorPalette);
      };
      img.src = reader.result as string;
    };

    reader.readAsDataURL(file);
  };

  return { colors, selectedImage, handleFileUpload, imageRef };
};
