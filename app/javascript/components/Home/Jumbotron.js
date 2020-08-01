import React from 'react';

const Jumbotron = () => {
  return (
    <section className="home-section--1">
      <div className="container">
        <div className="row">
          <div className="col col-sm-12 col-md-5">
            <div className="pt-4 mt-4">
              <h1>React For Rails Developers</h1>
              <p>Supercharge your Ruby on Rails Apps with React.js</p>
            </div>
          </div>
          <div className="col col-sm-12 col-md-7">
            <div className="pt-4 mt-4 text-center">
              <iframe src="https://www.youtube.com/embed/5F_JUvPq410" width="560" height="315" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
