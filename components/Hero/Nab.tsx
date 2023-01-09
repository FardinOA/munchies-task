import Image from "next/image";
import React, { useEffect } from "react";
import type { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { NextPage } from "next";
const Nab: NextPage = () => {
    const { cart: cartProducts } = useSelector(
        (state: RootState) => state.cart
    );
    useEffect(() => {}, [cartProducts]);

    return (
        <div className="flex justify-between mx-16">
            <div className="h-[65px] w-[128px]">
                <Image alt="logo" src={`/logo.png`} height={65} width={128} />
            </div>
            <div className=" p-4 hidden lg:flex text-white justify-around w-[50%]">
                <p>Home</p>
                <p>About</p>
                <p>Menu</p>
                <p>Blog</p>
                <p>contact</p>
                <Link href={`/orders`}>Orders</Link>
            </div>
            <div className="flex justify-around p-4 w-[10%] text-white">
                <p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                </p>
                <div className="relative">
                    <Link href={`/cart`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                            />
                        </svg>
                    </Link>

                    <span
                        className={` absolute top-0 right-[-5px] h-2 w-2 rounded-full ${
                            cartProducts?.length > 0 &&
                            "animate-ping bg-yellow-500  "
                        }  font-black`}
                    ></span>
                </div>
            </div>
        </div>
    );
};

export default Nab;
