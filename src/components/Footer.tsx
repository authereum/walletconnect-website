import React from "react";
import styled from "styled-components";
import telegram from "../assets/telegram.svg";
import twitter from "../assets/twitter.svg";
import { colors, fonts } from "../styles";

const SFooter = styled.footer`
  width: 100%;
  //max-width: 1200px;
  margin: 0 auto;
  height: 80px;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
`;

const SSocialIcon = styled.div`
  width: 20px;
  height: 20px;
  & img {
    height: 100%;
  }
`;

interface IExternalLinkStyleProps {
  activeLink?: boolean;
}

const SExternalLink = styled.a<IExternalLinkStyleProps>`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  & p {
    display: flex;
    align-items: center;
    padding-left: 0.5em;
    font-size: ${fonts.size.h6};
    color: rgb(${colors.lightBlue});
    font-weight: ${({ activeLink }) => (activeLink ? `700` : `500`)};
  }
`;
const Footer = (props: any) => (
  <SFooter {...props}>
    <SExternalLink
      href="https://telegram.walletconnect.org/"
      target="blank"
      rel="noreferrer noopener"
    >
      <SSocialIcon>
        <img src={telegram} alt="Telegram" />
      </SSocialIcon>
      <p>{`/walletconnect`}</p>
    </SExternalLink>
    <SExternalLink
      href="https://twitter.walletconnect.org/"
      target="blank"
      rel="noreferrer noopener"
    >
      <SSocialIcon>
        <img src={twitter} alt="Twitter" />
      </SSocialIcon>
      <p>{`@walletconnect`}</p>
    </SExternalLink>
  </SFooter>
);

export default Footer;
