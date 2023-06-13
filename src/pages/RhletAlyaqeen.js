import React, { useEffect, useState, useRef } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import Collapse from 'react-bootstrap/Collapse';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Page.css';

const RhletAlyaqeen = () => {
  const [data, setData] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState('');
  const [open, setOpen] = useState(true);
  const listRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'The first journay'));
        const newData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setData(newData);
      } catch (error) {
        console.error('Error retrieving data:', error);
      }
    };

    fetchData();
  }, []);

  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId);
    scrollToTop();
  };

  const selectedContent = data.find((item) => item.id === selectedItemId);

  const scrollToTop = () => {
    window.scrollTo({
      top: 122,
      behavior: 'smooth',
    });
  };

  const handleOutsideClick = (event) => {
    if (listRef.current && !listRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className='page'>
      <div className='text'>
        <h1 className='title'>{selectedContent?.title || data[0]?.title}</h1>
        <pre className='pre'>{selectedContent?.content || data[0]?.content}</pre>
      </div>
      <button
        className={!open ? 'btn1' : 'btn2'}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {!open ? <FaArrowLeft size={30} /> : <FaArrowRight size={30} />}
      </button>
      <Collapse in={open}>
        <div ref={listRef} className='list' id="example-collapse-text">
          <ul className='custom-scrollbar'>
            {data.map((item) => (
              <li
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={selectedItemId === item.id ? 'selected' : ''}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </Collapse>
    </div>
  );
};

export default RhletAlyaqeen;
