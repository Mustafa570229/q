import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import "./Chains.css"

const Chains = () => {
  const [collectionNames, setCollectionNames] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'collection-names'), (snapshot) => {
      setCollectionNames(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  const handleShow = (name) => {
    localStorage.setItem('coll-name', JSON.stringify(name));
    
    
  };

  return (
    <div className='chains'>
      {collectionNames.map((coll, index) => (
        <Link to={coll.id} key={index} onClick={() => handleShow(coll.name)}>
          {coll.name}
        </Link>
      ))}
    </div>
  );
};

export default Chains;
