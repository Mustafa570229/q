import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import './Chains.css';
import img from '../images/bg1.png';

const Chains = () => {
  const [collectionNames, setCollectionNames] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'collection-names'), (snapshot) => {
      const newData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setCollectionNames(newData);
    });

    return unsubscribe;
  }, []);

  const handleShow = (name) => {
    localStorage.setItem('coll-name', JSON.stringify(name));
  };

  return (
    <div className="chains">
      {collectionNames.map((coll) => (
        <div className="chains-div" key={coll.id}>
          <img src={img} alt="..." />
          <Link to={coll.id} onClick={() => handleShow(coll.name)}>
            {coll.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Chains;
