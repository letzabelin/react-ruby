import React from 'react';

import Item from './Item';
import ActiveItem from './ActiveItem';

export default ({ course_modules, handleVideoChange }) => {
  const items = course_modules.map((module) => {
    return (
      module.active ?
      <ActiveItem handleVideoChange={handleVideoChange(module)} key={module.id} title={module.title} description={module.description} /> :
      <Item handleVideoChange={handleVideoChange(module)} key={module.id} title={module.title} description={module.description} /> 
    );
  });

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
};

