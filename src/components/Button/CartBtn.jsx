import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const CartBtn = () => {
    const data = useRef();
    // we get a state for addItems
    const state = useSelector((state) => state.addItem);
    return (
        <>
            <NavLink to='/cart' className="btn btn-outline-primary ms-2">
                <span ref={data} className="fa fa-shopping-cart me-1">Cart ({state.length})</span>
            </NavLink>
        </>
    );
};

export default CartBtn;