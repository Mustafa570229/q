import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import RequireAuth from './context/RequiredAuth';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';
import Home from './Components/Home';
import RhletAlyaqeen from './pages/RhletAlyaqeen';
import AddingContent from './control-panel/AddingContent';
import Login from './Components/Login';
import Chains from './pages/Chains';
import Showing from './Components/Showing';
import Stories from './pages/Stories';
import Mix from './pages/Mix';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'collection-names'), (snapshot) => {
      const newData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setData(newData);
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/the-journey-of-certainty" element={<RhletAlyaqeen />} />
          <Route path="/chains" element={<Chains />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/mix" element={<Mix />} />

          {data.map((item) => (
            <Route key={item.id} path={`/chains/${item.id}`} element={<Showing />} />
          ))}

          <Route path="/control-panel" element={<RequireAuth><AddingContent /></RequireAuth>} />
          <Route path="/login" element={<Login />} />
        </Routes>

       
      </Router>
    </div>
  );
};

export default App;
