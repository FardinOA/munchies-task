import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface InitialType {
    cart: {
        image: string;
        id: number;
        price: number;
        vat: number;
        quantity_available: number;
        name: string;
        quantity: number;
    }[];
    shippingInfo: {
        address: string;
        name: string;
        phoneNo: string;
    };
}
const cartData =
    typeof window !== "undefined" && window.localStorage.getItem("cartItems")
        ? JSON.parse(window.localStorage.getItem("cartItems") || "")
        : [];

const shippingInfoData =
    typeof window !== "undefined" && window.localStorage.getItem("shippingInfo")
        ? JSON.parse(window.localStorage.getItem("shippingInfo") || "")
        : {};

const initialState: InitialType = {
    cart: cartData ? cartData : [],
    shippingInfo: shippingInfoData
        ? shippingInfoData
        : {
              address: "",
              name: "",
              phoneNo: "",
          },
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        addToCart: (
            state,
            action: PayloadAction<{
                image: string;
                id: number;
                price: number;
                vat: number;
                quantity_available: number;
                name: string;
                quantity: number;
            }>
        ) => {
            const item = action.payload;

            const isItemExist = state.cart.find((ele) => ele.id === item.id);

            if (!isItemExist) {
                state.cart.push(action.payload);
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cart));
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const newCart = state.cart.filter(
                (ele) => ele.id !== action.payload
            );
            state.cart = newCart;
            localStorage.setItem("cartItems", JSON.stringify(state.cart));
        },

        increaseQuantity: (state, action: PayloadAction<number>) => {
            const objIndex = state.cart.findIndex(
                (obj) => obj.id == action.payload
            );
            state.cart[objIndex].quantity = state.cart[objIndex].quantity + 1;
            localStorage.setItem("cartItems", JSON.stringify(state.cart));
        },

        decreaseQuantity: (state, action: PayloadAction<number>) => {
            const objIndex = state.cart.findIndex(
                (obj) => obj.id == action.payload
            );
            state.cart[objIndex].quantity = state.cart[objIndex].quantity - 1;
            localStorage.setItem("cartItems", JSON.stringify(state.cart));
        },
        saveShippingInfo: (state, action) => {
            state.shippingInfo = {
                ...state.shippingInfo,
                ...action.payload,
            };
            localStorage.setItem(
                "shippingInfo",
                JSON.stringify(state.shippingInfo)
            );
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    saveShippingInfo,
} = counterSlice.actions;

export default counterSlice.reducer;
