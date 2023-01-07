import Image from "next/image";
import React from "react";
import Nab from "./Nab";

const index = () => {
    return (
        <div className="h-screen bg-[#0C1712]">
            <Nab />
            <div className="h-full w-full flex justify-center items-center">
                <div className="p-4 lg:p-0 flex lg:flex-row flex-col justify-between lg:space-x-[10rem] text-white">
                    <div>
                        <p className="capitalize text-[4rem]">authentic home</p>
                        <p className="text-[4rem]">food in UK</p>
                        <p className="flex flex-col my-6 mb-12">
                            <span className="leading-[20px]">
                                What2Eat is a courier service in which authentic
                                home cook
                            </span>
                            <span className="leading-[20px]">
                                food is delivered to a customer.
                            </span>
                        </p>
                        <div>
                            <input
                                type="text"
                                className="w-[398px] h-[58px] rounded-l-[10px] focus:outline-none px-4 text-black"
                            />
                            <span className="h-[58px] p-[1.15rem] bg-[#F3BA00] rounded-r-[10px]">
                                Search
                            </span>
                        </div>
                    </div>
                    <div>
                        <Image
                            src={`/cuate.png`}
                            height={521}
                            width={435}
                            alt="cooking"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
