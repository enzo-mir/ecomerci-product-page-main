import { images_store } from "../stores/images.store";
import images1 from "../assets/images/image-product-1.jpg";
import images2 from "../assets/images/image-product-2.jpg";
import images3 from "../assets/images/image-product-3.jpg";
import images4 from "../assets/images/image-product-4.jpg";
import image1_thumbail from "../assets/images/image-product-1-thumbnail.jpg";
import image2_thumbail from "../assets/images/image-product-2-thumbnail.jpg";
import image3_thumbail from "../assets/images/image-product-3-thumbnail.jpg";
import image4_thumbail from "../assets/images/image-product-4-thumbnail.jpg";
import { lightbox_store } from "../stores/lightboxShow_store";

export default function WrapperImages() {
  const [imageUrl, setImagUrl] = images_store((state) => [
    state.imageUrl,
    state.setImageUrl,
  ]);
  const setShowLightBox = lightbox_store((state) => state.setShowLightBox);
  const imagesTable = [images1, images2, images3, images4];

  return (
    <article onClick={(e) => e.stopPropagation()}>
      <button
        tabIndex={1}
        onClick={() =>
          setImagUrl(
            imagesTable.indexOf(imageUrl) === 0
              ? imagesTable[3]
              : imagesTable[imagesTable.indexOf(imageUrl) - 1]
          )
        }
      >
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            stroke-width="3"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </button>

      <img
        src={imageUrl}
        alt=""
        tabIndex={0}
        onClick={() => setShowLightBox(true)}
      />
      <div className="thumbailImages">
        <div>
          <img
            src={image1_thumbail}
            alt=""
            onClick={() => setImagUrl(images1)}
            className={imageUrl === images1 ? "current" : ""}
          />
        </div>
        <div>
          <img
            src={image2_thumbail}
            alt=""
            onClick={() => setImagUrl(images2)}
            className={imageUrl === images2 ? "current" : ""}
          />
        </div>
        <div>
          <img
            src={image3_thumbail}
            alt=""
            onClick={() => setImagUrl(images3)}
            className={imageUrl === images3 ? "current" : ""}
          />
        </div>
        <div>
          <img
            src={image4_thumbail}
            alt=""
            onClick={() => setImagUrl(images4)}
            className={imageUrl === images4 ? "current" : ""}
          />
        </div>
      </div>
      <button
        tabIndex={2}
        onClick={() =>
          setImagUrl(
            imagesTable.indexOf(imageUrl) === 3
              ? imagesTable[0]
              : imagesTable[imagesTable.indexOf(imageUrl) + 1]
          )
        }
      >
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            stroke-width="3"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </button>
    </article>
  );
}
