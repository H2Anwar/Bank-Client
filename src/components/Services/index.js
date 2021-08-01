import React from "react";
import Icon1 from "../../images/Deposit.svg";
import Icon2 from "../../images/Transfer.svg";
import Icon3 from "../../images/Credit.svg";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServiceElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Deposit</ServicesH2>
          <ServicesP>Lots of description maybe I dunno really.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Transfer</ServicesH2>
          <ServicesP>Lots of description maybe I dunno really.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Credit Card</ServicesH2>
          <ServicesP>Lots of description maybe I dunno really.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
