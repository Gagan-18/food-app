import styled from "styled-components";
import CartImage from '../Images/Cart.png'
const CartButton = () => {
    return (
        <div>
            <Button>CART <img src={CartImage} /></Button>
        </div>
    );
};

export default CartButton;

const Button = styled.button`
 {
    cursor: pointer;
    font: 17px Helvetica;
    border: none;
    background-color: rgb(216, 56, 56);
    color: white;
    padding: 0.2rem 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    font-weight: bold;
  }
  
  &:hover,
  &:active {
    background-color: rgb(185, 47, 47);
  }`;

