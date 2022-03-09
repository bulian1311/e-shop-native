import React from "react";
import { useQuery } from "graphql-hooks";
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
  ProductListHorizontal,
  Button,
  Image,
} from "../../../components";
import { priceFormater } from "../../../utils";
import { StyledHeadlineContainer } from "./product-details.styled";
import { query, queryOptions } from "./product-details.graphql";

const product = {
  sizes: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  colors: ["#FFC833", "#40BFFF", "#FB7181", "#53D1B6", "#5C61F4", "#223263"],
};

export const ProductDetailsScreen = () => {
  const { params }: any = useRoute();
  const { data, loading } = useQuery(query, queryOptions(params.productId));
  const price =
    loading ||
    priceFormater.format(data.product.priceRange.minVariantPrice.amount);

  const renderImages =
    loading ||
    data.product.images.edges.map((img: any) => (
      <Image src={img.node.url} height={240} />
    ));

  if (loading) {
    return <Paragraph>Loading...</Paragraph>;
  }

  return (
    <LayoutBack>
      <Carousel items={renderImages} />
      <Spacer />
      <StyledHeadlineContainer>
        <Headline style={{ flexBasis: "90%" }}>{data.product.title}</Headline>
        <HeartIcon style={{ flexBasis: "10%", marginTop: 8 }} />
      </StyledHeadlineContainer>

      <Spacer size="small" />
      <Rating rating={4} />

      <Spacer size="small" />
      <Paragraph weight="bold" size="title" color="primary">
        {price}
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
        {data.product.description}
      </Paragraph>

      <Spacer size="large" />
      <Button title="Add To Cart" />

      <Spacer size="large" />
      <ProductListHorizontal title="You Might Also Like" />

      <Spacer size="large" />
    </LayoutBack>
  );
};
