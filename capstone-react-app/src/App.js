import './App.css';
import Home from './routes/Home';
import Products from './routes/Products';
import Surrounds from './routes/Surrounds';
import Discount from './routes/Discount';
import CreateAccount from './routes/createAccount';
import SignUp from './routes/signUp';
import Details from './routes/Details';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/products" element={<Products />}/>
      <Route path="/surrounds" element={<Surrounds />}/>
      <Route path="/discount" element={<Discount />}/>
      <Route path="/CreateAccount" element={<CreateAccount />}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="/details" element={<Details />}/>
    </Routes>
  );
}

export default App;