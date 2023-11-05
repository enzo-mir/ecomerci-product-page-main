import { shop_store } from "../stores/shop.store";
import trashIcon from "../assets/images/icon-delete.svg";
import { Wrapper } from "../styles/CartPopupStyle";

export default function CartPopup() {
  const [items, setItems] = shop_store((state) => [state.shop, state.setShop]);
  function totalPrice(p: number, q: number) {
    return (p * q).toString();
  }

  return (
    <Wrapper>
      <h3>Cart</h3>
      <hr />
      {items[0] !== null ? (
        <div>
          {items.map((item, id) => {
            return (
              <div key={id}>
                <img src={item!.image} alt="" />
                <aside>
                  <p>{item!.title}</p>
                  <p>
                    ${item!.price}.00 x {item!.quantity}
                    <strong>
                      {" "}
                      ${totalPrice(item!.price, item!.quantity)}.00
                    </strong>
                  </p>
                </aside>
                <button>
                  <img
                    src={trashIcon}
                    alt=""
                    onClick={() => setItems([null])}
                  />
                </button>
              </div>
            );
          })}

          <button>Checkout</button>
        </div>
      ) : (
        <div className="emptyCart">
          <p>Your cart is empty</p>
        </div>
      )}
    </Wrapper>
  );
}
