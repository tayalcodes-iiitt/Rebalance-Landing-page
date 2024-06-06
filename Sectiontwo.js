import React from "react";
import styled from "styled-components";

export default function Sectiontwo() {
  return (
    <>
      <Herowrapper id="sectiontwo" className="flexbox-container">
        <Textbox className="text-container">
          <Headerc className="impact-creation">
            Impact creation
            </Headerc>
          <Headerf className="impact-creation">
            Growing your business with you, for you
          </Headerf>
        </Textbox>

        <Threetiles className="three-tile-box">
          <Container className="solo-tile">
            <PharmacistImage src="./picture1.png" alt="Responsive image" />
            <Heading1>
              <h4>Whatsapp Integration</h4>
            </Heading1>
            <Heading2>
              <h6>
                Save time with an inbuilt Whatsapp system to manage your orders
                in one place.
              </h6>
            </Heading2>
          </Container>
          <Container className="solo-tile">
            <PharmacistImage src="./picture2.png" alt="Responsive image" />
            <Heading1>
              <h4>Repeating Sales Orders</h4>
            </Heading1>
            <Heading2>
              <h6>
                Boost your sales with repeat orders with our integrated
                notification and billing system
              </h6>
            </Heading2>
          </Container>
          <Container className="solo-tile">
            <PharmacistImage src="./picture3.png" alt="Responsive image" />
            <Heading1>
              <h4>Earn Additional Income</h4>{" "}
            </Heading1>
            <Heading2>
              <h6>
                Use our platform and start making at least an additional
                ₹2000/month
              </h6>
            </Heading2>
          </Container>
        </Threetiles>
      </Herowrapper>
    </>
  );
}

const Herowrapper = styled.div`
display: flex;
  width: 100%;
  height: 80%;
  position: relative;
  // z-index: 0;
`;
const Headerc = styled.div`
  width: 35%;
  // margin-top: 10%;
  margin-left: 33%;
  margin-right: 40%;
  font-family: "DM Sans", sans-serif;
  color: var(--swatch_8bd7e5a2);
  font-size: 13px;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: 5px;
  text-transform: uppercase;
  text-align: center;

  @media screen and (max-width: 767px) {
    font-size: 12px;
    line-height: 20px;
  }
`;
const Headerf = styled.div`
  width: 70%;
  padding-top: 10px;
  margin-left: 15%;
  margin-right: 15%;
  font-family: "Rubik", sans-serif;
  color: var(--swatch_8bd7e5a2);
  font-size: 45px;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: 0px;
  // text-transform: uppercase;
  text-align: center;
  @media screen and (max-width: 991px) {
    font-size: 35px;
    line-height: 44px;
  }
  @media screen and (min-width: 991px) {
    font-size: 35px;
    line-height: 44px;
  }
`;
const Textbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  margin-top: 102px;
`;

const Threetiles = styled.div`
  width: 90%;
  display: flex;
  margin-top: 50px;
  margin-left: 5%;
  // margin-bottom: 20px;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 100px;
  @media screen and (max-width: 991px) {
    margin-top: 50px;
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

const Container = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 479px) {
    width: 100%;
  }
  @media screen and (max-width: 991px) {
    width: 100%;
    max-width: 350px;
  }
`;
const PharmacistImage = styled.img`
  margin-top: 10%;
  width: 90%;
  align-items: center;
`;
const Heading1 = styled.div`
  width: 90%;
  text-align: center;
  margin-top: 10%;
  font-family: "DM Sans", sans-serif;`;

const Heading2 = styled.div`
    width: 70%;
    margin-top: 25px;
    font-family: "DM Sans", sans-serif;
    color: rgb(138, 149, 173);
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
    text-align: center;
}
`;
