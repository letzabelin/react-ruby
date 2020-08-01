import React, { Component } from 'react';
import Item from './Item';
import ActiveItem from './ActiveItem';

class Table extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const items = this.props.course_modules.map((module) => {
      return (
        module.active ?
        <ActiveItem handleVideoChange={this.props.handleVideoChange(module)} key={module.id} title={module.title} description={module.description} /> :
        <Item handleVideoChange={this.props.handleVideoChange(module)} key={module.id} title={module.title} description={module.description} /> 
      );

    })
    return (
      <div className="pt-5 pb-5">
        <div className="container">
          <div className="text-center">
            <h2 className="pt-4 pb-4">React For Rails Developers - Videos</h2>
          </div>
      { items.length > 0 && items }
    </div>
  </div>
    );
  }
}

export default Table;
