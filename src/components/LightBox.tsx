import WrapperImages from "./WrapperImages";
import { lightbox_store } from "../stores/lightboxShow_store";
import { WrapperLightBox } from "src/styles/LightBoxStyle";

export default function LightBox() {
  const setShowLightBox = lightbox_store((state) => state.setShowLightBox);
  return (
    <WrapperLightBox
      onClick={() => {
        setShowLightBox(false);
      }}
    >
      <WrapperImages />
    </WrapperLightBox>
  );
}
