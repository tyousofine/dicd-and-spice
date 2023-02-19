import { BrowserRouter, Routes, Route, } from 'react-router-dom';

//page components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import Search from './pages/Search';
import Recipe from './pages/Recipe';
import Blog from './pages/Blog';
// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/recipes/:id' element={<Recipe />} />
          <Route path='/search' element={<Search />} />
          <Route path='/blog' element={<Blog />} />

        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
