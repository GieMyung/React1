import React from 'react'
import {
    HeroContainer, HeroBg, VideoBg,
    HeroContent, HeroH1, HeroP, HeroP1
        } from './HeroE'
import Video from '../../videos/video.mp4';


const HeroSection = () => {
  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>
                Hi!
            </HeroH1>
            <HeroP>
                I'M GIEMYUNG LEE!
            </HeroP>

            <HeroP1>
                Front-End Developer <br></br>
                Full-Stack Developer<br></br>
                Software-Engineer
            </HeroP1>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection