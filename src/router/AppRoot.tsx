import { memo } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './AppRoot.module.scss';

const AppRoot = memo(() => (
  <div className={styles.app}>
    <Outlet />
  </div>
));

export default AppRoot;
