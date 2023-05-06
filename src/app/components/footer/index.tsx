import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";

const FooterContainer = styled.div`
  min-height: 25em;
  background-color: rgb(21 42 76);
  ${tw`flex flex-row flex-wrap min-w-full pb-1 md:pt-12 pt-7`}
`;
const InnerContainer = styled.div`
  ${tw`flex flex-wrap h-full min-w-full max-w-screen-2xl`}
`;
const AboutContainer = styled.div`
  ${tw`flex flex-col mr-2 md:mr-10`}
`;
const AboutText = styled.p`
  ${tw`max-w-xs mt-8 text-sm font-normal leading-5 text-white `}
`;
const SectionContainer = styled.div`
  ${tw`flex flex-col mb-3 mr-3 md:mr-16 `}
`;
const LinksList = styled.ul`
  ${tw`flex flex-col list-none outline-none `}
`;
const ListItem = styled.li`
  ${tw`mb-3 text-sm text-white`};

  & > a {
    ${tw`text-sm text-white`}
  }
`;
const HeaderTitle = styled.h3`
  ${tw`mb-3 text-2xl font-bold text-white `}
`;
const Footer = () => {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" />
          <AboutText>
            MagicIsland is a Car renting and selling company in North Cyprus
            which has high quality cars and top rated service
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Our Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#" />
              Home
            </ListItem>
            <ListItem>
              <a href="#" />
              About Us
            </ListItem>
            <ListItem>
              <a href="#" />
              Services
            </ListItem>
            <ListItem>
              <a href="#" />
              Models
            </ListItem>
            <ListItem>
              <a href="#" />
              Blog
            </ListItem>
          </LinksList>
        </SectionContainer>

        <SectionContainer>
          <HeaderTitle>Our Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#" />
              FAQ
            </ListItem>
            <ListItem>
              <a href="#" />
              Contact Us
            </ListItem>
            <ListItem>
              <a href="#" />
              Support
            </ListItem>
            <ListItem>
              <a href="#" />
              Privacy Policy
            </ListItem>
            <ListItem>
              <a href="#" />
              Terms & Conditions
            </ListItem>
          </LinksList>
        </SectionContainer>
      </InnerContainer>
    </FooterContainer>
  );
};

export default Footer;
