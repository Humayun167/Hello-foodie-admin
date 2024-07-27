import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Order from "./pages/Orders/Order";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url ="http://localhost:4000";
  return (
    <div>
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <hr />
      <div className="app-content">
        <Sidebar></Sidebar>
        <Routes>
          <Route path ="/add" element={<Add url={url}></Add>}></Route>
          <Route path ="/list" element={<List url={url}></List>}></Route>
          <Route path ="/orders" element={<Order url={url}></Order>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;