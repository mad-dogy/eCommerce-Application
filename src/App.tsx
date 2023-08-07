import './index.scss';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';

export const App = (): JSX.Element => {
  
  return (
    <div className="app">
      <RegisterPage/>
    </div>
  );
}