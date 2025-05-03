import React, { useState } from 'react'
import { FaCaretDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom';




export default function Header() {


    const [counter, setCounter] = useState(1)
    let incFn = () => {
        setCounter(counter + 1)
    }
    let decFn = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    // for modal

    const [accountBox, setaccountBox] = useState(false)

    let accountBoxFn = () => {
        setaccountBox(!accountBox)
    }

    // for side modal
    const [show,setshow] = useState(false)
    let setShowFn =()=>{
        setshow(!show)
        
        
    }
    


    return (
        <>
            <div className=' lg:block hidden lg:shadow-[0px_0px_1px_0px] lg:sticky   top-0 bg-[white] z-99 relative'>
                <div className='max-w-full   grid grid-cols-[7%_20%_auto_12%_12%]  items-center'>
                    <div className='border-r border-gray-100'>
                        <Link to={'/'}>   <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/assets/ui/print/bl_logo_web.png" alt="" />
                        </Link>
                    </div>
                    <div className=' ml-10 '>
                        <p className='font-bold text-[20px]'>Delivery in 13 minutes</p>
                        <p className='flex items-center '> Jodhpur, Rajasthan 342001 <FaCaretDown />
                        </p>
                    </div>
                    <div className='   flex p-[10px_14px] rounded-[7px] items-center bg-[#F8F8F8] '>
                        <div className='text-[22px]'><CiSearch /></div>
                        <div className='w-[94%] '>
                            <input type="text" className='py-1 w-full outline-none ml-8  ' />
                        </div>
                    </div>

                    {/* account Box */}
                    <div className='ml-4 text-center text-[20px] cursor-pointer' >

                        <p onClick={accountBoxFn} className='flex items-center '>Account <FaCaretDown />
                        </p>

                        <div className={`modal w-[18%] duration-[0.4s]   absolute top-20  text-left invisibe bg-[white] shadow-[0px_1px_10px_0px] p-3 ${accountBox == false ? "top-[-400%]  opacity-[0]  " : "top-[98%] opacity-[1] "}   `}>

                            <h1 className='text-[16px] font-bold '>My Account</h1>
                            <p className='text-[13px]'>6773620942</p>
                            <p className='text-[13px] mt-6'>My Orders</p>
                            <p className='text-[13px] mt-5'>Saved Address</p>
                            <p className='text-[13px] mt-5'>E-Gifts Cards</p>
                            <p className='text-[13px] mt-5'>FAQ's</p>
                            <p className='text-[13px] mt-5'>Account Privacy</p>
                            <p className='text-[13px] mt-5'>Log Out</p>
                            <div className='grid grid-cols-[36%_auto] gap-2 items-center'>
                                <div className=''>
                                    <img src="data:image/png;base64,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" alt="" />
                                </div>
                                <div className=' '>
                                    <h1 className='text-[16px] font-bold'>
                                        Simple way to
                                        get groceries
                                    </h1>
                                    <h1 className='text-[16px] font-bold text-[blue]'>in minutes</h1>
                                    <p className='text-[11px]'>Scan the QR code and download blinkit app</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* account Box end */}


                    {/* my cart  */}
                    <div className='text-center border'>
                        <button onClick={setShowFn} className='bg-[#F8F8F8] hover:bg-[#ccc] p-3  rounded-xl text-[19px]' >My Cart shh</button>

                            {/* my cart side box */}


                        <div className={`absolute z-[999]   w-[26%]  top-[-0] duration-[1s] bg-[#F5F7FD] h-[100vh] overflow-y-scroll
                            ${show == false ? "right-[-20%] opacity-[0] hidden " : " right-0 opacity-[1] block "} `}>
                            <div className='grid grid-cols-[80%_auto] justify-between bg-[white] p-3'>
                                <div className=' text-left font-bold'>My Cart</div>
                                <div className= 'cursor-pointer'onClick={()=> setShowFn(true)}>X</div>
                            </div>
                            <div className=' w-[87%] mx-[auto]   mt-4 bg-[white] rounded-[6px] p-3'>
                                <div className='grid grid-cols-[14%_auto] gap-2 '>
                                    <div className=' '>
                                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=180/assets/eta-icons/15-mins-filled.png" alt="" className='rounded-[6px]' />
                                    </div>
                                    <div className=' text-left'>
                                        <h1 className='font-bold'>
                                            Delivery in 8 minutes
                                        </h1>
                                        <p className='text-[13px]'>Shipment of 3 items</p>
                                    </div>
                                </div>
                                <div className='grid grid-cols-[25%_auto_26%] gap-1 items-center mt-4' >
                                    <div className=''>
                                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=135/app/assets/products/sliding_images/jpeg/5ee4441d-9109-48fa-9343-f5ce82b905a6.jpg?ts=1706182143" alt="" className='border border-gray-100' />
                                    </div>
                                    <div className=' text-[12px] text-left'>Amul Taaza Toned <br />Fresh Milk <br />
                                        <span className='text-[11px] text-[gray]'>500 ml</span><br />
                                        <span className='text-[11px] font-bold'>₹27</span>
                                    </div>
                                    <div className='items-center'>
                                        <button className='bg-[green] text-[white] p-[3px_4px] rounded-[5px] cursor-pointer hover:bg-[orange]' ><span className='mr-2 font-bold' onClick={decFn}>-</span> {counter} <span className='ml-2 font-bold' onClick={incFn}>+</span></button>
                                    </div>
                                </div>
                            </div>

                            <div className='w-[87%] mx-[auto]   mt-4 bg-[white] rounded-[6px] p-3'>
                                <h1 className='font-bold text-left '>Bill details</h1>
                                <div className='grid grid-cols-[80%_auto]  text-[12px]'>
                                    <div className=' text-left '>
                                        Items total</div>
                                    <div className=' text-[14px]'>₹81</div>
                                </div>
                                <div className='grid grid-cols-[80%_auto]  text-[12px]'>
                                    <div className=' text-left '>
                                        Delivery charge
                                    </div>
                                    <div className=' text-[14px] '>₹30</div>
                                </div>
                                <div className='grid grid-cols-[80%_auto]  text-[12px]'>
                                    <div className=' text-left '>
                                        Handling Charge
                                    </div>
                                    <div className=' text-[14px]'>₹4</div>
                                </div>
                                <div className='grid grid-cols-[80%_auto]  text-[12px]'>
                                    <div className=' text-left '>

                                        Small cart charge
                                    </div>
                                    <div className=' text-[14px]'>₹4</div>
                                </div>
                                <div className='grid grid-cols-[80%_auto] font-bold  text-[15px]'>
                                    <h1 className='text-left '>Grand Total</h1>
                                    <h1>₹81</h1>
                                </div>

                            </div>
                            <div className='w-[87%] mx-[auto]   mt-4 bg-[white] rounded-[6px] p-3'>
                                <div className='grid grid-cols-[13%_auto_16%]  items-center gap-2 '>
                                    <div className=''>
                                        <img src="https://cdn.grofers.com/assets/ui/icons/feeding_india_icon_v6.png" alt="" />
                                    </div>
                                    <div className=' text-left'>
                                        <h1 className=' font-bold text-[14px]'>Feeding India donation</h1>
                                        <p className='text-[12px]'>Working towards a malnutrition free India. Feeding India...read more</p>
                                    </div>
                                    <div className=' flex items-center justify-around    '>
                                        <p>₹1</p>
                                        <input type="checkbox" />
                                    </div>
                                </div>
                            </div>
                            <div className='w-[87%] mx-[auto]   mt-4 bg-[white] rounded-[6px] p-3'>
                                <h1 className='font-bold text-left'>Tip your delivery partner</h1>
                                <p className='text-[13px] text-left'>Your kindness means a lot! 100% of your tip will go directly to your delivery partner.</p>
                                <div className='grid grid-cols-4 gap-2  items-center mt-4'>
                                    <div className='border rounded-[6px] p-[3px_10px] grid grid-cols-[48%_auto] gap-1'>
                                        <div className=''>
                                            <img src="https://b.zmtcdn.com/data/o2_assets/2ef961c631b0b3ec214689aca4e95efd1633353812.png?output-format=webp" alt="" />
                                        </div>
                                        <div className=''>₹30</div>
                                    </div>
                                    <div className='border rounded-[6px] p-[3px_10px] grid grid-cols-[48%_auto] gap-1'>
                                        <div className=''>
                                            <img src="https://b.zmtcdn.com/data/o2_assets/047a7d05ee3bbad4db7e962c25d759cd1633508344.png?output-format=webp" alt="" />
                                        </div>
                                        <div className=''>₹30</div>
                                    </div>
                                    <div className='border rounded-[6px] p-[3px_10px] grid grid-cols-[48%_auto] gap-1'>
                                        <div className=''>
                                            <img src="https://b.zmtcdn.com/data/o2_assets/3eff26c9392c33254d314ce8758ffae51633353789.png?output-format=webp" alt="" />
                                        </div>
                                        <div className=''>₹30</div>
                                    </div>
                                    <div className='border rounded-[6px] p-[3px_10px] grid grid-cols-[48%_auto] gap-1'>
                                        <div className=''>
                                            <img src="https://b.zmtcdn.com/data/o2_assets/2ef961c631b0b3ec214689aca4e95efd1633353812.png?output-format=webp" alt="" />
                                        </div>
                                        <div className=''>₹30</div>
                                    </div>


                                </div>
                            </div>
                            <div className='w-[87%] mx-[auto]   mt-4 bg-[white] rounded-[6px] p-3 text-left mb-28'>
                                <h1 className='font-bold '>Cancellation Policy</h1>
                                <p className='text-[13px]'>Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.</p>
                            </div>

                            {/* process box */}

                            <div className={` w-[400px] right-2 top-180 mt-1 bg-[white] rounded-[6px]   p-2 fixed duration-[1s]   border ${show == false ? "right-[-20%]  opacity[0] hidden" : " right-0  opacity[1] block " } `}>
                                <div className='grid grid-cols-[20%_20%] bg-[green] items-center rounded-[8px] justify-between p-2 text-[white]' >
                                    <div className=' '>
                                        <h1>₹135</h1>
                                        <h1>Total</h1>
                                    </div>
                                    <div className=' text-[18px] cursor-pointer flex items-center '>Proceed <div><FaChevronRight /></div></div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>


            {/* for mobile */}

            <div className=' lg:hidden block flex justify-between m-5'>
                <div >
                    <p className='font-bold'>Delivery in 13 minutes</p>
                    <p className='flex items-center '> Jodhpur, Rajasthan 342001 <FaCaretDown />
                    </p>
                </div>
                <div className='text-[25px]'>
                    <CgProfile />
                </div>

            </div>
            <div className='lg:hidden block  w-[100%]'>
                <div className=' lg:hidden block  w-[95%] mx-[auto]  flex p-[10px_14px] rounded-[7px] items-center mt-3 bg-[#F8F8F8] '>
                    <div className='text-[22px]'><CiSearch /></div>
                    <div>
                        <input type="text" className='py-1  outline-none ml-8 ' />
                    </div>
                </div>
            </div>


        </>

    )
}
