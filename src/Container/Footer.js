import React from "react";
import Footer from "../components/Footer";
import {
  CreatorWrapper,
  Divider,
  ImgWrap,
  Sub,
  Img,
} from "../components/Footer/FooterElements";
import Icon from "../components/Icons/index";
import vansfooter from "../images/vanswhitelogo.png";
const FooterContainer = () => {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <CreatorWrapper>
              <ImgWrap>
                <Img src={vansfooter} alt=" " />
              </ImgWrap>
              <Divider />
              <Sub>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
                atque incidunt qui iusto veniam eligendi aliquid fuga, hic
                pariatur eos consequuntur eaque. Nulla facilis iste impedit, a
                dolores ea harum!
              </Sub>
            </CreatorWrapper>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>About us</Footer.Title>
            <Footer.Link href="#">products</Footer.Link>
            <Footer.Link href="#">products</Footer.Link>
            <Footer.Link href="#">products</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>About us</Footer.Title>
            <Footer.Link href="#">products</Footer.Link>
            <Footer.Link href="#">products</Footer.Link>
            <Footer.Link href="#">products</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Socials</Footer.Title>
            <Footer.Link href="#">
              <Icon className="fab fa-facebook-f" />
              Facebook
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className="fab fa-instagram" />
              Instagram
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className="fab fa-youtube" />
              Youtube
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className="fab fa-twitter" />
              Twitter
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className="fab fa-github" />
              Github
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className="fab fa-linkedin" />
              LinkedIn
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className="fab fa-tiktok" />
              Tiktok
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
};

export default FooterContainer;
