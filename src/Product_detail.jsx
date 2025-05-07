import React, { useEffect, useState } from 'react'
import { FaCaretDown } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Footer } from './components/Footer';
import Header from './components/Header';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Product_detail() {

const productId= useParams().id



const [getProductId,setProdctId]=useState([])
const singleProduct=()=>{
    axios.get(`https://dummyjson.com/products/${productId}`)
     .then((ress)=>{
        setProdctId(ress.data);
        
     })
     .catch((error)=>{
        console.log(error);
        
     })
}
useEffect(()=>{
    singleProduct()
},[])

    








    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    };




    return (
        <>
        <Header/>
            <div className='w-full grid lg:grid-cols-[55%_45%] mb-3 px-8 '>

                {/* left part start */}
                <div className=' leftSide lg:border-r lg:border-b border-[#666B74] lg:block hidden overflow-y-scroll h-[96vh] '>

                    {/* single image part */}

                    <div className='w-[80%] border-l border-b border-r mx-[auto] py-4 mb-7 border-[#666B74]' >
                        <div className='  flex justify-center'>
                            <img src={getProductId.thumbnail} alt="" />
                        </div>
                        <div className='w-[60%]  grid grid-cols-7 gap-3 mx-[auto] '>
                            <div className='shadow-[0px_0px_2px_0px] rounded-[4px] '>
                                <img src= {getProductId.thumbnail} alt="" className='rounded-[10px] ' />
                            </div>
                            

                        </div>
                    </div>
                    <div className=' hidden lg:block w-[80%]  mx-[auto]   '>
                        <h1 className='text-[24px] ' >Product Details</h1>
                        <h1 className='font-bold text-[15px] mt-2'>Type</h1>
                        <h1 className='text-[#666B74]'>Lighter</h1>
                        <h1 className='font-bold text-[15px] mt-2'>Unit</h1>
                        <h1 className='text-[#666B74]'>1 piece</h1>
                        <h1 className='font-bold text-[15px] mt-2'>Key Features</h1>
                        <h1 className='text-[#666B74]'>Flint system Lighter.</h1>
                        <h1 className='text-[#666B74]'>Adjustable Flame.</h1>
                        <h1 className='text-[#666B74]'>Refillable.</h1>
                        <h1 className='text-[#666B74]'>Child-resistant - incorporates a high-force system. </h1>
                        <h1 className='text-[#666B74]'>Colour - Assorted .</h1>
                        <h1 className='font-bold text-[15px] mt-2'>Shelf Life</h1>
                        <h1 className='text-[#666B74]'>60 months</h1>
                        <h1 className='font-bold text-[15px] mt-2'>Return Policy</h1>
                        <h1 className='text-[#666B74]'>The product is non-returnable. For a damaged, defective, expired or incorrect item, you can request a replacement within 24 hours of delivery.
                            In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition.
                        </h1>
                        <h1 className='font-bold text-[15px] mt-2'>Storage Tips</h1>
                        <h1 className='text-[#666B74]'>Store in a cool and dry place.</h1>
                        <h1 className='font-bold text-[15px] mt-2'>Manufacturer's Name and Address</h1>
                        <h1 className='text-[#666B74]'>Rhythm Imports - Village Ullawas Sector 62 Gurgaon</h1>
                        <h1 className='font-bold text-[15px] mt-2'>Marketed By</h1>
                        <h1 className='text-[#666B74]'>Rhythm Imports - Village Ullawas Sector 62 Gurgaon</h1>
                        <h1 className='font-bold text-[15px] mt-2'>Country of Origin</h1>
                        <h1 className='text-[#666B74]'>China</h1>
                        <h1 className='font-bold text-[15px] mt-2'>Customer Care Details</h1>
                        <h1 className='text-[#666B74]'>Email: info@blinkit.com</h1>
                        <h1 className='font-bold text-[15px] mt-2'>Seller</h1>
                        <h1 className='text-[#666B74]'>ASVAH RETAIL PRIVATE LIMITED</h1>
                        <h1 className='font-bold text-[15px] mt-2'>Description</h1>
                        <h1 className='text-[#666B74]'>Presenting you Stash-Pro's Flint Lighter. These Lighters are designed for those who value excellent craftsmanship, making your everyday rolling routine more enjoyable. Colour May Vary for the product.
                        </h1>
                        <h1 className='font-bold text-[15px] mt-2'>Disclaimer</h1>
                        <h1 className='text-[#666B74]'>Presenting you Stash-Pro's Flint Lighter. These Lighters are designed for those who value excellent craftsmanship, making your everyday rolling routine more enjoyable. Colour May Vary for the product.
                        </h1>
                    </div>

                </div>

                {/* left part end */}

                {/* right part start */}
                <div className='rightSide lg:block hidden border-b border-[#666B74]  p-4'>
                    <div className='w-[80%] ml-8   mt-8'>
                        <div>
                            <ul className='flex gap-1 text-[14px] cursor-pointer font-bold'>
                                <Link to={'/'}>
                                <li>
                                    Home /
                                </li>
                                </Link>
                                <li>
                                    Lighters & Accessories /
                                </li>
                                <li className='text-[#666B74]'>
                                    Stash Pro Jetty Windproof Lighter
                                </li>
                            </ul>
                        </div>
                        <div className='mt-2 text-[26px] font-bold'>Stash Pro Jetty Windproof Lighter</div>
                        <div className=' w-[12%] border grid grid-cols-[23%_auto] items-center bg-[]'>
                            <div><img src="https://cdn.grofers.com/assets/eta-icons/15-mins.png" alt="" /></div>
                            <div>8 Min</div>
                        </div>
                        <div className='text-[22px] text-[Okra-Medium - 400] text-[green] flex items-center mt-2 border-b  border-black p-2'>View all by Stash Pro <FaCaretDown className='rotate-270 text-[15px]' />
                        </div>
                        <div className='grid grid-cols-[80%_auto] items-center  justify-between'>
                            <div>
                                <p>1 piece</p>
                                <p className='text-[17px]'>MRP <span className='font-bold'> ₹50</span></p>
                                <p className='text-[12px]'>(Inclusive of all taxes)</p>
                            </div>
                            <div><button className='bg-[#F7FFF9] border p-[5px_16px] rounded-[5px]'>ADD</button></div>
                        </div>
                        <div className=' mt-8 text-[18px] font-bold'>Why shop from blinkit?</div>
                        <div className='grid grid-cols-[11%_auto] gap-3  mt-4 p-2'>
                            <div className=''><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/10_minute_delivery.png" alt="" /></div>
                            <div className='mt-4'>
                                <p className='text-[15px]'>Superfast Delivery</p>
                                <p className='text-[13px]'>Get your order delivered to your doorstep at the earliest from dark stores near you.</p>
                            </div>
                            <div className=''><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Best_Prices_Offers.png" alt="" /></div>
                            <div className=''>
                                <p className='text-[15px]'>
                                    Best Prices & Offers</p>
                                <p className='text-[13px]'>Get your order delivered to your doorstep at the earliest from dark stores near you.</p>
                            </div>
                            <div className=''><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Wide_Assortment.png" alt="" /></div>
                            <div className=''>
                                <p className='text-[15px]'>Wide Assortment</p>
                                <p className='text-[13px]'>Choose from 5000+ products across food, personal care, household & other categories</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right part end */}





                {/* for mobile */}



            </div>
            <div className='rightSide lg:hidden w-[97vw]'>
                <div>
                    <Slider {...settings} >
                        <div className=' shadow-[0px_0px_1px_0px] m-1  flex ' >

                            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/2d2f35df-ff60-49c2-976c-226c65a135b6.jpg?ts=1739515697" className=' mx-[auto]'/>
                            

                        </div>
                        <div className=' shadow-[0px_0px_1px_0px] m-1  flex ' >

                            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/2d2f35df-ff60-49c2-976c-226c65a135b6.jpg?ts=1739515697" className=' mx-[auto]'/>
                            

                        </div>
                        <div className=' shadow-[0px_0px_1px_0px] m-1  flex ' >

                            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/2d2f35df-ff60-49c2-976c-226c65a135b6.jpg?ts=1739515697" className=' mx-[auto]'/>
                            

                        </div>
                        <div className=' shadow-[0px_0px_1px_0px] m-1  flex ' >

                            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/2d2f35df-ff60-49c2-976c-226c65a135b6.jpg?ts=1739515697" className=' mx-[auto]'/>
                            

                        </div>
                        <div className=' shadow-[0px_0px_1px_0px] m-1  flex ' >

                            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/2d2f35df-ff60-49c2-976c-226c65a135b6.jpg?ts=1739515697" className=' mx-[auto]'/>
                            

                        </div>
                        <div className=' shadow-[0px_0px_1px_0px] m-1  flex ' >

                            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/2d2f35df-ff60-49c2-976c-226c65a135b6.jpg?ts=1739515697" className=' mx-[auto]'/>
                            

                        </div>
                       

                         
                    </Slider>
                </div>
                
            </div>
            <Footer/>
        </>
    )
}

