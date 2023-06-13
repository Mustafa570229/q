import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import Collapse from 'react-bootstrap/Collapse';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Page.css';

const Mix = () => {
  const [data, setData] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState('');
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Mix'));
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
      top: 117,
      behavior: 'smooth',
    });
  };

  const handleOutsideClick = (event) => {
    if (event.target.classList.contains('page')) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className='page'>
      <div className='text'>
        <h4 className='title'>{selectedContent?.title || data[0]?.title}</h4>
        <pre className='pre'>{selectedContent?.content || data[0]?.content}</pre>
      </div>
      <button
        className={`btn ${open ? 'btn2' : 'btn1'}`}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {open ? <FaArrowRight size={30} /> : <FaArrowLeft size={30} />}
      </button>
      <Collapse in={open}>
        <div className='list' id="example-collapse-text">
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

export default Mix;
