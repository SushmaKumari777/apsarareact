// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import { Route, Routes } from 'react-router';
import Pooh from './components/Pooh';
import Naina from './components/Naina';
import Geet from './components/Geet';
import Aisa from './components/Aisa';
import Halfstyle from './components/Halfstyle';
import Desi from './components/Desi';
import Sanskari from './components/Sanskari';
import Allm from './components/Allm';
import Jsr from './components/Jsr';
import Footer from './components/Footer';
import Strapkurti from './components/Strapkurti';
import Addtocart from './components/addtocart';

function App() {
  return (
    <div>
      <Header> </Header>

      {/* <Home> </Home> */}
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/pooh" element={<Pooh />} />
        <Route path="/naina" element={<Naina />} />
        <Route path="/geet" element={<Geet />} />
        <Route path="/aisa" element={<Aisa />} />
        <Route path="/halfstyle" element={<Halfstyle />} />
        <Route path="/desi" element={<Desi />} />
        <Route path="/sanskari" element={<Sanskari />} />
        <Route path="/allm" element={<Allm />} />
        <Route path="/jsr" element={<Jsr />} />
        <Route path="/strapkurti" element={<Strapkurti />} />
        <Route path="/Addtocart" element={<Addtocart />} />



        <Route path='*' element={<Home />} />
        <Route path="/footer" element={<Header />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
