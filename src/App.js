import React, { useEffect, useState } from 'react';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RhletAlyaqeen from './pages/RhletAlyaqeen';
import Home from './Components/Home';
import AddingContent from './control-panel/AddingContent';
import Login from './Components/Login';
import Chains from './pages/Chains';
import Showing from './Components/Showing';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from "./firebase";
import Stories from './pages/Stories';
import Mix from './pages/Mix';
import Footer from './Components/Footer';
import RequireAuth from './context/RequiredAuth';


const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'collection-names'), (snapshot) => {
      setData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Router>
        <NavBar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/the-journey-of-certainty' element={<RhletAlyaqeen />} />
          <Route path='/chains' element={<Chains />} />
          <Route path='/stories' element={<Stories />} />
          <Route path='/mix' element={<Mix />} />


          {data.map((item) => (
            <Route key={item.id} path={`/chains/${item.id}`} element={<Showing />} />
          ))}
          <Route path='/control-panel' element={<RequireAuth><AddingContent /></RequireAuth> } />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
