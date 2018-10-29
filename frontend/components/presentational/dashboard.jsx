import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardLeft from './dashboard_left';
import DashboardRight from './dashboard_right';

// <div>Search Bar</div>
const Dashboard = () => {

  return (
    <section className='dashboard-main'>
      <DashboardLeft />

      <DashboardRight />
    </section>
  );
};

export default Dashboard;
