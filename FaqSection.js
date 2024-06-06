import React from "react";
import styled from "styled-components";

export default function FaqSection() {
  return (
    <>
      {/* <Faqsectionmain> */}
      <WrapperFaq>
        <Texttop>questions</Texttop>
        <Heading>Frequently asked questions</Heading>
        <Textblockfaq>
          {/* Get answers to all questions you have and boost your knowledge so
            you can save, invest and spend smarter. */}
          <Hreflink>See all questions here!</Hreflink>
        </Textblockfaq>

        {/* FAQ Heading below */}
      </WrapperFaq>

      <Questionwrapper>
        <Faqcontainer>
          
          <Faqitem>
            <Faqquestionarrowwrapper className="faq-page">
              <Question1 >
                What documents do I need to register for rebalance?
              </Question1>
              <Arrow>
                <img src="https://uploads-ssl.webflow.com/6138ac24dbf13241fedfa9fb/6138ac24dbf1324d52dfaa7e_up-arrow%20down.svg" />
              </Arrow>
            </Faqquestionarrowwrapper>
            <Faqanswer>
              <Para>
              You can locate an ATM or branch nearest to you by 
              </Para>
            </Faqanswer>
            <script src="main.js"></script>
          </Faqitem>
          <Faqitem>
            <Faqquestionarrowwrapper>
              <Question1 >
                Will you show my inventory to other customers or competitors?
              </Question1>
              <Arrow>
                <img src="https://uploads-ssl.webflow.com/6138ac24dbf13241fedfa9fb/6138ac24dbf1324d52dfaa7e_up-arrow%20down.svg" />
              </Arrow>
            </Faqquestionarrowwrapper>
            <Faqanswer>
              <Para id="answer">
                If your card is missing, let us know immediately. We ll block your
              card right away send over a new one on the same day.To report a
              lost or stolen card, call us at 1800-2769-887.
              </Para>
            </Faqanswer>
          </Faqitem>
          <Faqitem>
            <Faqquestionarrowwrapper>
              <Question1>Are you sharing my data with anyone?</Question1>
              <Arrow>
                <img src="https://uploads-ssl.webflow.com/6138ac24dbf13241fedfa9fb/6138ac24dbf1324d52dfaa7e_up-arrow%20down.svg" />
              </Arrow>
            </Faqquestionarrowwrapper>
            <Faqanswer>
              <Para>
              You can contact us at 1800-XXXX-XXX or 1800-XXXX-XXX and we'll be there to help you out.
              </Para>
            </Faqanswer>
          </Faqitem>
          <Faqitem>
            <Faqquestionarrowwrapper>
              <Question1>
                Since there are zero charges of commission per transaction, and
                you are not charging my customer, How do you make money?
              </Question1>
              <Arrow>
                <img src="https://uploads-ssl.webflow.com/6138ac24dbf13241fedfa9fb/6138ac24dbf1324d52dfaa7e_up-arrow%20down.svg" />
              </Arrow>
            </Faqquestionarrowwrapper>
            <Faqanswer>
              <Para>
                If your card is missing, let us know immediately. We ll block your
              card right away send over a new one on the same day.To report a
              lost or stolen card, call us at 1800-2769-887.
              </Para>
            </Faqanswer>
          </Faqitem>
          <Faqitem>
            <Faqquestionarrowwrapper>
              <Question1>
                How can I stay updated with the latest updates?
              </Question1>
              <Arrow>
                <img src="https://uploads-ssl.webflow.com/6138ac24dbf13241fedfa9fb/6138ac24dbf1324d52dfaa7e_up-arrow%20down.svg" />
              </Arrow>
            </Faqquestionarrowwrapper>
            <Faqanswer>
              <Para>
                If your card is missing, let us know immediately. We ll block your
              card right away send over a new one on the same day.To report a
              lost or stolen card, call us at 1800-2769-887.
              </Para>
            </Faqanswer>
          </Faqitem>
          <Faqitem>
            <Faqquestionarrowwrapper>
              <Question1>
                If i list on your app, will I get more orders?
              </Question1>
              <Arrow>
                <img src="https://uploads-ssl.webflow.com/6138ac24dbf13241fedfa9fb/6138ac24dbf1324d52dfaa7e_up-arrow%20down.svg" />
              </Arrow>
            </Faqquestionarrowwrapper>
            <Faqanswer>
              <Para>
                If your card is missing, let us know immediately. We ll block your
              card right away send over a new one on the same day.To report a
              lost or stolen card, call us at 1800-2769-887.
              </Para>
            </Faqanswer>
          </Faqitem>
        </Faqcontainer>
        
      <script src="main.js"></script>
      </Questionwrapper>
      {/* </Faqsectionmain> */}
    </>
  );
}

const Faqanswer = styled.div`
  element.style {
    width: 354.237px;
}
@media screen and (max-width: 991px){
    margin-top: 10px;
}

    overflow: hidden;
    margin-top: 15px;
    margin-bottom: 10px;

`;
const Para = styled.div`
media screen and (max-width: 479px){
    font-size: 16px;
    line-height: 24px;
    color: #8a95ad;
}
@media screen and (max-width: 767px){
    font-size: 17px;
    line-height: 26px;
    color: #8a95ad;
}

    margin-bottom: 0px;
    font-family: "DM Sans", sans-serif;
    color: #8a95ad;
    font-size: 17.5px;
    line-height: 32px;

    margin-top: 0;
    margin-bottom: 8px;
    color: #8a95ad;

`;
const Arrow = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 24px;
  height: 24px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  @media screen and (max-width: 991px) {
    margin-top: 5px;
  }
  opacity: 1;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
`;

const WrapperFaq = styled.div`
  max-width: 570px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;

  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 85%;
  max-width: 1170px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 100px;
  //  margin-bottom: 100px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
`;

const Texttop = styled.div`
  margin-top: 0px;
  margin-bottom: 10px;
  font-family: Rubik;
  color: #080808;
  font-size: 12px;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: 5px;
  text-transform: uppercase;
  opacity: 1;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
`;

const Heading = styled.div`
font-family: "Rubik", sans-serif;
  color: #152c5b;
  font-size: 40px;
  line-height: 54px;
  // padding-bottom: 50px;
  font-weight: 500;
  opacity: 1;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  display: block;
  font-size: 2.8em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  @media screen and (max-width: 991px) {
    text-align: center;
  }
  @media screen and (max-width: 767px) {
    font-size: 35px;
    line-height: 44px;
  }
`;

const Textblockfaq = styled.div`
  width: 40%;
  margin-top: 37px;
  font-family: Plusjakartadisplay, sans-serif;
  color: #8a95ad;
  font-size: 16px;
  line-height: 28px;
  font-weight: 400;
  padding-bottom: 20px;

  margin-top: 10px;
  text-align: center;
`;

const Hreflink = styled.div`
  font-family: Plusjakartadisplay, sans-serif;
  color: #185cff;
  line-height: 28px;
  font-weight: 500;
  text-decoration: none;
  font-style: italic;
`;

const Questionwrapper = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 85%;
  max-width: 1170px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 100px;
  padding-bottom: 200px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;

  max-width: 770px;
  padding-top: 0px;
`;

const Faqcontainer = styled.div`
  width: 100%;
`;

const Faqitem = styled.div`
  width: 100%;
  margin-top: 65px;
  border-bottom: 1px solid #e5e5e5;

  @media screen and (max-width: 991px) {
    padding-bottom: 15px;
  }
`;
const Faqquestionarrowwrapper = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  // margin-bottom: 100px;
  width: 100%;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  cursor: pointer;
`;
const Question1 = styled.div`
  color: black;
  font-size: 20px;
  font-family: "DM Sans", sans-serif;
  line-height: 32px;
  font-weight: 550;
  // padding-bottom: 50px;
  opacity: 1;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
`;
