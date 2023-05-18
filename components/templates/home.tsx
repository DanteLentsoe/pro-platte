import {
  ColorPickerCustom,
  EyeDropper,
  ColorPalette,
  SideBar
} from "@/components/organisms";
import { useColor } from "@/context";
import { useSelectedImage } from "@/hooks/useSelectedImage";
import { UploadFile } from "../atoms";

const HomePage = () => {
  const { color } = useColor();
  const { colors, selectedImage, handleFileUpload, imageRef } =
    useSelectedImage();
  return (
    <SideBar>
      <div className="flex md:flex-column flex-row w-full">
        <ColorPickerCustom
          colors={colors}
          imageRef={imageRef}
          selectedImage={selectedImage}
        />
        <div>
          <EyeDropper />
          <div className="mt-4 mb-4 ml-4">
            <UploadFile onChange={handleFileUpload}>
              {selectedImage ? "Change Image" : "Upload Image"}
            </UploadFile>
          </div>
        </div>
      </div>

      <ColorPalette baseColor={color} />
    </SideBar>
  );
};

export default HomePage;
