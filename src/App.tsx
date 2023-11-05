import { HeaderStyle, MainStyle } from "./styles/AppStyle";
import shopBtn from "./assets/images/icon-cart.svg";
import avatar from "./assets/images/image-avatar.png";
import navbarBtn from "./assets/images/icon-menu.svg";
import image1_thumbail from "./assets/images/image-product-1-thumbnail.jpg";
import CartPopup from "./components/CartPopup";
import { shop_store } from "./stores/shop.store";
import { useState } from "react";
import LightBox from "./components/LightBox";
import closeNavBar from "./assets/images/icon-close.svg";
import WrapperImages from "./components/WrapperImages";
import { lightbox_store } from "./stores/lightboxShow_store";
import { Overlay } from "./components/Overlay";

function App() {
  const [quantity, setQuantity] = useState<number>(0);
  const [showPopupCart, setShowPopupCart] = useState<boolean>(false);
  const showLightBox = lightbox_store((state) => state.showLightBox);
  const [items, setItems] = shop_store((state) => [state.shop, state.setShop]);
  const [showNavBar, setShowNavBar] = useState<boolean>(false);

  function addToCart() {
    setItems([
      {
        title: "Fall Limited Edition Sneakers",
        price: 125,
        quantity: items[0]?.quantity ? quantity + items[0].quantity : quantity,
        image: image1_thumbail,
      },
    ]);
  }

  return (
    <>
      <HeaderStyle>
        <nav className={showNavBar ? "display" : ""}>
          <span>
            <button onClick={() => setShowNavBar(true)}>
              <img src={navbarBtn} alt="" />
            </button>
          </span>
          <ul>
            <li>
              <a href="#">
                <h1>sneakers</h1>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <button onClick={() => setShowNavBar(false)}>
                <img src={closeNavBar} alt="" />
              </button>
            </li>
            <li>
              <a href="">Collections</a>
            </li>
            <li>
              <a href="">Men</a>
            </li>
            <li>
              <a href="">Women</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
          <ul>
            <li>
              <button onClick={() => setShowPopupCart(!showPopupCart)}>
                <span>{items[0]?.quantity}</span>
                <img src={shopBtn} alt="Shop button" />
              </button>
              {showPopupCart ? <CartPopup /> : null}
            </li>
            <li>
              <a href="">
                <img src={avatar} alt="Avatar Profil" />
              </a>
            </li>
          </ul>
        </nav>
      </HeaderStyle>
      <MainStyle>
        {showLightBox ? <LightBox /> : null}
        <WrapperImages />
        <section>
          {showNavBar ? <Overlay onClick={() => setShowNavBar(false)} /> : null}
          <b>SNEAKERS COMPAGNY</b>
          <h2>Fall Limited Edition Sneakers</h2>
          <p>
            These low-profile sneakers are your perfect casusal wear companion.
            Featuring a durable rubbler outer sole, they'll whithstand
            everything the weather can offer.
          </p>
          <div className="price">
            <strong>$125.00</strong>
            <b>50%</b>
            <sub>$250.00</sub>
          </div>
          <div className="buySection">
            <div className="quantity">
              <button
                onClick={(e) =>
                  quantity > 0 ? setQuantity(quantity - 1) : e.preventDefault()
                }
              >
                -
              </button>
              <strong>{quantity}</strong>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button
              onClick={(e) => (quantity ? addToCart() : e.preventDefault())}
            >
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="white"
                  fillRule="nonzero"
                />
              </svg>
              Add to cart
            </button>
          </div>
        </section>
      </MainStyle>
    </>
  );
}

export default App;
