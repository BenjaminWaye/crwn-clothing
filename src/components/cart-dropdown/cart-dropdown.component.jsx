import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import Styled from "styled-components";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, history, dispatch, className }) => (
  <div className={className}>
    {cartItems.length ? (
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    ) : (
      <span className="empty-message">Your cart is empty</span>
    )}
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const StyledCartDropdown = Styled(CartDropdown)`
 position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 80px;
  right: 60px;
  z-index: 5;

  &.hidden {
    display: none;
  }

  .empty-message {
    font-size: 18px;
    margin: 50px auto;
  }

  .cart-items {
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  button {
    margin-top: auto;
  }
`;

export default withRouter(connect(mapStateToProps)(StyledCartDropdown));
