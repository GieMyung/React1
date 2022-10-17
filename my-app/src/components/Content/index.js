import React from 'react'
import { Button } from '../ButtonE'
import {
    ContentContainer, ContentWrap, ContentRow,
    Column1, TextWrapper, TopLine,
    Heading, Subtitle, BtnWrap, Column2, ImgWrap, Img
} from './ContentE'

const Content = ({
    lightBg, id, imgStart, topLine, lightText, headLine,
    darkText, description, buttonLabel, img, alt,
    primary, dark}) => {
  return (
    <>
        <ContentContainer lightBg = {lightBg} id={id}>
            <ContentWrap>
                <ContentRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine >
                                {topLine}
                            </TopLine>
                            <Heading lightText={lightText}>
                                {headLine}
                            </Heading>
                            <Subtitle darkText={darkText}>
                                {description}
                            </Subtitle>
                            <BtnWrap>
                                <Button to='home' 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark ={dark ? 1:0}

                                >{buttonLabel}</Button>
                            </BtnWrap>

                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                    </Column2>
                </ContentRow>
            </ContentWrap>

        </ContentContainer>
    </>
  )
}

export default Content