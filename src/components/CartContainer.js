// eslint-disable-next-line
import React , {useContext} from "react";
import CartItem from "./CartItem";
import {ItemContext} from "./ItemContext";
import {CartContext} from "./CartContext";
import {ValueContext} from "./valContext";


const CartContainer = () => {

  const [items, setItems] = useContext(ItemContext);
  const [value, setValue] = useContext(CartContext);
  const [arr, setArr] = useContext(ValueContext);
  ////console.log(arr);
  if (items.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
      {items.map(item => {
          return <CartItem item = {item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${0}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick = { () => {setValue(0); setArr([0,0,0])}}>clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
