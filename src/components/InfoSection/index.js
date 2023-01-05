import React from 'react'
import { Button } from '../ButtonElement'

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img
} from './InfoElements';

const InfoSection = ({lightbg, id, imgstart, topLine, lightText, headLine, darkText, description, buttonLabel, img, alt, primary, dark}) => {
  return (
    <>
      <InfoContainer lightbg={lightbg} id={id}>
        <InfoWrapper>
          <InfoRow imgstart={imgstart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button to='home'
                   primary={primary ? 1 : 0}
                   dark={dark ? 1 : 0}
                   >{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>  
      </InfoContainer>  
    </>
  )
}

export default InfoSection