import { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import Footer from '@components/Footer/Footer';
import { useTypesSelector } from '@hooks/useTypedSelector';
import { setApp } from '@slices/appSlice';

import styles from './AppRoot.module.scss';

const AppRoot = memo(() => {
  return (
    <div className={styles.appInner}>
      <Outlet />
    </div>
  );
});

export default AppRoot;
