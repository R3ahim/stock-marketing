import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './Pages/About/About';
import AddService from './Pages/AddService/AddService';
import Blog from './Pages/Blog/Blog';
import Edit from './Pages/Edit/Edit';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageStockServices from './Pages/ManageStockService/ManageStockServices';
import LoveSSelect from './Pages/LoveSelect/LoveSSelect';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import StockDetail from './Pages/StockDetail/StockDetail';
import MyItems from './Pages/MyItems/MyItems';
import RequestionAuth from './Pages/Login/RequireAuth/RequestionAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>             
        <Route path="/blog" element={<Blog></Blog>}></Route>   
      <Route path="/stock/:serviceId" element={
        <RequireAuth>
          <StockDetail></StockDetail>
        </RequireAuth>
      }></Route>        
       
        <Route path="/addservice" element={
          <RequireAuth>
            <AddService></AddService>
          </RequireAuth>
        }></Route>
        <Route path="/manage" element={
          <RequireAuth>
            <ManageStockServices></ManageStockServices>
          </RequireAuth>
        }></Route>
        <Route path="/edit/:id" element={
          <RequireAuth>
           <Edit></Edit>
          </RequireAuth>
        }></Route>
        <Route path="/myItems" element={
          <RequireAuth>
         <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path="/love" element={
          <RequestionAuth>
            <LoveSSelect></LoveSSelect>
          </RequestionAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
