import React from "react";
import { Spacer } from "../../atoms";
import { CartItem } from "../../molecules";
import { Props } from "./cart-list.props";

const products = [
  {
    id: "qweqweqwe1",
    title: "Phone dexp 1",
    price: 29.99,
    qty: 1,
    img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/1ea46f7b719ca9a0d48d18a08e3d9499/6dd7b85859f43f84142cfaf5dd62cb9d274f6173bea8fffc1c7e121e0b8004ef.jpg.webp",
  },
  {
    id: "qweqweqwe2",
    title: "Phone dexp 2",
    price: 29.99,
    qty: 1,
    img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/1ea46f7b719ca9a0d48d18a08e3d9499/6dd7b85859f43f84142cfaf5dd62cb9d274f6173bea8fffc1c7e121e0b8004ef.jpg.webp",
  },
  {
    id: "qweqweqwe3",
    title: "Phone dexp 3",
    price: 29.99,
    qty: 1,
    img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/1ea46f7b719ca9a0d48d18a08e3d9499/6dd7b85859f43f84142cfaf5dd62cb9d274f6173bea8fffc1c7e121e0b8004ef.jpg.webp",
  },
  {
    id: "qweqweqwe4",
    title: "Phone dexp 4",
    price: 29.99,
    qty: 1,
    img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/1ea46f7b719ca9a0d48d18a08e3d9499/6dd7b85859f43f84142cfaf5dd62cb9d274f6173bea8fffc1c7e121e0b8004ef.jpg.webp",
  },
];

export const CartList = ({ ...props }: Props) => {
  return (
    <>
      {products.map((item, i) => (
        <React.Fragment key={i}>
          <CartItem item={item} />
          <Spacer />
        </React.Fragment>
      ))}
    </>
  );
};
