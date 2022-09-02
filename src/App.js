// import 'bulma/css/bulma.min.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Contact from './views/Contact/index';
import Game from './views/Game/index';
import Header from './components/Header/index';
import Home from './views/Home/index';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route index element={<Home />}></Route> */}
        <Route path='/' element={<Home />}></Route>
        <Route path='game' element={<Game />}></Route>
        <Route path='contact' element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
