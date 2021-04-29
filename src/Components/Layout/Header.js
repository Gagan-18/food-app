import React, { Fragment } from 'react';
import styled from 'styled-components';
import tandooriImage from '../Images/Tandoori.jpg'
import CartButton from './CartButton';

const Header = () => {
    return (
        <Fragment>
            <Heading>
                <h1>Tandoor Cave</h1>
                <CartButton />
            </Heading>
            <Image>
                <img src={tandooriImage} />
            </Image>
        </Fragment>
    );
};

export default Header;

const Heading = styled.div`
h1 {
    color: rgb(61, 4, 4);
    font: 80px Brush Script MT;
}

{
    position: fixed;
    width: 100%;
    height: 5rem;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 10;
    
  }
`;

const Image =styled.div`
{
    width: 100%;
    height: 15rem;
    z-index: 0;
    overflow: hidden;
  }
`;