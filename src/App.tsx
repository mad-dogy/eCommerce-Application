import { Counter } from "./components/Counter";
import './index.scss'

export const App = (): JSX.Element => {
  
  return (
     <div className="app">
      <Counter />
    </div>
  );
}