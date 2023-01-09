import axios from "axios";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

type OrderType = {
    _id: string;
    xUser: string;
    calculation: { total: number };
    items: [{ name: string }];
};
const tableHead = ["Order Id", "Email", "Total Price", "Ordered Items"];

const config = {
    headers: {
        "Content-Type": "application/json",
        "x-access-user": "afnan.eu.cse@gmail.com",
    },
};
const fetcher = async (url: string) =>
    await axios.get(url, config).then((res) => res.data);

const Orders = () => {
    const { data, error } = useSWR(
        "https://munchies-api.up.railway.app/order",
        fetcher
    );

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        setOrders(data);
    }, [data]);

    return (
        <>
            <h1 className=" text-[tomato] text-[1.5rem] w-[7rem] m-auto border-b-4 ">
                All Orders
            </h1>
            <div className="flex    mt-12 justify-center">
                <div className="  !overflow-x-auto ">
                    <table className="table border-collapse border border-grey-light xl:table-fixed">
                        <thead>
                            <tr>
                                {tableHead.map((ele, ind) => {
                                    return (
                                        <th
                                            scope="col"
                                            className={` text-[tomato] bg-gray-300 item border  border-grey-dark capitalize min-w-[150px] py-6 p-2 text-center font-Inter_Regular text-base font-bold lg:text-xl`}
                                            key={ind}
                                        >
                                            {ele}
                                        </th>
                                    );
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {orders?.map((ele: OrderType, ind) => {
                                return (
                                    <tr
                                        className={`${
                                            ind % 2 && "bg-gray-100"
                                        }`}
                                        key={ind}
                                    >
                                        <td className="border  border-grey-dark item capitalize min-w-[150px]  p-4 text-center font-Inter_Regular text-base font-bold lg:text-xl">
                                            {ele._id}
                                        </td>
                                        <td className="border  border-grey-dark item capitalize min-w-[150px]  p-4 text-center font-Inter_Regular text-base font-bold lg:text-xl">
                                            {ele.xUser}
                                        </td>
                                        <td className="border  border-grey-dark item capitalize min-w-[150px]  p-4 text-center font-Inter_Regular text-base font-bold lg:text-xl">
                                            {ele.calculation?.total}$
                                        </td>
                                        <td className="border flex flex-col   items-start border-grey-dark item capitalize min-w-[150px]  p-4 text-center font-Inter_Regular text-base font-bold lg:text-xl">
                                            {ele.items?.map((item, ind2) => (
                                                <p key={ind2}>
                                                    <span>{ind2 + 1}. </span>{" "}
                                                    {item.name}{" "}
                                                </p>
                                            ))}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Orders;
