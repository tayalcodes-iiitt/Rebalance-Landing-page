import React from "react";
import styled from "styled-components";

export default function IntroSection() {
  return (
    <>
    <BlueBackground className="rebalanceBlueColor"/>
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <Oval>
            <OvalText>
              <img src="https://uploads-ssl.webflow.com/6138ac24dbf13241fedfa9fb/6138ad4710d65401100cc44f_India%20Flag%20Emoji.png" loading="lazy" alt="" width={"22px"}/>
              <LaunchText>We'll be Launching Soon!</LaunchText>
            </OvalText>
          </Oval>
         <H1>People do business with people they know, like and trust.</H1> 
          <HeaderP className="font20  whiteColor">
            {/* Sachin this is the font */}
          Your customers are always counting on you! With Rebalance, 
          we provide you the platform and experience to stay in control of your business and customer relations.
          </HeaderP>
        </div>
      </LeftSide>
      <RightSide className="flexSpaceCenter">
        <ImageWrapper>
        <PharmacistImage src="./pharmacypic.jpeg" alt="Responsive image"/>
        </ImageWrapper>
      </RightSide>
    </Wrapper>
    
    </>

  );
}


const BlueBackground = styled.div`
width:70vw;
height:80%;
position:absolute;
z-index: 0;
@media (max-width: 960px) {
  width:100%;
}
`;

const H1 = styled.div`
font-family: "Rubik", sans-serif;
font-size: 44px;
color:white;
// font-size: 20px;
font-weight: Bold;
line-height: 46px;
}
`;


const Wrapper = styled.section`
  // padding-top: 80px;
  width: 85%;
  height: 80vh;
  @media (max-width: 960px) {
    flex-direction:column-reverse;
  }
`;
const LeftSide = styled.div`
  width: 48%;
  height: 100%;
  max-width:540px;
  z-index:1;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    // text-align: center;
  }
  @media (max-width: 560px) {
    margin: 60px 0 0 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    // margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  font-family: "DM Sans", sans-serif;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    // text-align: center;
    max-width: 100%;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  // max-width: 528px;
  border-radius: 8px;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    align-content: center;
  }
`;

const PharmacistImage = styled.img`
width:100%;
`;

const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;

const Oval = styled.div`
background: white;
border-radius: 40px;
width: fit-content;
padding: 20px 15px 15px;
margin-bottom: 30px;
`;

const OvalText = styled.div`
display:flex;
flex-direction:row;
align-items:center;
`

const LaunchText = styled.p`
color:#185cff;
margin-left:10px;
margin-right:10px;
font-size: 14px;
line-height: 15px;
font-weight: bold;
`
