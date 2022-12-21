import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Nav from "./component/Navbar";
import Cart from "./component/Cart";
import { Product } from "./Product";
import { Provider } from "react-redux";
import { store } from "./redux/store";


function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} Product={Product} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
