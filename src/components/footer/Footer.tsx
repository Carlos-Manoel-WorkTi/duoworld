import React from 'react';
import { ContainerFooter, FooterContent, FooterLinks, FooterText} from './style/FooterStyled';
import { LoaderDW } from '../../pages/style/HomeStyled';

const Footer: React.FC<{ wdb?: boolean }> = ({ wdb = true }) => {
  return (
    <ContainerFooter awb={wdb}>
      <FooterContent>
        {/*, FooterLogo  <FooterLogo src={logoSrc} alt="Logo" /> */}
        <LoaderDW size={35} />
        <FooterLinks>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </FooterLinks>
        <FooterText>© 2024 Your Company. All rights reserved.</FooterText>
      </FooterContent>
    </ContainerFooter>
  );
}
export default Footer;