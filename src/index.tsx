import { createRoot } from 'react-dom/client';
import { App } from './App';

const rootElement = document.createElement('div');
rootElement.id = 'root';
const root = createRoot(rootElement);

root.render(
  <App />,
);

document.body.append(rootElement);
