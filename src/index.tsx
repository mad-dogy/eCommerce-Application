import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './App';
import { setupStore } from './store/store';
import './index.scss';
import { createElement } from 'react';

const rootElement = document.createElement('div');
rootElement.id = 'root';
const root = createRoot(rootElement);

const store = setupStore();

root.render(
  <Provider store={store}>
    <App />
    {createElement((...props) => {
      console.log(props);
      return <div />;
    }, {
      className: 'aaaa',
    })}
  </Provider>,
);

document.body.append(rootElement);
