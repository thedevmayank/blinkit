import React, { useEffect, useState } from 'react'
import { Footer } from './components/Footer'
import Header from './components/Header'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Products_page() {

    const [allData, setAllData] = useState([])

    // for products

    const displayData = () => {
        axios.get("https://dummyjson.com/products?limit=200")
            .then((ress) => {
                setAllData(ress.data.products)

            })
            .catch((error) => {
                console.log(error);

            })

    }

    // for products category
    const [categories, setCategories] = useState([])
    console.log(categories);

    const displayCategory = () => {
        axios.get("https://dummyjson.com/products/categories")
            .then((ress) => {
                setCategories(ress.data);


            })
            .catch((error) => {
                console.log(error);

            })
    }

    // for get categories url

    const getUrl=(url)=>{
            console.log();
            
    }

    useEffect(() => {
        displayData()
        displayCategory()
    }, [])


    return (
        <>
            <Header />
            <div className='max-w-[1200px] mx-[auto] shadow-[0px_1px_2px_0px] py-2'>
                <div className='w-full p-[6px_3px] border-sm font-bold text-[14px]'>Buy Rolling Paper Online</div>
                <div className='w-full h-[80vh] grid lg:grid-cols-[20%_auto] grid-cols-[10%_auto]  '>

                    {/* left side start */}
                    <div className=' w-full overflow-y-scroll'>
                        {categories.length > 0 ?
                            categories.map((v, i) => {
                                return (
                                    <div className='  w-full px-2 py-1 '>
                                        <ul>
                                            <li className=' text-[14px] font-bold cursor-pointer hover:bg-[#ccc] p-2 hover:text-[white]' onClick={() => getUrl(v.url)}>
                                                {v.name}
                                            </li>
                                        </ul>


                                    </div>
                                )
                            })
                            : "please wait"}








                    </div>

                    {/* left side end */}


                    {/* right side start */}
                    <div className=' bg-[#F8F8F8] overflow-y-scroll p-2 m-2'>
                        <div className=''>
                            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/layout-engine/2023-06/new-tobacco-banner.png" alt="" className='rounded-xl ' />
                        </div>
                        <div className='grid grid-cols-2 md:grid-cols-3  lg:grid-cols-6 gap-[12px]'>
                            {allData.length > 0 ?
                                allData.map((v, i) => {
                                    return (
                                        <div className=' shadow-[0px_0px_3px_0px] m-2 p-2 bg-white flex flex-col justify-between '>
                                            <Link to={"/product_detail"}>
                                                <img src={v.thumbnail} /></Link>
                                            <div>
                                                <p className=' grid grid-cols-[8%_7%]  items-center text-[10px] '><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="" />
                                                    30min</p>
                                            </div>

                                            <p className='text-[15px]'>{v.title}</p>
                                            <h1 className='text-[12px]'>stock:{v.stock}</h1>
                                            <h1 className='text-[rgb(102,102,102)] text-[12px]'>{v.category}</h1>
                                            <div className=' flex justify-between items-center  '>
                                                <div className='text-[14px] '>${v.price}</div>
                                                <div>
                                                    <Link to={'/product_detail'}> <button className='bg-[#F7FFF9] rounded-[5px] p-[5px_17px_5px_17px] text-[14px]  border cursor-pointer hover:bg-green-100 '>ADD</button>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                })
                                : "please wait"}



                            {/*  */}






                        </div>


                    </div>

                </div>

                {/* right side end */}

                {/* description section */}

                <div className='w-[90%]  mx-[auto] my-10 text-[#7A6666] text-justify'>
                    <p className='text-[17px]'> Lighters & Accessories include a range of high-quality lighters, rolling accessories, crushers, and trays to enhance your smoking experience. From refillable flint lighters to windproof Zippo models, we offer durable and stylish options. Choose from adjustable flame pocket lighters, jet flame lighters, and classic designs for convenience and reliability. Our collection also features rolling trays, crushers, and biodegradable smoking accessories from top brands like Stash Pro, Bongchie, and Zippo.
                    </p>
                    <div className='font-bold text-[25px] text-[#7A6666] m-[20px_0px_0px_0px]'><h1>Types of Lighters Available</h1></div>
                    <p className='text-[17px] m-[10px_0px_0px_0px] p-0'>Choose from flint, jet flame, windproof, refillable, and disposable lighters to suit your needs. Options include adjustable flame, vintage designs, and electric models from brands like Zippo, Stash Pro, and Bongchie, ensuring quality and reliability.</p>
                    <div className='font-bold text-[21px] text-[#7A6666] m-[20px_0px_0px_0px]'><h1>Flint Lighters</h1></div>
                    <p className='text-[17px] m-[10px_0px_0px_0px] p-0'>Choose from flint, jet flame, windproof, refillable, and disposable lighters to suit your needs. Options include adjustable flame, vintage designs, and electric models from brands like Zippo, Stash Pro, and Bongchie, ensuring quality and reliability.</p>
                    <div className='font-bold text-[21px] text-[#7A6666] m-[20px_0px_0px_0px]'><h1>Refillable Lighters</h1></div>
                    <p className='text-[17px] m-[10px_0px_0px_0px] p-0'>Choose from flint, jet flame, windproof, refillable, and disposable lighters to suit your needs. Options include adjustable flame, vintage designs, and electric models from brands like Zippo, Stash Pro, and Bongchie, ensuring quality and reliability.</p>
                    <div className='font-bold text-[21px] text-[#7A6666] m-[20px_0px_0px_0px]'><h1>Disposable Lighters</h1></div>
                    <p className='text-[17px] m-[10px_0px_0px_0px] p-0'>Choose from flint, jet flame, windproof, refillable, and disposable lighters to suit your needs. Options include adjustable flame, vintage designs, and electric models from brands like Zippo, Stash Pro, and Bongchie, ensuring quality and reliability.</p>
                    <div className='font-bold text-[21px] text-[#7A6666] m-[20px_0px_0px_0px]'><h1>Jet Flame Lighters </h1></div>
                    <p className='text-[17px] m-[10px_0px_0px_0px] p-0'>Choose from flint, jet flame, windproof, refillable, and disposable lighters to suit your needs. Options include adjustable flame, vintage designs, and electric models from brands like Zippo, Stash Pro, and Bongchie, ensuring quality and reliability.</p>
                    <div className='font-bold text-[21px] text-[#7A6666] m-[20px_0px_0px_0px]'><h1>JElectric & Plasma Lighters </h1></div>
                    <p className='text-[17px] m-[10px_0px_0px_0px] p-0'>Choose from flint, jet flame, windproof, refillable, and disposable lighters to suit your needs. Options include adjustable flame, vintage designs, and electric models from brands like Zippo, Stash Pro, and Bongchie, ensuring quality and reliability.</p>
                    <div className='font-bold text-[25px] text-[#7A6666] m-[20px_0px_0px_0px]'><h1>Why Buy Lighters & Accessories Online? </h1></div>
                    <p className='text-[17px] m-[10px_0px_0px_0px] p-0'>
                        <span className='font-bold'>Wide variety of options – </span> &nbsp; Choose from classic, refillable, and jet flame lighters. <br />
                        <span className='font-bold'>Fast delivery in 8 minutes  – </span> &nbsp; Get your order at B62, Pocket B, South City I, Sector 30, Gurugram. <br />
                        <span className='font-bold'>Wide variety of options – </span> &nbsp; Choose from classic, refillable, and jet flame lighters. <br />
                        <span className='font-bold'>Easy and hassle-free purchase – </span> &nbsp; Choose from classic, refillable, and jet flame lighters. <br />
                    </p>
                    <div className='font-bold text-[25px] text-[#7A6666] m-[20px_0px_0px_0px]'><h1>Frequently Asked Questions </h1></div>
                    <div className='font-bold text-[21px] text-[#7A6666] m-[20px_0px_0px_0px]'><h1>1. Are refillable lighters better than disposable ones? </h1></div>
                    <p className='text-[17px] m-[10px_0px_0px_0px] p-0'>Yes, refillable lighters last longer, are cost-effective, and reduce waste, making them a better choice for regular users.</p>
                    <div className='font-bold text-[21px] text-[#7A6666] m-[20px_0px_0px_0px]'><h1>2. How long does a Zippo lighter last? </h1></div>
                    <p className='text-[17px] m-[10px_0px_0px_0px] p-0'>Yes, refillable lighters last longer, are cost-effective, and reduce waste, making them a better choice for </p>

                    <div className='font-bold text-[21px] text-[#7A6666] m-[20px_0px_0px_0px]'><h1>3. Are refillable lighters better than disposable ones? </h1></div>
                    <p className='text-[17px] m-[10px_0px_0px_0px] p-0'>Yes, refillable lighters last longer, are cost-effective, and reduce waste, making them a better choice for regular users.</p>
                    <div className='font-bold text-[21px] text-[#7A6666] m-[20px_0px_0px_0px]'><h1>4. How long does a Zippo lighter last? </h1></div>
                    <p className='text-[17px] m-[10px_0px_0px_0px] p-0'>Yes, refillable lighters last longer, are cost-effective, and reduce waste, making them a better choice for </p>

                    <div className='font-bold text-[21px] text-[#7A6666] m-[20px_0px_0px_0px]'><h1>5. Are refillable lighters better than disposable ones? </h1></div>
                    <p className='text-[17px] m-[10px_0px_0px_0px] p-0'>Yes, refillable lighters last longer, are cost-effective, and reduce waste, making them a better choice for regular users.</p>
                    <div className='font-bold text-[21px] text-[#7A6666] m-[20px_0px_0px_0px]'><h1>6. How long does a Zippo lighter last? </h1></div>
                    <p className='text-[17px] m-[10px_0px_0px_0px] p-0'>Yes, refillable lighters last longer, are cost-effective, and reduce waste, making them a better choice for </p>





                </div>




            </div>
            <Footer />
        </>
    )
}
