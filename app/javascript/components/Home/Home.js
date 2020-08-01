import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import Table from './Table/Table';
import axios from 'axios';


class Home extends Component {
  state = {
    course_modules: []
  };

  async componentDidMount() {
    const { data: { data: modules } } = await axios.get('/episodes.json');
    const newModules = modules.map(({ id, title, description }) => ({ id, title, description, active: false }));

    this.setState({ course_modules: newModules });
  }

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
