import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/signin/signin.component";

import { Routes, Route } from "react-router-dom"

const Shop = () => {
  return (
    <div className="shop">
      <h1>Shop</h1>
    </div>
  );
}

const App = () => {
return (
  <Routes>
    <Route path="/" element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path="shop" element={<Shop/>}/>
      <Route path="signin" element={<SignIn/>}/>

    </Route>
  </Routes>
  );
};

export default App;
