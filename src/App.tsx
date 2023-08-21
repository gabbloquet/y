import { BrowserRouter } from 'react-router-dom';
import { Heading } from '@chakra-ui/react';
import './index.scss';

const App = () => (
  <main className="App">
    <BrowserRouter>
      <Heading>Y is an amazing social network !</Heading>
    </BrowserRouter>
  </main>
);

export default App;
