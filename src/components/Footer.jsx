import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { PiThreadsLogoFill } from "react-icons/pi";
export function Footer() {
    return (
        <>
        <div className="max-w-[1200px] mx-[auto] py-4 hidden lg:block">
            <div className="  grid grid-cols-[40%_60%]  ">
                {/* left side */}

                <div className=" w-full ">
                    <h1 className="text-[18px] font-bold ml-[33px] " > Useful Links</h1>
                    <div className=" grid grid-cols-[20%_20%_20%] my-5 justify-center text-[14px]">
                        <ul className="" >
                            <li>About</li>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>Press</li>
                            <li>Lead</li>
                            <li>Value</li>
                        </ul>
                        <ul>
                            <li>Privacy</li>
                            <li>Terms</li>
                            <li>FAQs</li>
                            <li>Security</li>
                            <li>Mobile</li>
                            <li>Contact</li>
                        </ul>
                        <ul>
                            <li>Partner</li>
                            <li>Franchise</li>
                            <li>Seller</li>
                            <li>Warehouse</li>
                            <li>Deliver</li>
                            <li>Resources</li>
                        </ul>





                    </div>
                </div>



                {/* left side end */}


                {/* right side start */}
                <div className="  w-full text-[15px]" >
                    <h1 className="text-[18px] font-bold"> Categories
                    </h1>
                    <div className=" w-full grid grid-cols-[26%_26%_26%] justify-between my-5  ">
                        <ul className="">
                            <li>Vegetables & Fruits</li>
                            <li>Cold Drinks & Juices</li>
                            <li>Bakery & Biscuits</li>
                            <li>Dry Fruits, Masala & Oil</li>
                            <li>Paan Corner</li>
                            <li>Pharma & Wellness</li>
                            <li>Vegetables & Fruits</li>
                            <li>Cold Drinks & Juices</li>
                            <li>Bakery & Biscuits</li>
                            <li>Dry Fruits, Masala & Oil</li>
                            <li>Paan Corner</li>
                            <li>Pharma & Wellness</li>
                        </ul>
                        <ul className="">
                            <li>Bakery & Biscuits</li>
                            <li>Dry Fruits, Masala & Oil</li>
                            <li>Paan Corner</li>
                            <li>Pharma & Wellness</li>
                            <li>Dry Fruits, Masala & Oil</li>
                            <li>Paan Corner</li>
                            <li>Pharma & Wellness</li>
                            <li>Vegetables & Fruits</li>
                            <li>Vegetables & Fruits</li>
                            <li>Cold Drinks & Juices</li>
                            <li>Bakery & Biscuits</li>
                            <li>Dry Fruits, Masala & Oil</li>
                            <li>Paan Corner</li>
                        </ul>
                        <ul className="">
                            <li>Vegetables & Fruits</li>
                            <li>Cold Drinks & Juices</li>
                            <li>Bakery & Biscuits</li>
                            <li>Dry Fruits, Masala & Oil</li>
                            <li>Paan Corner</li>
                            <li>Pharma & Wellness</li>
                            <li>Vegetables & Fruits</li>
                            <li>Vegetables & Fruits</li>
                            <li>Cold Drinks & Juices</li>
                            <li>Bakery & Biscuits</li>
                            <li>Dry Fruits, Masala & Oil</li>
                            <li>Paan Corner</li>
                        </ul>

                    </div>
                </div>



                {/* right side end */}


                <div className="w-full flex justify-end text-[13px] mt-5 "><h1 className="">© Blink Commerce Private Limited, 2016-2025</h1></div>
                <div className="w-full grid grid-cols-[16%_14%_14%_5%_5%_5%_5%_5%] gap-4 mt-4 ">  
                    <div className=" ml-2   ">Download App</div>
                    <div className="">
                        <img src="https://blinkit.com/d61019073b700ca49d22.png" alt="" />
                    </div>
                    <div className="">
                        <img src="https://blinkit.com/8ed033800ea38f24c4f0.png" alt="" />
                    </div>
                    <div className=" text-[30px]">
                    <IoLogoFacebook/>
                    </div>
                    <div className=" text-[30px]">
                    <FaSquareXTwitter />
                    </div>
                    <div className=" text-[30px]">
                    <FaSquareInstagram />
                    </div>
                    <div className=" text-[30px]">
                    <FaLinkedin />
                    </div>
                    <div className=" text-[30px]">
                    <PiThreadsLogoFill />
                    </div>
                </div>
            </div>
            <div className="mt-5">“Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.</div>
            </div>


        </>
    )
}