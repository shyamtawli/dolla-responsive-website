import React from 'react'
import { FaFacebook,FaInstagram,FaTwitter,FaLinkedin} from 'react-icons/fa'

import {
    FooterContainer,
    FooterWrap,
    FooterLinkContainer,
    FooterLinkWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    ScocialIconLink
} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinkContainer>
                <FooterLinkWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/signin'>How it works</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Careers</FooterLink>
                            <FooterLink to='/signin'>Investor</FooterLink>
                            <FooterLink to='/signin'>Terms of Services</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to='/signin'>Contact</FooterLink>
                            <FooterLink to='/signin'>Support</FooterLink>
                            <FooterLink to='/signin'>Destination</FooterLink>
                            <FooterLink to='/signin'>Sponsorships</FooterLink>
                            <FooterLink to='/signin'>Terms of Services</FooterLink>
                    </FooterLinkItems>
                </FooterLinkWrapper>
                
                <FooterLinkWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to='/signin'>Submit Video</FooterLink>
                            <FooterLink to='/signin'>Ambassadors</FooterLink>
                            <FooterLink to='/signin'>Agency</FooterLink>
                            <FooterLink to='/signin'>Influencer</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to='/signin'>Instagram</FooterLink>
                            <FooterLink to='/signin'>Facebook</FooterLink>
                            <FooterLink to='/signin'>YouTube</FooterLink>
                            <FooterLink to='/signin'>Twitter</FooterLink>
                    </FooterLinkItems>
                </FooterLinkWrapper>
            </FooterLinkContainer>
            <SocialMedia>
                <SocialMediWrap>
                    <SocialLogo to='/'>dolla</SocialLogo>
                    <WebsiteRights>dolla © 2022 All rights reseved.</WebsiteRights>
                    <SocialIcons>
                        <ScocialIconLink>
                            <FaFacebook />
                        </ScocialIconLink>
                        <ScocialIconLink>
                            <FaInstagram />
                        </ScocialIconLink>
                        <ScocialIconLink>
                            <FaTwitter />
                        </ScocialIconLink>
                        <ScocialIconLink>
                            <FaLinkedin />
                        </ScocialIconLink>
                    </SocialIcons>
                </SocialMediWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer