import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

import { saveShippingInfo } from "../../features/cartSlice";
import { useRouter } from "next/router";
const Shipping = () => {
    const { shippingInfo } = useSelector((state: RootState) => state.cart);
    const [address, setAddress] = useState(shippingInfo?.address);
    const [name, setName] = useState(shippingInfo?.name);
    const [phoneNo, setPhoneNo] = useState(shippingInfo?.phoneNo);
    const dispatch = useDispatch();
    const router = useRouter();
    const shippingSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        dispatch(
            saveShippingInfo({
                address,

                name,
                phoneNo,
            })
        );
        router.push("/order/confirm");
    };
    return (
        <Fragment>
            <div className="  w-screen h-screen max-w-full flex justify-center items-center flex-col">
                <div className=" bg-inherit max-w-[45vw] h-[90vh] box-border overflow-hidden ">
                    <h2 className=" p-[1rem] text-center border-b w-[50%] m-auto ">
                        Shipping Details
                    </h2>

                    <form
                        encType="multipart/form-data"
                        className="flex flex-col justify-evenly items-center p-[2rem] m-auto h-[80%] transition-all duration-300 "
                        onSubmit={shippingSubmit}
                    >
                        <div className="flex w-full items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 absolute ml-[1rem]  "
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                />
                            </svg>

                            <input
                                className="focus:outline-none py-[1rem] px-[4rem] w-full box-border border rounded-[5px]  "
                                type="text"
                                placeholder="Name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="flex w-full items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 absolute ml-[1rem]  "
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                />
                            </svg>

                            <input
                                className="focus:outline-none py-[1rem] px-[4rem] w-full box-border border rounded-[5px]  "
                                type="text"
                                placeholder="Address"
                                required
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>

                        <div className="flex w-full items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 absolute ml-[1rem]  "
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                />
                            </svg>

                            <input
                                className="focus:outline-none py-[1rem] px-[4rem] w-full box-border border rounded-[5px]  "
                                type="text"
                                placeholder="Phone Number"
                                required
                                value={phoneNo}
                                onChange={(e) => setPhoneNo(e.target.value)}
                            />
                        </div>

                        <input
                            type="submit"
                            value="Continue"
                            className=" border-none hover:bg-[#cc4f39] bg-[tomato] text-white w-full p-[1rem] cursor-pointer transition-all duration-300 m-[2rem] focus:outline-none outline-none "
                        ></input>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default Shipping;
