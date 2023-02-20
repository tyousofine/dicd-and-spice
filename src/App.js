import { BrowserRouter, Routes, Route, } from 'react-router-dom';

//page components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import Search from './pages/Search';
import Recipe from './pages/Recipe';
import Blog from './pages/Blog';
import { useColor } from './hooks/useColor';
// styles
import './App.scss';
import ThemeSelector from './components/ThemeSelector';

function App() {

  const { mode } = useColor();
  return (


    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
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
