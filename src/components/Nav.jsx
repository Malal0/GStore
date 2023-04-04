// import { useState } from 'react'

function Nav() {

    return (
        <nav className="nav">
            <div className="links container">
                <a href="#" className="link logo"><span className="green">G</span>Store</a>
                <a href="#" className="link">Home</a>
                <a href="/pages/store.html" className="link">Store</a>
                <a href="/pages/cart.html" className="link">Cart</a>
            </div>
        </nav>
    )
}

export default Nav
