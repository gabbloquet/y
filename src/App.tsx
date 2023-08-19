import { BrowserRouter } from "react-router-dom";
import { Router } from "./containers/Router";
import './index.scss';

const App = () => (
  <main className="App">
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </main>
);

export default App;
