import React from 'react';
import { Link } from 'react-router-dom';

export const DashboardActions = () => {
  return (
    <div class="dash-buttons">
      <Link to="/edit-profile" class="btn btn-green btn-round">
        <i class="fas fa-user-circle text-primary"></i> Edit Profile
      </Link>
      <Link to="/add-education" class="btn btn-green btn-round">
        <i class="fas fa-graduation-cap text-primary"></i> Add Education
      </Link>
    </div>
  );
};

export default DashboardActions;
