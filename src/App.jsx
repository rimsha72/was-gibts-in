import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/RootLayout/Layout';
import HomePage from './pages/Home';
import Catalog from './pages/Catalog';
import Category from './pages/Category';
import Detail from './pages/Detail';
import Event from './pages/Event';
import Participated from './pages/Participated';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/category" element={<Category />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/event" element={<Event />} />
          <Route path="/companies" element={<Participated />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
