import { createRoot } from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.createElement('div');
rootElement.id = 'root';
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)

document.body.append(rootElement);
