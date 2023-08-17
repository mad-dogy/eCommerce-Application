import './index.scss';
import { BaseRegisterPage } from './pages/RegisterPages/BaseRegisterPage/BaseRegisterPage';
import { ExtendRegisterPage } from './pages/RegisterPages/ExtendRegisterPage/ExtendRegisterPage';

export const App = (): JSX.Element => (
  <div className="app">
    <ExtendRegisterPage />
  </div>
);
