import { memo } from 'react';
import { Outlet } from 'react-router-dom';

const AppRoot = memo(() => (
  <div className="app">
    <Outlet />
  </div>
));

export default AppRoot;
