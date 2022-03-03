import React from "react";
import { useRoute } from "@react-navigation/native";
import { HeartIcon } from "../../../components/atoms/icons";
import {
  LayoutBack,
  Carousel,
  Headline,
  Paragraph,
  Spacer,
  Rating,
  SizePicker,
  ColorPicker,
  RecomendedProducts,
  Button,
  Image,
} from "../../../components";
import { StyledHeadlineContainer } from "./product-details.styled";

const product = {
  id: "dsfsdfuiswyeuhsf11",
  title: "Product test test test test test test",
  price: 29.99,
  sizes: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  colors: ["#FFC833", "#40BFFF", "#FB7181", "#53D1B6", "#5C61F4", "#223263"],
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex ut eos voluptates dicta totam corporis est dolores, alias at officiis error amet dolorum placeat ab praesentium facilis unde cumque nostrum.",
  images: [
    "https://c.dns-shop.ru/thumb/st4/fit/500/500/1ea46f7b719ca9a0d48d18a08e3d9499/6dd7b85859f43f84142cfaf5dd62cb9d274f6173bea8fffc1c7e121e0b8004ef.jpg.webp",
    "https://c.dns-shop.ru/thumb/st4/fit/500/500/1ea46f7b719ca9a0d48d18a08e3d9499/6dd7b85859f43f84142cfaf5dd62cb9d274f6173bea8fffc1c7e121e0b8004ef.jpg.webp",
    "https://c.dns-shop.ru/thumb/st4/fit/500/500/1ea46f7b719ca9a0d48d18a08e3d9499/6dd7b85859f43f84142cfaf5dd62cb9d274f6173bea8fffc1c7e121e0b8004ef.jpg.webp",
    "https://c.dns-shop.ru/thumb/st4/fit/500/500/1ea46f7b719ca9a0d48d18a08e3d9499/6dd7b85859f43f84142cfaf5dd62cb9d274f6173bea8fffc1c7e121e0b8004ef.jpg.webp",
    "https://c.dns-shop.ru/thumb/st4/fit/500/500/1ea46f7b719ca9a0d48d18a08e3d9499/6dd7b85859f43f84142cfaf5dd62cb9d274f6173bea8fffc1c7e121e0b8004ef.jpg.webp",
  ],
};

export const ProductDetailsScreen = () => {
  const { params } = useRoute();

  console.log(params);

  const renderImages = product.images.map((img) => (
    <Image src={img} height={240} />
  ));

  return (
    <LayoutBack>
      <Carousel items={renderImages} />
      <Spacer />

      <StyledHeadlineContainer>
        <Headline style={{ flexBasis: "90%" }}>{product.title}</Headline>
        <HeartIcon style={{ flexBasis: "10%", marginTop: 8 }} />
      </StyledHeadlineContainer>

      <Spacer size="small" />

      <Rating rating={4} />

      <Spacer size="small" />

      <Paragraph weight="bold" size="title" color="primary">
        {product.price}
      </Paragraph>

      <Spacer size="small" />

      <SizePicker sizes={product.sizes} />

      <Spacer size="small" />

      <ColorPicker colors={product.colors} />

      <Spacer size="large" />

      <Paragraph size="title" color="disabled">
        Description
      </Paragraph>

      <Spacer size="small" />

      <Paragraph size="body" color="disabled">
        {product.description}
      </Paragraph>

      <Spacer size="large" />

      <RecomendedProducts />

      <Spacer size="large" />

      <Button title="Add To Cart" />

      <Spacer size="large" />
    </LayoutBack>
  );
};
