
import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Header from './components/Header'
import { Footer } from './components/Footer'
import { Link } from 'react-router-dom'

function App() {
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
        
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  return (
    <>
    <Header/>
      <div className='max-w-[1200px] mx-[auto] hidden  lg:block '>
        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg" alt="" />

        <div className='w-full grid grid-cols-[29%_29%_29%] ml-5 gap-4 my-4' >
          <div>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg" alt="" />
          </div>
          <div className=''>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg" alt="" />
          </div>
          <div>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg" alt="" />
          </div>
        </div>
        <div className='w-full flex  justify-between'>  
          <div>
          <Link to={'/products'}>  <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-12/paan-corner_web.png" alt="" /></Link>
          </div>
          <div>
          <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-2_10.png" alt="" />
            </div>
          <div><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-3_9.png" alt="" /></div>
          <div><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-4_9.png" alt="" /></div>
          <div><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-5_4.png" alt="" /></div>
          <div><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-6_5.png" alt="" /></div>
          <div><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-9_3.png" alt="" /></div>
          <div><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-7_3.png" alt="" /></div>
          <div><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-8_4.png" alt="" /></div>
          <div><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-12/paan-corner_web.png" alt="" /></div>
        </div>

        <div className='w-full flex  justify-between'>
          <div>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-12/paan-corner_web.png" alt="" />
          </div>
          <div><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-2_10.png" alt="" /></div>
          <div><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-3_9.png" alt="" /></div>
          <div><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-4_9.png" alt="" /></div>
          <div><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-5_4.png" alt="" /></div>
          <div><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-6_5.png" alt="" /></div>
          <div><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-9_3.png" alt="" /></div>
          <div><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-7_3.png" alt="" /></div>
          <div><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-8_4.png" alt="" /></div>
          <div><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-12/paan-corner_web.png" alt="" /></div>
        </div>
        <div className='z-[100px] '>
          <div className='my-8 font-bold text-[25px]'>Dairy, Bread & Eggs</div>
          <Slider {...settings} >
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

            <Link to={'/product_detail'}>  <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5ee4441d-9109-48fa-9343-f5ce82b905a6.jpg?ts=1706182143" /></Link>
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[15px]'>Amul Taaza Toned Fresh Milk</p>
              <p className='text-[9px] text-[#666B74] mt-2'>500 ml</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[14px]'>₹44</div>
        <Link to={'/product_detail'}>    <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100 '>ADD</button></Link>
              </div>

            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '>
                  <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[15px]'>Amul Gold Full Cream Fresh Milk</p>
              <p className='text-[14px] text-[#666B74] mt-2'>500 ml</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[14px]'>₹34</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>

            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6ae62ec2-3b13-4fff-b052-2ff3d4ef2d16.jpg?ts=1726473593" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[15px]'>Amul Masti Pouch Curd</p>
              <p className='text-[14px] text-[#666B74] mt-2'>500 ml</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[14px]'>₹44</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>

            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/c2b22cd4-b144-4266-901a-ff4ae82aa912.jpg?ts=1726473621" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[15px]'>Amul Masti Curd Fresh</p>
              <p className='text-[14px] text-[#666B74] mt-2'>1 Kg</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[14px]'>₹70</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>
            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/df49cda4-0b40-40d1-a05a-35f9f5b8175a.jpg?ts=1726485653" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[15px]'>Vijay Premium White Bread </p>
              <p className='text-[14px] text-[#666B74] mt-2'>600 g</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[14px]'>₹55</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>

            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/80dc07f4-442e-4605-ab01-1996582b4d1f.jpg?ts=1726473647" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[15px]'>Egg First Protein White Eggs</p>
              <p className='text-[14px] text-[#666B74] mt-2'>6 pieces</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[14px]'>₹64</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>

            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/76575a61-7b42-49bc-95a0-675c17578346.jpg?ts=1726484605" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[15px]'>Egg First Protein White Eggs</p>
              <p className='text-[14px] text-[#666B74] mt-2'>6 pieces</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[14px]'>₹64</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>

            </div>
          </Slider>
          <div className='my-8 font-bold text-[25px]'>Rolling paper & tobacco</div>
          <Slider {...settings} >
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/506375a.jpg?ts=1698309252" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[15px] overflow-hidden'>Brown Ripper Rolling Paper 32...</p>
              <p className='text-[14px] text-[#666B74] mt-2'>1 pack (64 pieces)</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[14px]'>₹120</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>

            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/512860a.jpg?ts=1690832312" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[15px]'>Ultimate Rolling Paper with Filter...</p>
              <p className='text-[14px] text-[#666B74] mt-2'>1 pack 32 Leaves...</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[14px]'>₹80</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100  '>ADD</button>
              </div>

            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/cb6a3d84-dbe2-4fc3-b59e-56e3114c9456.jpg?ts=1736847310" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[15px]'>Dollar Pre-rolled Rolling Paper by...</p>
              <p className='text-[14px] text-[#666B74] mt-2'>3 Packs</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[14px]'>₹60</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>

            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/496994a.jpg?ts=1698309251" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[15px]'>Brown Rolling Paper + Roach...</p>
              <p className='text-[14px] text-[#666B74] mt-2'>1 Pack</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[14px]'>₹44</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>
            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4d3ca0ba-4751-426c-a329-36e0279ee140.jpg?ts=1738749189" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[15px]'>Flavoured Pre Rolled Cones by..</p>
              <p className='text-[14px] text-[#666B74] mt-2'>1 pack (6 rolls)</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[14px]'>₹44</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>

            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6161e6fa-6b93-4c68-9790-ff0afd2778af.jpg?ts=1723622810" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[15px]'>Brown Party Cone Rolling Paper...</p>
              <p className='text-[14px] text-[#666B74] mt-2'>1 Pack</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[14px]'>₹80</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>

            </div>
          </Slider>
          <div className='my-8 font-bold text-[25px]'>Snacks & Munchies</div>
          <Slider {...settings} >
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/bb141b2d-4fd6-4e64-af0c-185464e52abb.jpg?ts=1737021197 " />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[15px] overflow-hidden'>Beanly Dark Chocolate spread...</p>
              <p className='text-[14px] text-[#666B74] mt-2'>52 g</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[14px]'>₹120</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>

            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/1c4f8155-55fc-44c4-b07a-e1107912fab8.jpg?ts=1740397574" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[15px]'>Ultimate Rolling Paper with Filter...</p>
              <p className='text-[14px] text-[#666B74] mt-2'>1 pack 32 Leaves...</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[14px]'>₹80</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100  '>ADD</button>
              </div>

            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6807f54d-f711-49ca-9635-514ac9b72d7f.jpg?ts=1724850859" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[15px]'>Dollar Pre-rolled Rolling Paper by...</p>
              <p className='text-[14px] text-[#666B74] mt-2'>3 Packs</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[14px]'>₹60</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>

            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/c7221d26-16ce-4b85-802a-b4a5aaabae13.jpg" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[15px]'>Brown Rolling Paper + Roach...</p>
              <p className='text-[14px] text-[#666B74] mt-2'>1 Pack</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[14px]'>₹44</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>
            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ff2acf02-4008-4fc5-b411-d7927cf92fd7.jpg?ts=1724850868" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[15px]'>Flavoured Pre Rolled Cones by..</p>
              <p className='text-[14px] text-[#666B74] mt-2'>1 pack (6 rolls)</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[14px]'>₹44</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>

            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/957a2153-59dc-40df-aa46-3ef9d07904ea.jpg?ts=1733991488" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[15px]'>Brown Party Cone Rolling Paper...</p>
              <p className='text-[14px] text-[#666B74] mt-2'>1 Pack</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[14px]'>₹80</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>

            </div>
          </Slider>
          <div className='my-8 font-bold text-[25px]'>Mouth fresheners</div>
          <Slider {...settings} >
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f77ef89d-0a4f-4a42-9a57-a2c0108a237d.jpg?ts=1737275566 " />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[15px] overflow-hidden'>Beanly Dark Chocolate spread...</p>
              <p className='text-[14px] text-[#666B74] mt-2'>52 g</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[14px]'>₹120</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>

            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/9dfff4f5-de84-4a3c-9cef-6d8e504cbf89.jpg?ts=1723143406" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[15px]'>Ultimate Rolling Paper with Filter...</p>
              <p className='text-[14px] text-[#666B74] mt-2'>1 pack 32 Leaves...</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[14px]'>₹80</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100  '>ADD</button>
              </div>

            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/102583a.jpg?ts=1687265030" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[15px]'>Dollar Pre-rolled Rolling Paper by...</p>
              <p className='text-[14px] text-[#666B74] mt-2'>3 Packs</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[14px]'>₹60</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>

            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b3acbc11-349d-447a-b641-7869a99fcf9f.jpg?ts=1737275549" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[15px]'>Brown Rolling Paper + Roach...</p>
              <p className='text-[14px] text-[#666B74] mt-2'>1 Pack</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[14px]'>₹44</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>
            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/4c0162e6-b82e-4bdc-a2ab-ff2ed8102d20.jpg" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[15px]'>Flavoured Pre Rolled Cones by..</p>
              <p className='text-[14px] text-[#666B74] mt-2'>1 pack (6 rolls)</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[14px]'>₹44</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>

            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/206540a.jpg?ts=1687437714" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[15px]'>Brown Party Cone Rolling Paper...</p>
              <p className='text-[14px] text-[#666B74] mt-2'>1 Pack</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[14px]'>₹80</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>

            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/498984a.jpg?ts=1686566080" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[15px]'>Brown Party Cone Rolling Paper...</p>
              <p className='text-[14px] text-[#666B74] mt-2'>1 Pack</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[14px]'>₹80</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>

            </div>
          </Slider>
          <div className='my-8 font-bold text-[25px]'>Candies & Gums</div>
          <Slider {...settings} >
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/aa4c477e-08d8-479d-be21-76e061e13c0d.jpg?ts=1718169096 " />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[15px] overflow-hidden'>Beanly Dark Chocolate spread...</p>
              <p className='text-[14px] text-[#666B74] mt-2'>52 g</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[14px]'>₹120</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>

            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/f82653d9-e852-4f17-be98-683f05325201.jpg?ts=1708591846" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[15px]'>Ultimate Rolling Paper with Filter...</p>
              <p className='text-[14px] text-[#666B74] mt-2'>1 pack 32 Leaves...</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[14px]'>₹80</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100  '>ADD</button>
              </div>

            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/737c47d4-5c30-4a36-8de3-15b539edcff7.jpg?ts=1726830247" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[15px]'>Dollar Pre-rolled Rolling Paper by...</p>
              <p className='text-[14px] text-[#666B74] mt-2'>3 Packs</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[14px]'>₹60</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>

            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/011c5a97-354e-4ef5-8852-bcb6bed82a2b.jpg?ts=1720016768" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[15px]'>Brown Rolling Paper + Roach...</p>
              <p className='text-[14px] text-[#666B74] mt-2'>1 Pack</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[14px]'>₹44</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>
            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f77ef89d-0a4f-4a42-9a57-a2c0108a237d.jpg?ts=1737275566" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[15px]'>Flavoured Pre Rolled Cones by..</p>
              <p className='text-[14px] text-[#666B74] mt-2'>1 pack (6 rolls)</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[14px]'>₹44</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>

            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/9ee95284-c4e8-4edd-a8e7-d4bc1a7eea66.jpg?ts=1723622354" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[15px]'>Brown Party Cone Rolling Paper...</p>
              <p className='text-[14px] text-[#666B74] mt-2'>1 Pack</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[14px]'>₹80</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>

            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/359045a.jpg?ts=1697793139" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[15px]'>Brown Party Cone Rolling Paper...</p>
              <p className='text-[14px] text-[#666B74] mt-2'>1 Pack</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[14px]'>₹80</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>
            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/409780a.jpg?ts=1688471121" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[15px]'>Brown Party Cone Rolling Paper...</p>
              <p className='text-[14px] text-[#666B74] mt-2'>1 Pack</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[14px]'>₹80</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>
            </div>
          </Slider>
        </div>
      </div>
 

      {/* for mobile */}

      {/* category start */}
      
      <div className='block lg:hidden w-[94%]  box-border mx-[auto]  '>

        <div className='block lg:hidden font-bold mt-3 '>
          <div className='text-[18px] ml-3 '>
            Shop By Category
          </div>


          <div className='  grid  grid-cols-4 gap-[10px] mt-4 ' >


            <div className=' rounded-[10px] bg-[#E5F3F3]  col-span-2 p-[5px_22px_5px_22px]'><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/category/cms_images/icon/1487_1679466558536.png" alt="" />
            </div>
            <div className=' rounded-[10px] bg-[#E5F3F3] col-span-2'><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/category/cms_images/icon/14_1678949253289.png" alt="" /></div>

            <div className='grid grid-cols-2 col-span-4 justify-center gap-2'>
              <p>Vegetables & Fruits</p>
              <p>Dairy & Breakfast</p>
            </div>

            <div className=' rounded-[10px] bg-[#E5F3F3] mt-6   '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/category/cms_images/icon/1487_1679466558536.png" alt="" /></div>
            <div className=' rounded-[10px] bg-[#E5F3F3] mt-6  col-span-2'><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/category/cms_images/icon/14_1678949253289.png" alt="" /></div>
            <div className=' rounded-[10px] bg-[#E5F3F3] mt-6   '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/category/cms_images/icon/1487_1679466558536.png" alt="" /></div>
            <div className=' rounded-[10px] bg-[#E5F3F3] mt-6  '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/category/cms_images/icon/14_1678949253289.png" alt="" /></div>
            <div className=' rounded-[10px] bg-[#E5F3F3] mt-6   '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/category/cms_images/icon/1487_1679466558536.png" alt="" /></div>
            <div className=' rounded-[10px] bg-[#E5F3F3] mt-6  '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/category/cms_images/icon/14_1678949253289.png" alt="" /></div>
            <div className=' rounded-[10px] bg-[#E5F3F3] mt-6   '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/category/cms_images/icon/1487_1679466558536.png" alt="" /></div>
            <div className=' rounded-[10px] bg-[#E5F3F3] mt-6  '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/category/cms_images/icon/14_1678949253289.png" alt="" /></div>
            <div className=' rounded-[10px] bg-[#E5F3F3] mt-6   '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/category/cms_images/icon/1487_1679466558536.png" alt="" /></div>
            <div className=' rounded-[10px] bg-[#E5F3F3] mt-6  '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/category/cms_images/icon/14_1678949253289.png" alt="" /></div>
            <div className=' rounded-[10px] bg-[#E5F3F3] mt-6   '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/category/cms_images/icon/1487_1679466558536.png" alt="" /></div>
            <div className=' rounded-[10px] bg-[#E5F3F3] mt-6  '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/category/cms_images/icon/14_1678949253289.png" alt="" /></div>
            <div className=' rounded-[10px] bg-[#E5F3F3] mt-6   '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/category/cms_images/icon/1487_1679466558536.png" alt="" /></div>
            <div className=' rounded-[10px] bg-[#E5F3F3] mt-6  '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/category/cms_images/icon/14_1678949253289.png" alt="" /></div>
            <div className=' rounded-[10px] bg-[#E5F3F3] mt-6   '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/category/cms_images/icon/1487_1679466558536.png" alt="" /></div>
            <div className=' rounded-[10px] bg-[#E5F3F3] mt-6  '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/category/cms_images/icon/14_1678949253289.png" alt="" /></div>

          </div>
        </div>

        {/* category end */}

        {/* shop by store section start */}
        
        <div className='block lg:hidden'>
          <div className='text-[18px] ml-3 font-bold'>
            Shop By Store
          </div>
          <div className='grid grid-cols-[24%_24%_24%_24%] h-[20vh] justify-around '>
            <div className=''>
              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/layout-engine/2024-05/pet-store-new-icon-1.png" alt="" className='rounded-xl h-full' />
            </div>
            <div>
              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/layout-engine/2023-07/print-store_new_0.png" alt="" className='rounded-xl h-full' />
            </div>
            <div>
              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/layout-engine/2023-07/electrics-store.png" alt="" className='rounded-xl h-full' />
            </div>
            <div>
              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/layout-engine/2023-07/stationery-store.png" alt="" className='rounded-xl h-full' />
            </div>
          </div>
        </div>

        {/* shop by store section end */}



        {/* deals section start */}

        <div className='text-[18px]  font-bold block lg:hidden mt-5  '>
          Hot Deals
        </div>
        <div className='block lg:hidden box-border w-[98%] '>
        <Slider {...settings} >
            <div className=' shadow-[0px_0px_1px_0px] p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5ee4441d-9109-48fa-9343-f5ce82b905a6.jpg?ts=1706182143" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[10px]'>Amul Taaza Toned Fresh Milk</p>
              <p className='text-[9px] text-[#666B74] mt-2'>500 ml</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[9px]'>₹44</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[9px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>

            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '>
                  <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[10px]'>Amul Gold Full Cream Fresh Milk</p>
              <p className='text-[9px] text-[#666B74] mt-2'>500 ml</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[9px]'>₹34</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[9px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>

            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6ae62ec2-3b13-4fff-b052-2ff3d4ef2d16.jpg?ts=1726473593" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[10px]'>Amul Masti Pouch Curd</p>
              <p className='text-[9px] text-[#666B74] mt-2'>500 ml</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[9px]'>₹44</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[9px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>

            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/c2b22cd4-b144-4266-901a-ff4ae82aa912.jpg?ts=1726473621" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[10px]'>Amul Masti Curd Fresh</p>
              <p className='text-[9px] text-[#666B74] mt-2'>1 Kg</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[9px]'>₹70</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[9px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>
            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/df49cda4-0b40-40d1-a05a-35f9f5b8175a.jpg?ts=1726485653" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[10px]'>Vijay Premium White Bread </p>
              <p className='text-[9px] text-[#666B74] mt-2'>600 g</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[9px]'>₹55</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[9px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>

            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/80dc07f4-442e-4605-ab01-1996582b4d1f.jpg?ts=1726473647" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[10px]'>Egg First Protein White Eggs</p>
              <p className='text-[9px] text-[#666B74] mt-2'>6 pieces</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[9px]'>₹64</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[9px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>

            </div>
            <div className=' shadow-[0px_0px_1px_0px] m-1 p-2'>

              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/76575a61-7b42-49bc-95a0-675c17578346.jpg?ts=1726484605" />
              <div>
                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                  30min</p>
              </div>
              <p className='text-[10px]'>Egg First Protein White Eggs</p>
              <p className='text-[9px] text-[#666B74] mt-2'>6 pieces</p>
              <div className='mt-2 flex justify-between items-center'>
                <div className='text-[9px]'>₹64</div>
                <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[9px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
              </div>

            </div>
          </Slider>
        </div>
      </div>



      {/* deals section end */}








        <Footer/>
    </>
  )
}

export default App
