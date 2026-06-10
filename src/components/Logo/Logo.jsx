import React from 'react';

import logo from "../../assets/logo.png"

const Logo = () => {
    return (
        <div className='flex items-end'>
            <img src={logo} alt="" />
            <h3 className="3xl font-bold -ms-2.5">SwiftDropBD</h3>
        </div>
    );
};

export default Logo;