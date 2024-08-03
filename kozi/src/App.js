import { Provider } from "react-redux";
 
import Sidebar, { ahmed } from "./components/Sidebar";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home, Store } from "@mui/icons-material";
import Cartdetails from "./components/Cartdetails";
import ShoppingCartContext from "./components/ShoopingCartContext";
function App() {

  return (
<ShoppingCartContext>
 <Navbar/>
 <Routes>
 <Route path="/product" element={<Product/>}></Route>
 <Route path="/item/:id" element={<Cartdetails/>}></Route>
 </Routes>
 </ShoppingCartContext>

  )
}

export default App;

