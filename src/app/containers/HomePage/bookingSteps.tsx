import React from "react";
import {
  faCalendarAlt,
  faCarSide,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`flex flex-col items-center w-full pt-3 pb-3 lg:pt-6 lg:pb-6`}
`;

const Title = styled.h2`
  ${tw`text-3xl font-extrabold text-black lg:text-4xl`}
`;

const StepsContainer = styled.div`
  ${tw`flex flex-wrap mt-6 justify-evenly lg:mt-16`}
`;

const StepContainer = styled.div`
  ${tw`flex flex-col flex-wrap items-center m-3 transition-colors md:w-96 hover:text-red-500`}
`;

const Step = styled.div`
  max-width: 2em;

  box-shadow: 0 1.2px 12px -3px rgba(0, 0, 0, 0.4);

  ${tw`flex flex-col items-center justify-center p-6 rounded-lg `}
`;

const StepTitle = styled.span`
  ${tw`mt-4 text-lg font-semibold text-black `}
`;

const StepDescription = styled.p`
  ${tw`w-10/12 text-xs text-center text-gray-500 md:text-sm`}
`;

const StepIcon = styled.span`
  ${tw`text-4xl text-red-500 `}
`;
const BookingSteps = () => {
  return (
    <Container>
      <Title>Choose Your Path</Title>
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Choose Location</StepTitle>
          <StepDescription>
            Find the nearest MagicIsland point and book your car
          </StepDescription>
        </StepContainer>

        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Pick-Up Date</StepTitle>
          <StepDescription>
            Find the nearest MagicIsland point and book your car
          </StepDescription>
        </StepContainer>

        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCarSide} />
            </StepIcon>
          </Step>
          <StepTitle>Book Car</StepTitle>
          <StepDescription>
            Find the nearest MagicIsland point and book your car
          </StepDescription>
        </StepContainer>
      </StepsContainer>
    </Container>
  );
};

export default BookingSteps;
