import React from 'react';
import logo from "../../../assets/logo.svg"
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar flex justify-between mt-[40px] lg:md:mb-[59px] items-center">
            <div className="logo flex items-center ml-[30px]">
                <img src={logo} className="w-[45px] h-[45px]" alt="" />
                <h2 className="lg:md:text-[14px] font-bold text-[#344055] ml-[10px] lg:md:block hidden">Platform</h2>
            </div>
            <div className="list-items">
                <ul className='nav'>
                    <li className="lg:md:text-[14px] font-bold text-[#0074E8] mr-[25px]">
                        Back to CM.com
                    </li>
                </ul>
                <div className='country'>
                <img src={logo} className="w-[30px] h-[30px] mr-[25px]" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;