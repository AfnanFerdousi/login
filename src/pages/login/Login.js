import React from 'react';
import Man from "../../assets/man.jpg";
import "./Login.css"

const Login = () => {
    return (
        <div>
            <div class="max-h-screen">
                <div class="flex mx-auto items-center justify-center rounded">
                    <div className="max-w-sm lg:md:mr-[80px]">
                        <img src={Man} alt="man" className='z-10'/>
                    <div className='overlay'></div>
                    </div>
                    <div>
                        <h1 class="text-[40px] font-medium lg:md:mb-[56px] text-[#101E1E]">Sign In</h1>

                        <div class="form-control w-full max-w-xs lg:md:mb-[16px]">
                            <label class="label">
                                <span class="label-text text-[14px] font-normal pl-[8px]">Language</span>
                            </label>
                            <br/>
                            <select class="select select-bordered border border-slate-400 rounded-full lg:md:w-[270px] lg:md:h-[40px] pl-[8px] pr-[10px] focus:border-[#80B9F3] mt-[-22px]">
                                <option selected>Star Wars</option>
                                <option>Harry Potter</option>
                                <option>Lord of the Rings</option>
                                <option>Planet of the Apes</option>
                                <option>Star Trek</option>
                            </select>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text pl-[8px]">Username or email address</span>
                            </label>
                            <input type="text" placeholder="Username or email address" class="input input-bordered input-info w-full max-w-xs border border-slate-400 rounded-full lg:md:w-[270px] lg:md:h-[40px] focus:border-[#80B9F3] pl-[8px] " />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;