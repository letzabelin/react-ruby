import React, { useState, useEffect } from 'react';
import Jumbotron from './Jumbotron';
import Table from './Table/Table';
import axios from 'axios';

export default () => {
  const [course_modules, setCourseModules] = useState([]);

  const fetchData = async () => {
    const { data: { data: modules } } = await axios.get('/episodes.json');
    const newModules = modules.map(({ id, title, description }) => ({ id, title, description, active: false }));
    setCourseModules(newModules);
  };

  const handleVideoChange = (item) => (evt) => {
    evt.preventDefault();

    const new_course_modules = [...course_modules];
    new_course_modules.map((module) => {
      module.active = false;
    });

    item.active = !item.active;

    new_course_modules[item.id - 1] = item;

    setCourseModules(new_course_modules);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Jumbotron />
      <Table handleVideoChange={handleVideoChange} course_modules={course_modules} />
    </>
  );
}
