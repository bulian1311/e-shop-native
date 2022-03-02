import React from "react";
import { StyledView } from "./offer.styled";
import { Spacer, Headline, Info, Hero } from "../../../components";
import { Container } from "../../../containers";

export const OfferScreen = () => {
  return (
    <Container>
      <StyledView>
        <Headline size="h2">Offer</Headline>
      </StyledView>

      <Spacer />

      <Info message="Use “MEGSL” Cupon For Get 90%off" />

      <Spacer />

      <Hero title="Super Sale 50% Off" description="Special birthday Lafyuu" />

      <Spacer />

      <Hero title="Super Sale 50% Off" description="Special birthday Lafyuu" />

      <Spacer />

      <Hero title="Super Sale 50% Off" description="Special birthday Lafyuu" />

      <Spacer />
    </Container>
  );
};
