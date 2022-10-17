import styled from 'styled-components'

export const HeroContainer = styled.div`
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

`

export const HeroBg = styled.div`
    position:absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: green;

`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    width: 100vw;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    color: white;
    font-size: 5rem;
    text-align: center;


    @media screen and (max-width: 768px) {
        font-size: 3rem;
    }
`

export const HeroP = styled.p`
    margin-top: 35px;
    color: white;
    font-size: 3rem;
    text-align: center;
    max-width: 100%;
   

    @media screen and (max-width: 480px) {
        font-size: 1.5rem;
      
    }
`

export const HeroP1 = styled.p`
    margin-top: 24px;
    left: 0;
    color: white;
    font-size: 2.5rem;
    text-align: center;
    max-width: 100%;


    @media screen and (max-width: 768px) {
        font-size: 1.3rem;
    }
`

