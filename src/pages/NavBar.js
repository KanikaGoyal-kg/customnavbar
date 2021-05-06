import React, { useState } from 'react';
import nav from './NavBarObject';
// import from '../style/navBar'

const NavBar = () => {

    const [activeTab, setActiveTab] = useState('tour');
    const data = nav[activeTab]

    const tour = (features) => {
        setActiveTab(features)
    }

    return (
        <div className="mainDiv">
            <div>
                <button className="button-style" onClick={() => tour('tour')}>Tour</button>
                <button className="button-style" onClick={() => tour('features')}>Features</button>
                <button className="button-style" onClick={() => tour('pricing')}>Pricing</button>
            </div>
            <div>
            
                {data.map((item) => (
                    <>
                    <h6 className="content-style">{item.name}</h6>
                    <h6 className="content-style">{item.app}</h6>
                    <h6 className="content-style">{item.response}</h6>
                    </>
                ))}
            
            </div>
        </div>
    )
}

export default NavBar;