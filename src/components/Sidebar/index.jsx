import React from 'react';
import Icon from '../Icon';

import './Sidebar.css';

const Sidebar = () => (
  <div className="Sidebar-container">

    <div className="Sidebar-icons">
      <Icon icon="refresh" />
      <Icon icon="settings" />
    </div>
  </div>
);

export default Sidebar;

