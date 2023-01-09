import axios from "axios";
import Link from "next/link";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

type ProductType = {
    id: number | null | undefined;
    image: string | undefined;
    name: string | undefined;
    quantity: number;

    price: number;
};

const config = {
    headers: {
        "Content-Type": "application/json",
        "x-access-user": "afnan.eu.cse@gmail.com",
    },
};

const ConfirmOrder = () => {
    const { shippingInfo, cart: cartItems } = useSelector(
        (state: RootState) => state.cart
    );

    const subtotal = cartItems.reduce(
        (acc: number, item: { price: number; quantity: number }) =>
            acc + item.price * item.quantity,
        0
    );
    const tax = cartItems.reduce((acc: number, item) => acc + item.vat, 0);
    const shippingCharges = subtotal > 1000 ? 0 : 200;

    const totalPrice = subtotal + shippingCharges + tax;
    const address = `${shippingInfo.name}, ${shippingInfo.address}, ${shippingInfo.phoneNo}`;
    const placeOrder = async () => {
        const data = {
            customer: {
                name: shippingInfo.name,
                address,
                phone: shippingInfo.phoneNo,
            },
            calculation: {
                price: subtotal,
                vat: tax,
                total: totalPrice,
            },
            items: [...cartItems],
        };

        const res = await axios.post(
            "https://munchies-api.up.railway.app/order",
            data,
            config
        );
        console.log(res);
        if (res.status == 201) {
            alert("Your order has been placed successfully");
        }
    };
    return (
        <Fragment>
            <div className=" h-screen bg-inherit grid grid-cols-9 ">
                <div className="col-span-6 ">
                    <div className=" p-[2rem] pb-[0%] m-[2rem] ">
                        <h1>Shipping Info</h1>
                        <div className="  m-[2rem]  ">
                            <div className=" flex my-[1rem] mx-0 ">
                                <p>Name:</p>
                                <span>{shippingInfo.name}</span>
                            </div>

                            <div className=" flex my-[1rem] mx-0 ">
                                <p>Phone:</p>
                                <span>{shippingInfo.phoneNo}</span>
                            </div>

                            <div className=" flex my-[1rem] mx-0 ">
                                <p>Address:</p>
                                <span className=" text-[#575757] my-0 mx-[1rem] ">
                                    {address}
                                </span>
                            </div>
                        </div>
                        <div className="  p-[2rem] pt-[0.8rem] ">
                            <h1>Your Cart Items</h1>

                            <div className="  max-h-[20rem] overflow-y-auto m-[2rem] ">
                                {cartItems &&
                                    cartItems.map((item: ProductType) => (
                                        <div
                                            className="flex justify-between items-center my-[2rem] mx-0"
                                            key={item.id}
                                        >
                                            <img
                                                className="w-[5rem] object-contain "
                                                src={item.image}
                                                alt="Product"
                                            />
                                            <p
                                            // href={`/product/${item.product}`}
                                            >
                                                {item.name}{" "}
                                            </p>
                                            <span className="flex ">
                                                {item.quantity} x {item.price} ={" "}
                                                <b>
                                                    {item.price * item.quantity}
                                                </b>
                                            </span>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* //////////////// */}
                <div className="col-span-3 border-l-2">
                    <div className="  text-center border-b-4 p-[1rem] w-full m-auto box-border ">
                        <h1>Order Summery</h1>
                        <div>
                            <div className=" flex justify-between m-[1rem] ">
                                <p>Price:</p>
                                <span>{subtotal}</span>
                            </div>

                            <div className=" flex justify-between m-[1rem] ">
                                <p>VAT:</p>
                                <span>{tax}</span>
                            </div>
                        </div>
                        <div className="  flex justify-between py-[2rem] px-0 border-t-2 ">
                            <p>
                                <b>Total:</b>
                            </p>
                            <span>{totalPrice}</span>
                        </div>
                        <button
                            className=" border-none hover:bg-[#cc4f39] bg-[tomato] text-white w-full p-[1rem] cursor-pointer transition-all duration-300 m-[2rem] focus:outline-none outline-none "
                            onClick={placeOrder}
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ConfirmOrder;
