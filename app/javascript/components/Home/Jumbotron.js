import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: #d74234;
  min-height: 550px;
  padding: 100px 0;
  color: #ffffff;
`;

const Header = styled.h1`
  color: #ffffff;
  font-weight: 700;
  font-size: 40px;
  line-height: 52px;
`;

const Subhead = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

const Button = styled.a`
  display: inline-block;
  text-decoration: bold;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0;
  background: #ffffff;
  color: #333 !important;
  padding: 10px 20px;
  font-size: 18px;
  box-shadow: 0px 0px 0px 3px #473228,
  -6px 6px #ef5f17,
  -6px 6px 0px 3px #473228;
`;

export default () => (
  <Section className="home-section--1">
    <div className="container">
      <div className="row">
        <div className="col col-sm-12 col-md-5">
          <div className="pt-4 mt-4">
            <Header>React For Rails Developers</Header>
            <Subhead>Supercharge your Ruby on Rails Apps with React.js</Subhead>
            <div className="cta-wrapper">
              <Button className="btn fancy-btn">Get Started</Button>
            </div>
          </div>
        </div>
        <div className="col col-sm-12 col-md-7">
          <div className="pt-4 mt-4 text-center">
            <iframe src="https://www.youtube.com/embed/5F_JUvPq410" width="560" height="315" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </Section>
);
