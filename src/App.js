
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom'
import TrangChu from './pages/TrangChu/TrangChu';
import Dangky from './pages/DangKy/Dangky';
import DangNhap from './pages/DangNhap/DangNhap';
import ChiTietPhim from './pages/TrangChiTietPhim/ChiTietPhim';
import Header from './Components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Route path="/trangchu" component={ TrangChu }/>
      <Route path="/dangky" component={ Dangky }/>
      <Route path="/dangnhap" component={ DangNhap }/>
      <Route path="/chitietphim" component={ ChiTietPhim }/>
      
    </BrowserRouter>
  );
}

export default App;
