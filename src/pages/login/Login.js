import React from 'react';
import Man from "../../assets/man.jpg";
import "./Login.css"

const Login = () => {
    return (
        <div>
            <div class="main">
                <div class="flex mx-auto items-center justify-center rounded-[10px] lg:md:shadow-[#6361613d] lg:md:shadow-lg bg-[#FFFF] lg:w-[900px]">
                    <div className="lg:mr-[80px] landing">
                        <figure class="hover-img rounded-l-xl lg-h-[476px] ">
                            <img src={Man} alt="man" className='lg:md:h-[476px]' />
                            <figcaption>
                                <a href="https://www.cm.com/register/" rel="noreferrer" target="_blank" className="rounded-3xl pt-[4px] px-4 border-2 border-[#ffffff] text-[#ffffff] text-[14px] font-normal hover:bg-[#fff] hover:text-[#2C3CEA] flex justify-center items-center">Sign Up</a>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="login-break mx-auto px-auto flex flex-col items-center justify-start ">
                        <h2 class="text-[40px] font-medium mb-[56px] lg:md:ml-0 ml-[-70%] text-[#101E1E] text-start">Sign In</h2>

                        <div className="">
                        <div class="form-control w-full max-w-lg lg:md:mb-[16px]">
                            <label class="label">
                                <span class="label-text text-[14px] font-normal pl-[8px]">Language</span>
                            </label>
                            <br />
                            <select class="select select-bordered inline-block  login-fields py-[8px] pl-[16px] resize-y bg-[#fff] border-[1px] rounded-[20px] text-[0.875rem] font-medium min-h-[40px] border-slate-400 lg:w-[270px] input-size mt-[-22px]">
                                    <option selected>English</option>
                                    <option>Chinese</option>
                                    <option>Bangla</option>
                                    <option>Hindi</option>
                                    <option>Tamil</option>
                                    <option>Espaniol</option>
                                    <option>Arabic</option>
                            </select>
                        </div>
                        <div class="form-control max-w-lg w-full ">
                            <label class="label">
                                <span class="label-text pl-[8px]">Username or email address</span>
                            </label>
                            <input type="text" placeholder="Username or email address" class="inline-block  login-fields py-[8px] pl-[16px] resize-y bg-[#fff] border-[1px] rounded-[20px] text-[0.875rem] font-medium min-h-[40px] border-slate-400 lg:w-[270px] input-size" />
                        </div>
                        <div className="flex flex-col justify-center items-center mx-auto">
                            <button type="submit" className="mx-auto continue-btn hover:drop-shadow-xl hover:shadow-black mt-[32px]">Next</button>
                        </div>
                        
                        <div className="lg:md:hidden block mx-auto">
                        <div className="flex justify-center items-center mb-[80px] mx-auto">
                            <p type="submit" className="text-[#000000] mt-[32px]">Don't have an acccount? </p>
                            <a href="https://www.cm.com/register/" rel="noreferrer" target="_blank" className='text-[#0658a5] underline 
                            mb-[-30px]  ml-[5px]'>Sign Up</a>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;