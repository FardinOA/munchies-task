import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
// axios.defaults.headers.common["X-Access-User"] = "afnan.eu.cse@gmail.com";
// axios.defaults.headers.common["Content-Type"] = "application/json";
const config = {
    headers: {
        "Content-Type": "application/json",
        "x-access-user": "afnan.eu.cse@gmail.com",
    },
};
const fetcher = async (url: string) =>
    await axios.get(url, config).then((res) => res.data);
const Kitchen = () => {
    const { data, error } = useSWR(
        "https://munchies-api.up.railway.app/products",
        fetcher
    );

    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(data);
    }, [data]);
    const dispatch = useDispatch();

    const addToCartHandler = (ele: {}) => {};

    // console.log(products);
    return (
        <div className="bg-[#F7F8FA]">
            {" "}
            <div className=" container   m-auto ">
                <h1 className="text-[2rem] ">Home Kitchen</h1>
                <div className="flex">
                    <button className="rounded-l-[10px] border-yellow-600 bg-yellow-500 w-[100px] h-[46px] px-4 border">
                        All
                    </button>
                    <button className="border-yellow-600 w-[100px] h-[46px] px-4 border">
                        Button
                    </button>
                    <button className="border-yellow-600 w-[150px] h-[46px] px-4 border">
                        Free delivery
                    </button>
                    <button className="border-yellow-600 w-[100px] h-[46px] px-4 border">
                        New
                    </button>
                    <button className="rounded-r-[10px] border-yellow-600 w-[100px] h-[46px] px-4 border">
                        Coming
                    </button>
                </div>
                <select
                    className="mt-6   border border-gray-300 p-2 px-20 rounded-[10px] focus:outline-none"
                    name=""
                    id=""
                >
                    <option value="">Filters</option>
                </select>

                <div className=" flex justify-center  ">
                    {" "}
                    <div className="flex flex-wrap gap-10 p-2 ">
                        {products?.map(
                            (
                                ele: {
                                    image: string;
                                    id: number;
                                    price: number;
                                    vat: number;
                                    quantity_available: number;
                                    name: string;
                                },
                                ind
                            ) => (
                                <div key={ind}>
                                    <div className="relative w-[277px] h-[250px] rounded-t-[10px]  ">
                                        <Image
                                            src={ele.image}
                                            height={100}
                                            width={100}
                                            alt={ele.name}
                                            className="h-full w-full rounded-t-[10px]"
                                        />
                                        <span className="absolute text-[12px] px-2 w-[36px] rounded-tl-[9px] h-[20px] top-[-.5px] left-[-.5px] bg-yellow-500 text-white">
                                            20%
                                        </span>
                                    </div>

                                    <div className="bg-[#FFFFFF]">
                                        <div className="flex justify-between p-4">
                                            <p>{ele.name}</p>{" "}
                                            <p>${ele.price}</p>
                                        </div>
                                        <div className="flex justify-between p-4">
                                            <p className="flex justify-around w-[70%]">
                                                <span className="bg-[#F7F8FA] px-2 rounded-[10px]">
                                                    ⭐ 4.5
                                                </span>
                                                <span className="bg-[#F7F8FA] px-2 rounded-[10px]">
                                                    50-79 min
                                                </span>
                                            </p>
                                            <svg
                                                onClick={() =>
                                                    dispatch(
                                                        addToCart({
                                                            ...ele,
                                                            quantity: 1,
                                                        })
                                                    )
                                                }
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6 text-white cursor-pointer hover:scale-[1.1] transition-all duration-300 rounded-[5px] bg-yellow-500 "
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 4.5v15m7.5-7.5h-15"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Kitchen;
