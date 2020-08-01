import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import Table from './Table/Table';


class Home extends Component {
  state = {
    course_modules: [
      { id: 1, title: '1. Setting up a new Ruby on Rails App with React', description: 'Lorem ipsum', active: false },
      { id: 2, title: '2. Adding React to an Existing Rails App', description: 'Lorem ipsum', active: false },
      { id: 3, title: '3. Building a Hello World App', description: 'Lorem ipsum', active: false },
      { id: 4, title: '4. Adding React Router DOM to your App', description: 'Lorem ipsum', active: false },
    ],
  };

  handleVideoChange = (item) => (evt) => {
    evt.preventDefault();

    const course_modules = [...this.state.course_modules];
    course_modules.map((module) => {
      module.active = false;
    });

    item.active = !item.active;

    course_modules[item.id - 1] = item;

    this.setState({ course_modules })
  }

  render() {
    return (
      <>
        <Jumbotron />
        <Table handleVideoChange={this.handleVideoChange} course_modules={this.state.course_modules} />
      </>
    );
  }
}

export default Home;
