import React from 'react';
import logo from "../../../assets/logo.svg"

const Navbar = () => {
    return (
        <div className="navbar flex justify-between lg:md:mt-[40px] lg:md:mb-[59px] items-center">
            <div className="logo flex items-center lg:md:ml-[30px]">
                <img src={logo} className="w-[45px] h-[45px]" alt="" />
                <h2 className="lg:md:text-[14px] font-bold text-[#344055] ml-[10px]">Platform</h2>
            </div>
            <div className="list-items">
                <ul>
                    <li className="lg:md:text-[14px] font-bold text-[#0074E8] lg:md:mr-[25px]">
                        Back to CM.com
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;