import React from "react";
import { FooterContainer } from "./FooterElements";
import { Container, Wrapper, Row, Column, Link, Title } from "./FooterElements";
import FooterBackground from "../../images/FooterBg2.png";

const Footer = ({ children, ...restProps }) => {
  return (
    <Container
      {...restProps}
      style={{
        backgroundImage: `url(${FooterBackground})`,
      }}
    >
      {children}
    </Container>
  );
};

Footer.Wrapper = function FooterWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Footer.Row = function FooterWrapper({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterWrapper({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterWrapper({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterWrapper({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

export default Footer;
