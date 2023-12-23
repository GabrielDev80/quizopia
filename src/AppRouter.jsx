import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { HomePage, CategoryPage } from './pages';

const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/category/:category' element={<CategoryPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
