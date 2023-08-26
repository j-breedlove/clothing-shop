import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";

const Shop = () => {
  return (
    <div>
      <h1>I am Shop</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
