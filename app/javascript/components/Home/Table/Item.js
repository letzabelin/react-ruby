import React from 'react';
import Thumbnail from './Thumbnail';
import styled from 'styled-components';

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

export default ({ title, description, handleVideoChange }) => (
  <div className="row pt-4 pb-4">
    <div className="col-md-10 offset-md-1">
      <div>
        <div className="card px-5">
          <div className="row">
            <div className="col-md-4">
              <Thumbnail />
            </div>
            <div className="col-md-8">
              <div className="pt-4 pb-4">
                <div className="h4">{title}</div>
                <p>{description}</p>
                <div className="cta-wrapper">
                  <Button onClick={handleVideoChange} className="cta-btn">Watch This Video</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
