import { memo } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './AuthRoot.module.scss';

const AuthRoot = memo(() => (
  <div className={styles.authRoot}>
    <div className={styles.content}>
      <Outlet />
    </div>
  </div>
));

export default AuthRoot;
