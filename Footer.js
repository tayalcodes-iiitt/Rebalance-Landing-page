import React from "react";
import styled from "styled-components";


export default function Footer() {

  return (
    <Footermain>
      <Footerwrapper>
        <Headingandbutton>
          <Headingwrapper>
            <H2>Meet Rebalance, the partner you can trust on.</H2>
          </Headingwrapper>
          {/* <Formwrapper>
            <Form>
              < input type="text" placeholder="Enter your email"/>
            </Form>
            <Form>
              <input type="text" placeholder="Enter Mobile no"/>
            </Form>
          </Formwrapper> */}
          {/* <ButtonWrapper>Submit</ButtonWrapper> */}
        </Headingandbutton>
      </Footerwrapper>
      <Footerwrapper>
        <Footerlinkcontainer2>
          <H1>=rebalance</H1>
          {/* <Heading2>About us</Heading2> */}
          <a href={'/terms'}><Heading2>Terms & conditions </Heading2></a>
          <a href={'/privacy-policy'}><Heading2>Privacy Policy </Heading2></a>
          <a href={'/onboarding-page'}><Heading2>Testinglink </Heading2></a>
          
        </Footerlinkcontainer2>
      </Footerwrapper>
      {/* <Footerwrapper> */}
        {/* <Footerlinkcontainer3> */}
          <P>
            © All rights reserved. Rebalance. Powered by Techteam_rebalance.
            Image License Info.
          </P>
        {/* </Footerlinkcontainer3> */}
      {/* </Footerwrapper> */}
    </Footermain>
  );
}
// export default Footer;

const Footermain = styled.div`
  background-color: rgb(21, 44, 91);
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const Formwrapper = styled.div`
  display:flex;
  flex-direction:column;
`;
const Divide2 = styled.div`
  justify-content: center;
`;
const P = styled.div`
  // width: 100%;
  color: white;
  font-family: "DM Sans", sans-serif;
  text-allign: center;
  margin-left:20px;
  margin-right:20px;
  margin-bottom:30px;
  justify-content: center;
  text-align: center;
`;
const Heading2 = styled.div`
  padding-top: 25px;
  // padding-left: 40%;
  color: white;
  font-family: "Rubik", sans-serif;
  font-size: 1.2em;
  "& :hover": {
    textdecoration: "underline";
  }
`;

const Form = styled.div`
      // border: 2px solid #E1E1E1;
    // height: 65px;
    padding: 15px;
    border-radius: 5px;
    width: 100%;
    color: #2E2E2E;
   
`;
const H1 = styled.div`
  color: white;
  font-size: 2.5em;
  font-family: "Rubik", sans-serif;
  //   padding-bottom: 10%;
  text-align:left;

`;
const Footerlinkcontainer2 = styled.div`
  width: 90%;
  display: flex;
  // margin-top: 0px;
  // margin-right: 15%;
  // margin-bottom: 20px;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 0px;
  @media screen and (max-width: 991px) {
    // margin-top: 60px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    -flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    -justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    -align-items: center;
  }
`;
const Footerlinkcontainer = styled.div`
  padding-left: 23%;
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: flex-between;
  @media screen and (max-width: 479px) {
    justify-content: flex-start;
  }
  @media screen and (max-width: 767px) {
    justify-content: space-start;
  }
  @media screen and (max-width: 991px) {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;
const Footerlinkcontainer3 = styled.div`
  padding-left: 8%;
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: flex-between;
  @media screen and (max-width: 479px) {
    justify-content: flex-start;
  }
  @media screen and (max-width: 767px) {
    justify-content: space-start;
    text-align: center;
  }
  @media screen and (max-width: 991px) {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;

const Headingwrapper = styled.div`
  width: 100%;
  max-width: 1250px;
  //   margin-left: 10%;
`;
const H2 = styled.div`
  margin-top: 0px;
  margin-bottom: 0px;
  font-family: "Rubik", sans-serif;
    color: rgb(21, 44, 91);
  font-size: 2.5em;
  line-height: 74px;
  font-weight: bold;
  color: rgb(255, 255, 255);
  line-height: 50px;
  @media screen and (max-width: 479px) {
    line-height: 40px;
    font-family: sans-serif;
  }
  @media screen and (max-width: 479px) {
    line-height: 40px;
    font-family: "Rubik", sans-serif;
    }
  @media screen and (max-width: 991px){
    line-height: 60px;
    font-family: "Rubik", sans-serif;
  }
`;
const ButtonWrapper = styled.div`
  margin-right: 5%;
  margin-left: 10%;
  margin-top: 10px;
  padding: 16px 50px 16px 28px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-style: none;
  border-radius: 4px;
  background-color: rgb(24, 92, 255);
  transition-property: background-color;
  transition-duration: 200ms;
  transition-timing-function: ease;
  color: rgb(255, 255, 255);
  font-size: 18px;
  line-height: 32px;
  @media screen and (max-width: 991px) {
    border-radius: 4px;
  }
`;

const Headingandbutton = styled.div`
  display: flex;
  width: 90%;
     margin-top: 80px;
  // margin-left: 15%;
//   margin-right: 15%;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (max-width: 991px) {
    // font size: 40px;
    // margin-bottom: 100px;
    flex-direction: column;
    align-items: flex-start;
    // line-height: 44px;
  }
`;
const Footerwrapper = styled.div`
  display: flex;
  width: 90%;
  max-width: 1270px;
  margin-right: 5%;
  margin-left: 5%;
  padding-top: 50px;
  padding-bottom: 50px;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 479px) {
    padding-top: 30px;
    padding-right: 30px;
    // padding-left: 50px;
    justify-content: space-between;
  align-items: center;

  }
  @media screen and (max-width: 767px) {
    padding-top: 40px;
    padding-left: 50px;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (max-width: 991px) {
    padding-top: 80px;
    padding-left: 50px;
    justify-content: space-between;
  align-items: center;
  }
`;
